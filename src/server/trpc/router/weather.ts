import { z } from "zod";
import { procedure, router } from "../trpc";
import { fetchWeatherAPI, processWeatherData } from "@/lib/utils";
import { ProcessedWeatherData } from "@/types/weather";

// 날씨 데이터를 위한 검증 스키마
const weatherInputSchema = z.object({
  city: z.string().min(1, "도시 이름은 필수입니다"),
  temperature: z.number(),
  condition: z.string(),
  humidity: z.number().int().min(0).max(100),
  wind: z.number().min(0),
});

// 날씨 API 파라미터 스키마
const weatherApiParamsSchema = z.object({
  nx: z.number().default(55),
  ny: z.number().default(127),
});

export const weatherRouter = router({
  // 모든 날씨 데이터 가져오기
  getAll: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.weather.findMany({
      orderBy: { city: "asc" },
    });
  }),

  // 특정 도시 날씨 가져오기
  getByCity: procedure
    .input(z.object({ city: z.string() }))
    .query(async ({ ctx, input }) => {
      const weather = await ctx.prisma.weather.findFirst({
        where: {
          city: {
            equals: input.city,
            mode: "insensitive", // 대소문자 구분 없이 검색
          },
        },
      });
      return weather;
    }),

  // 기상청 API에서 날씨 데이터 가져오기
  getWeatherFromAPI: procedure
    .input(weatherApiParamsSchema)
    .query(async ({ input }): Promise<ProcessedWeatherData> => {
      try {
        const apiData = await fetchWeatherAPI(input.nx, input.ny);
        const processedData = processWeatherData(apiData);
        return processedData;
      } catch (error) {
        console.error("날씨 API 데이터 가져오기 실패:", error);
        throw error;
      }
    }),

  // 새 날씨 데이터 생성하기
  create: procedure
    .input(weatherInputSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.weather.create({
        data: input,
      });
    }),

  // 기상청 API 데이터로 날씨 데이터 생성 또는 업데이트
  createFromAPI: procedure
    .input(weatherApiParamsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // API에서 날씨 데이터 가져오기
        const apiData = await fetchWeatherAPI(input.nx, input.ny);
        const processedData = processWeatherData(apiData);

        // 오늘 날짜 계산
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 같은 도시, 같은 날짜의 날씨 데이터가 이미 있는지 확인
        const existingWeather = await ctx.prisma.weather.findFirst({
          where: {
            city: processedData.city,
            date: {
              gte: today,
            },
          },
        });

        if (existingWeather) {
          // 기존 데이터 업데이트
          return await ctx.prisma.weather.update({
            where: { id: existingWeather.id },
            data: processedData,
          });
        } else {
          // 새 데이터 생성
          return await ctx.prisma.weather.create({
            data: {
              ...processedData,
              date: new Date(),
            },
          });
        }
      } catch (error) {
        console.error("날씨 API 데이터 저장 실패:", error);
        throw error;
      }
    }),

  // 날씨 데이터 업데이트
  update: procedure
    .input(
      z.object({
        id: z.number(),
        data: weatherInputSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      return await ctx.prisma.weather.update({
        where: { id },
        data,
      });
    }),

  // 날씨 데이터 삭제
  delete: procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.weather.delete({
        where: { id: input.id },
      });
    }),
});
