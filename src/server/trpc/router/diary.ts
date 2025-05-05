import { z } from "zod";
import { procedure, router } from "../trpc";

// 일기 데이터를 위한 검증 스키마
const diaryInputSchema = z.object({
  title: z.string().min(1, "제목은 필수입니다"),
  content: z.string().min(1, "내용은 필수입니다"),
  date: z.date(),
  weatherId: z.number(),
});

// 댓글 데이터를 위한 검증 스키마
const commentInputSchema = z.object({
  content: z.string().min(1, "내용은 필수입니다"),
  diaryId: z.number(),
  author: z.string().min(1, "작성자는 필수입니다"),
});

export const diaryRouter = router({
  // 모든 일기 가져오기
  getAll: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.diary.findMany({
      orderBy: { date: "desc" },
      include: {
        weather: true,
      },
    });
  }),

  // 특정 ID의 일기 상세 정보 가져오기
  getById: procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const diary = await ctx.prisma.diary.findUnique({
        where: { id: input.id },
        include: {
          weather: true,
          comments: {
            orderBy: { createdAt: "desc" },
          },
        },
      });
      return diary;
    }),

  // 특정 날짜의 날씨 정보 가져오기
  getWeatherByDate: procedure
    .input(
      z.object({
        date: z.union([z.date(), z.string().transform((str) => new Date(str))]),
      })
    )
    .query(async ({ ctx, input }) => {
      // 날짜 범위 설정 (해당 날짜의 00:00:00부터 23:59:59까지)
      const startDate = new Date(input.date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(input.date);
      endDate.setHours(23, 59, 59, 999);

      const weather = await ctx.prisma.weather.findFirst({
        where: {
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      return weather;
    }),

  // 날씨에 맞는 추천 정보 가져오기
  getRecommendationsByWeather: procedure
    .input(
      z.object({
        weatherType: z.string(),
        temperature: z.number().optional(),
        category: z
          .enum(["clothes", "foods", "activities", "movies"])
          .optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { weatherType, temperature, category } = input;

      let tempCondition = {};
      if (temperature !== undefined) {
        tempCondition = {
          tempMin: { lte: temperature },
          tempMax: { gte: temperature },
        };
      }

      let categoryCondition = {};
      if (category) {
        categoryCondition = { category };
      }

      const recommendations = await ctx.prisma.recommendation.findMany({
        where: {
          weatherType,
          ...tempCondition,
          ...categoryCondition,
        },
      });

      return recommendations;
    }),

  // 모든 카테고리의 추천 정보 가져오기
  getAllRecommendations: procedure
    .input(
      z.object({
        weatherType: z.string(),
        temperature: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { weatherType, temperature } = input;

      let tempCondition = {};
      if (temperature !== undefined) {
        tempCondition = {
          tempMin: { lte: temperature },
          tempMax: { gte: temperature },
        };
      }

      // 모든 추천 정보 가져오기
      const allRecommendations = await ctx.prisma.recommendation.findMany({
        where: {
          weatherType,
          ...tempCondition,
        },
      });

      // 카테고리별 필터링
      const clothes = allRecommendations.find(
        (rec) =>
          rec.clothes && rec.clothes.length > 0 && rec.title?.includes("옷차림")
      );

      const foods = allRecommendations.find(
        (rec) =>
          rec.foods && rec.foods.length > 0 && rec.title?.includes("음식")
      );

      const activities = allRecommendations.find(
        (rec) =>
          rec.activities &&
          rec.activities.length > 0 &&
          rec.title?.includes("활동")
      );

      const movies = allRecommendations.find(
        (rec) =>
          rec.movies && rec.movies.length > 0 && rec.title?.includes("영화")
      );

      return {
        clothes,
        foods,
        activities,
        movies,
      };
    }),

  // 새 일기 생성하기
  create: procedure
    .input(
      diaryInputSchema.extend({
        date: z.union([z.date(), z.string().transform((str) => new Date(str))]),
        selectedClothes: z.string().optional(),
        selectedFood: z.string().optional(),
        selectedActivity: z.string().optional(),
        selectedMovie: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.diary.create({
        data: input,
        include: {
          weather: true,
        },
      });
    }),

  // 일기 업데이트
  update: procedure
    .input(
      z.object({
        id: z.number(),
        data: diaryInputSchema.partial().extend({
          selectedClothes: z.string().optional(),
          selectedFood: z.string().optional(),
          selectedActivity: z.string().optional(),
          selectedMovie: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      return await ctx.prisma.diary.update({
        where: { id },
        data,
        include: {
          weather: true,
        },
      });
    }),

  // 일기 삭제
  delete: procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // 관련 댓글도 함께 삭제
      await ctx.prisma.comment.deleteMany({
        where: { diaryId: input.id },
      });

      return await ctx.prisma.diary.delete({
        where: { id: input.id },
      });
    }),

  // 댓글 생성
  createComment: procedure
    .input(commentInputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.comment.create({
        data: input,
      });
    }),

  // 댓글 삭제
  deleteComment: procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.comment.delete({
        where: { id: input.id },
      });
    }),
});
