// 기상청 API 응답 타입 정의

// 응답의 전체 구조
export interface WeatherAPIResponse {
  response: {
    header: WeatherResponseHeader;
    body: WeatherResponseBody;
  };
}

// 응답 헤더 부분
export interface WeatherResponseHeader {
  resultCode: string; // 응답메시지 코드 (00: 정상)
  resultMsg: string; // 응답메시지 내용 (NORMAL SERVICE)
}

// 응답 바디 부분
export interface WeatherResponseBody {
  dataType: string; // 데이터 타입 (XML/JSON)
  items: {
    item: WeatherItem[];
  };
  numOfRows: number; // 한 페이지 결과 수
  pageNo: number; // 페이지 번호
  totalCount: number; // 데이터 총 개수
}

// 기상 관측 항목 각각의 구조
export interface WeatherItem {
  baseDate: string; // 발표일자 (yyyyMMdd)
  baseTime: string; // 발표시각 (HHmm)
  category: string; // 자료구분코드
  nx: number; // 예보지점 X 좌표
  ny: number; // 예보지점 Y 좌표
  obsrValue: string; // 실황 값
}

// 가공된 날씨 데이터 타입
export interface ProcessedWeatherData {
  temperature: number;
  condition: string;
  humidity: number | null;
  wind: number | null;
  city: string;
}

// 카테고리별 의미
export enum WeatherCategory {
  T1H = "T1H", // 기온
  RN1 = "RN1", // 1시간 강수량
  UUU = "UUU", // 동서바람성분
  VVV = "VVV", // 남북바람성분
  REH = "REH", // 습도
  PTY = "PTY", // 강수형태 (0:없음, 1:비, 2:비/눈, 3:눈, 4:소나기)
  VEC = "VEC", // 풍향
  WSD = "WSD", // 풍속
}

// 강수형태 코드와 의미
export enum PrecipitationType {
  NONE = "0", // 없음
  RAIN = "1", // 비
  RAIN_SNOW = "2", // 비/눈
  SNOW = "3", // 눈
  SHOWER = "4", // 소나기
}

// 강수형태 코드와 날씨 상태 매핑
export const PrecipitationToCondition: Record<string, string> = {
  "0": "맑음",
  "1": "비",
  "2": "비/눈",
  "3": "눈",
  "4": "소나기",
};
