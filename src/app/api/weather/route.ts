import { NextResponse } from "next/server";
import { fetchWeatherAPI, processWeatherData } from "@/lib/utils";
import { WeatherAPIResponse, ProcessedWeatherData } from "@/types/weather";

export async function GET(request: Request) {
  try {
    // URL 쿼리 파라미터에서 nx, ny 값 가져오기
    const { searchParams } = new URL(request.url);
    const nx = parseInt(searchParams.get("nx") || "55");
    const ny = parseInt(searchParams.get("ny") || "127");

    // 날씨 데이터 가져오기
    const apiData: WeatherAPIResponse = await fetchWeatherAPI(nx, ny);
    const processedData: ProcessedWeatherData = processWeatherData(apiData);

    // 처리된 데이터 반환
    return NextResponse.json({
      success: true,
      data: processedData,
      originalData: apiData,
    });
  } catch (error) {
    console.error("날씨 API 요청 처리 중 오류 발생:", error);

    // 에러 응답
    return NextResponse.json(
      {
        success: false,
        error: "날씨 데이터를 가져오는 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
