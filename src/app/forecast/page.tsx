"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WeatherIcon } from "@/components/weather-icon";
import { api } from "@/trpc/react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProcessedWeatherData } from "@/types/weather";

interface Location {
  id: number;
  name: string;
  nx: number;
  ny: number;
}

export default function ForecastPage() {
  // 현재 선택된 위치
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    id: 1,
    name: "서울",
    nx: 60,
    ny: 127,
  });

  // 날씨 정보 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 한국 주요 도시와 해당 좌표 (기상청 격자 좌표계)
  const locations: Location[] = [
    { id: 1, name: "서울", nx: 60, ny: 127 },
    { id: 2, name: "인천", nx: 55, ny: 124 },
    { id: 3, name: "부산", nx: 98, ny: 76 },
    { id: 4, name: "대구", nx: 89, ny: 90 },
    { id: 5, name: "광주", nx: 58, ny: 74 },
    { id: 6, name: "대전", nx: 67, ny: 100 },
    { id: 7, name: "울산", nx: 102, ny: 84 },
    { id: 8, name: "제주", nx: 52, ny: 38 },
  ];

  // API로부터 날씨 데이터 가져오기
  const { data: weatherData, refetch } =
    api.weather.getWeatherFromAPI.useQuery<ProcessedWeatherData>(
      {
        nx: selectedLocation.nx,
        ny: selectedLocation.ny,
      },
      {
        enabled: false, // 자동으로 실행하지 않음
        refetchOnWindowFocus: false,
      }
    );

  // DB에 날씨 데이터 저장 mutation
  const saveWeatherMutation = api.weather.createFromAPI.useMutation({
    onSuccess: () => {
      // 성공 시 동작
      console.log("날씨 데이터 저장 성공");
    },
  });

  // 날씨 데이터 가져오기
  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      await refetch();
      // 데이터 저장
      saveWeatherMutation.mutate({
        nx: selectedLocation.nx,
        ny: selectedLocation.ny,
      });
    } catch (error) {
      console.error("날씨 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 위치 변경 시 자동으로 날씨 데이터 가져오기
  useEffect(() => {
    fetchWeatherData();
  }, [selectedLocation]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">날씨 예보</h1>
        <p className="text-muted-foreground mb-8">
          기상청 API를 통해 실시간 날씨 정보를 확인하세요.
        </p>
      </div>

      {/* 위치 선택 */}
      <div className="flex flex-wrap gap-2">
        {locations.map((location) => (
          <Button
            key={location.id}
            variant={
              selectedLocation.id === location.id ? "default" : "outline"
            }
            onClick={() => setSelectedLocation(location)}
            className="min-w-24"
          >
            {location.name}
          </Button>
        ))}
      </div>

      {/* 날씨 정보 카드 */}
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">
            {selectedLocation.name} 날씨
          </CardTitle>
          <CardDescription>
            기상청 API 좌표: NX {selectedLocation.nx}, NY {selectedLocation.ny}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading || !weatherData ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">
                  <WeatherIcon type={weatherData.condition} size={64} />
                </div>
                <div>
                  <div className="text-4xl font-bold">
                    {weatherData.temperature}°C
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {weatherData.condition}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5">
                  <div className="text-sm text-muted-foreground mb-1">습도</div>
                  <div className="text-lg font-medium">
                    {weatherData.humidity || "정보 없음"}%
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <div className="text-sm text-muted-foreground mb-1">풍속</div>
                  <div className="text-lg font-medium">
                    {weatherData.wind || "정보 없음"} m/s
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t">
                <Button
                  onClick={fetchWeatherData}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "데이터 가져오는 중..." : "새로고침"}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* API 설명 정보 */}
      <Card>
        <CardHeader>
          <CardTitle>기상청 API 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            이 페이지는 기상청에서 제공하는 단기예보 API를 사용하여 실시간 날씨
            정보를 표시합니다.
          </p>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="font-medium">API 이름</div>
              <div className="col-span-2">단기예보정보 조회서비스</div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="font-medium">API URL</div>
              <div className="col-span-2 break-all">
                https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstInfoService_2.0/getUltraSrtNcst
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="font-medium">제공 정보</div>
              <div className="col-span-2">기온, 강수량, 습도, 풍속 등</div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="font-medium">좌표계</div>
              <div className="col-span-2">기상청 격자 좌표계 (NX, NY)</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
