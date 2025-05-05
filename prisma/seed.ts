import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("시드 데이터 생성 시작...");

  // 기존 데이터 삭제
  await prisma.recommendation.deleteMany({});

  // 맑은 날씨 추천 - 옷차림
  await prisma.recommendation.create({
    data: {
      weatherType: "맑음",
      tempMin: 20,
      tempMax: 30,
      category: "clothes",
      title: "맑은 날 옷차림 추천",
      clothes: [
        "반팔 티셔츠",
        "얇은 셔츠",
        "짧은 바지",
        "캐주얼 셔츠",
        "면 바지",
      ],
    },
  });

  // 맑은 날씨 추천 - 음식
  await prisma.recommendation.create({
    data: {
      weatherType: "맑음",
      tempMin: 20,
      tempMax: 30,
      category: "foods",
      title: "맑은 날 음식 추천",
      foods: ["샐러드", "냉면", "해산물 요리", "과일", "바베큐"],
    },
  });

  // 맑은 날씨 추천 - 활동
  await prisma.recommendation.create({
    data: {
      weatherType: "맑음",
      tempMin: 20,
      tempMax: 30,
      category: "activities",
      title: "맑은 날 활동 추천",
      activities: ["피크닉", "자전거 타기", "등산", "수영", "산책"],
    },
  });

  // 맑은 날씨 추천 - 영화
  await prisma.recommendation.create({
    data: {
      weatherType: "맑음",
      tempMin: 20,
      tempMax: 30,
      category: "movies",
      title: "맑은 날 영화 추천",
      movies: ["로맨틱 코미디", "애니메이션", "액션", "모험", "판타지"],
    },
  });

  // 비 날씨 추천 - 옷차림
  await prisma.recommendation.create({
    data: {
      weatherType: "비",
      category: "clothes",
      title: "비 오는 날 옷차림 추천",
      clothes: ["레인코트", "우산", "방수 재킷", "부츠", "후드티"],
    },
  });

  // 비 날씨 추천 - 음식
  await prisma.recommendation.create({
    data: {
      weatherType: "비",
      category: "foods",
      title: "비 오는 날 음식 추천",
      foods: ["따뜻한 국수", "수프", "전골", "찌개", "핫초코"],
    },
  });

  // 비 날씨 추천 - 활동
  await prisma.recommendation.create({
    data: {
      weatherType: "비",
      category: "activities",
      title: "비 오는 날 활동 추천",
      activities: ["영화 감상", "독서", "보드게임", "요리", "실내 카페"],
    },
  });

  // 비 날씨 추천 - 영화
  await prisma.recommendation.create({
    data: {
      weatherType: "비",
      category: "movies",
      title: "비 오는 날 영화 추천",
      movies: ["스릴러", "미스터리", "드라마", "로맨스", "SF"],
    },
  });

  // 눈 날씨 추천 - 옷차림
  await prisma.recommendation.create({
    data: {
      weatherType: "눈",
      tempMin: -5,
      tempMax: 5,
      category: "clothes",
      title: "눈 오는 날 옷차림 추천",
      clothes: ["겨울 코트", "패딩 점퍼", "목도리", "장갑", "털모자"],
    },
  });

  // 눈 날씨 추천 - 음식
  await prisma.recommendation.create({
    data: {
      weatherType: "눈",
      tempMin: -5,
      tempMax: 5,
      category: "foods",
      title: "눈 오는 날 음식 추천",
      foods: ["따뜻한 스튜", "찌개", "핫초코", "구운 감자", "떡국"],
    },
  });

  // 눈 날씨 추천 - 활동
  await prisma.recommendation.create({
    data: {
      weatherType: "눈",
      tempMin: -5,
      tempMax: 5,
      category: "activities",
      title: "눈 오는 날 활동 추천",
      activities: [
        "실내 영화관",
        "따뜻한 카페",
        "온천",
        "실내 박물관",
        "집에서 책읽기",
      ],
    },
  });

  // 눈 날씨 추천 - 영화
  await prisma.recommendation.create({
    data: {
      weatherType: "눈",
      tempMin: -5,
      tempMax: 5,
      category: "movies",
      title: "눈 오는 날 영화 추천",
      movies: ["판타지", "로맨스", "가족 영화", "역사", "다큐멘터리"],
    },
  });

  console.log("시드 데이터 생성 완료!");
}

main()
  .catch((e) => {
    console.error("시드 데이터 생성 중 오류 발생:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
