import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  WeatherAPIResponse,
  ProcessedWeatherData,
  WeatherCategory,
  PrecipitationToCondition,
} from "@/types/weather";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 기상청 API 호출을 위한 함수
export async function fetchWeatherAPI(
  nx: number = 55,
  ny: number = 127
): Promise<WeatherAPIResponse> {
  // 현재 날짜 가져오기 (yyyyMMdd 형식)
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const baseDate = `${year}${month}${day}`;

  // 현재 시간 가져오기 (HHmm 형식)
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  const baseTime = `${hours}00`;

  // API 요청 URL 구성
  const url = `https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstInfoService_2.0/getUltraSrtNcst?pageNo=1&numOfRows=1000&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}&authKey=MoexmuQ-TTSHsZrkPg00zg`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API 호출 오류: ${response.status}`);
    }

    const data = (await response.json()) as WeatherAPIResponse;
    return data;
  } catch (error) {
    console.error("날씨 데이터 가져오기 실패:", error);
    throw error;
  }
}

// 기상청 API 데이터를 가공하여 데이터베이스 형식에 맞게 변환하는 함수
export function processWeatherData(
  apiData: WeatherAPIResponse
): ProcessedWeatherData {
  // API 응답 데이터에서 필요한 정보 추출
  const items = apiData?.response?.body?.items?.item || [];

  // 데이터 객체 초기화
  const weatherData: ProcessedWeatherData = {
    temperature: 0,
    condition: "맑음", // 기본값
    humidity: null,
    wind: null,
    city: "서울", // 기본값
  };

  // API 응답에서 필요한 데이터 추출
  items.forEach((item) => {
    if (item.category === WeatherCategory.T1H) {
      // 기온
      weatherData.temperature = parseFloat(item.obsrValue);
    } else if (item.category === WeatherCategory.REH) {
      // 습도
      weatherData.humidity = parseFloat(item.obsrValue);
    } else if (item.category === WeatherCategory.WSD) {
      // 풍속
      weatherData.wind = parseFloat(item.obsrValue);
    } else if (item.category === WeatherCategory.PTY) {
      // 강수형태
      weatherData.condition =
        PrecipitationToCondition[item.obsrValue] || "맑음";
    }
  });

  return weatherData;
}
