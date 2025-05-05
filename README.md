# 날씨데일리 (Weather Daily)

![날씨데일리 로고/메인 화면](./screenshots/main.png)

날씨데일리는 오늘의 날씨를 기록하고 날씨에 어울리는 일기를 작성할 수 있는 개인 일기장 서비스입니다. 그날의 날씨에 맞는 옷차림, 음식, 활동, 영화 등을 추천받아 더 풍성한 일기를 작성해보세요.

## 📋 주요 기능

- **날씨 자동 기록**: 일기 작성 시 해당 날짜의 날씨가 자동으로 기록됩니다
- **날씨 기반 추천**: 날씨에 맞는 옷차림, 음식, 활동, 영화 추천을 제공합니다
- **마크다운 지원**: 마크다운 형식을 지원하여 풍부한 표현이 가능합니다
- **일기 관리**: 작성한 일기를 조회, 수정, 삭제할 수 있습니다

## 🖼️ 스크린샷

### 메인 화면

![메인 화면](./screenshots/home.png)

### 일기 작성 화면

![일기 작성 화면](./screenshots/create-diary.png)

### 일기 상세 화면

![일기 상세 화면](./screenshots/diary-detail.png)

## 🛠️ 기술 스택

- **프론트엔드**: Next.js (App Router), TailwindCSS, ShadcnUI
- **백엔드**: tRPC, Prisma
- **데이터베이스**: PostgreSQL
- **API**: 기상청 날씨 API

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- PostgreSQL 데이터베이스
- pnpm

### 설치 방법

1. 저장소 클론

```bash
git clone https://github.com/yourusername/weather-daily.git
cd weather-daily
```

2. 의존성 설치

```bash
pnpm install
```

3. 환경 변수 설정

```bash
cp .env.example .env
```

`.env` 파일을 열어 필요한 환경변수를 설정해주세요.

4. 데이터베이스 마이그레이션

```bash
pnpm prisma migrate dev
```

5. 개발 서버 실행

```bash
pnpm dev
```

## 📝 환경 변수

| 변수명          | 설명                   | 예시                                                   |
| --------------- | ---------------------- | ------------------------------------------------------ |
| DATABASE_URL    | PostgreSQL 연결 문자열 | postgresql://user:password@localhost:5432/weatherdaily |
| WEATHER_API_KEY | 기상청 API 키          | YOUR_API_KEY                                           |

## 📂 프로젝트 구조

```
weather-daily/
├── prisma/              # Prisma 스키마 및 마이그레이션
├── public/              # 정적 파일
├── src/
│   ├── app/             # Next.js 앱 라우터
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── lib/             # 유틸리티 함수
│   ├── server/          # 서버 관련 코드
│   │   └── trpc/        # tRPC 라우터
│   └── trpc/            # tRPC 클라이언트
└── ...
```

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📜 라이센스

MIT 라이센스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
