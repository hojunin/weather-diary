"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { RecommendationGrid } from "@/components/recommendation-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreateDiary() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSyncingWeather, setIsSyncingWeather] = useState(false);
  const [selectedClothes, setSelectedClothes] = useState<string>("");
  const [selectedFood, setSelectedFood] = useState<string>("");
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  // 입력한 날짜에 대한 날씨 정보 가져오기
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    refetch: refetchWeather,
    error: weatherError,
  } = api.diary.getWeatherByDate.useQuery(
    { date },
    {
      enabled: !!date,
      retry: 1,
    }
  );
  // 날씨 데이터 동기화 mutation
  const syncWeatherMutation = api.weather.createFromAPI.useMutation({
    onSuccess: () => {
      toast.success("날씨 정보가 성공적으로 동기화되었습니다.");
      refetchWeather();
    },
    onError: (error) => {
      console.error("날씨 동기화 오류 상세:", error);
      toast.error(`날씨 동기화 실패: ${error.message}`);
    },
  });

  // 일기 작성 mutation
  const createDiary = api.diary.create.useMutation({
    onSuccess: (data) => {
      router.push(`/diary/${data.id}`);
    },
    onError: (error) => {
      console.error("일기 저장 중 오류 상세:", error);
      toast.error(`일기 저장에 실패했습니다: ${error.message}`);
    },
  });

  // 추천 정보 가져오기
  const { data: recommendationsData, isLoading: isRecommendationsLoading } =
    api.diary.getAllRecommendations.useQuery(
      {
        weatherType: weatherData?.condition || "맑음",
        // temperature: weatherData?.temperature,
        temperature: 22,
      },
      {
        enabled: !!weatherData,
        staleTime: 60 * 1000, // 1분 동안 캐시 유지
      }
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !date || !weatherData?.id) return;

    setIsSubmitting(true);
    try {
      // @ts-ignore - 타입 정의가 최신화되지 않아 추가 필드를 인식하지 못함
      await createDiary.mutateAsync({
        title,
        content,
        date,
        weatherId: weatherData.id,
        selectedClothes,
        selectedFood,
        selectedActivity,
        selectedMovie,
      });
    } catch (error) {
      console.error("일기 저장 중 오류 발생:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 날씨 동기화 함수
  const handleSyncWeather = async () => {
    if (!date) return;

    setIsSyncingWeather(true);
    try {
      // 서울 좌표 (기본값)
      await syncWeatherMutation.mutateAsync({ nx: 60, ny: 127 });
    } catch (error) {
      console.error("날씨 동기화 중 오류 발생:", error);
    } finally {
      setIsSyncingWeather(false);
    }
  };

  // 날짜 변경 핸들러
  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  // 날씨 정보에 따른 아이콘 선택
  const getWeatherIcon = () => {
    if (!weatherData) return null;

    const condition = weatherData.condition.toLowerCase();
    if (condition.includes("맑음")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-400"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2"></path>
          <path d="M12 21v2"></path>
          <path d="M4.22 4.22l1.42 1.42"></path>
          <path d="M18.36 18.36l1.42 1.42"></path>
          <path d="M1 12h2"></path>
          <path d="M21 12h2"></path>
          <path d="M4.22 19.78l1.42-1.42"></path>
          <path d="M18.36 5.64l1.42-1.42"></path>
        </svg>
      );
    } else if (condition.includes("비")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
          <path d="M16 14v6"></path>
          <path d="M8 14v6"></path>
          <path d="M12 16v6"></path>
        </svg>
      );
    } else if (condition.includes("구름") || condition.includes("흐림")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      );
    } else if (condition.includes("눈")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-200"
        >
          <path d="M2 12h20"></path>
          <path d="M12 2v20"></path>
          <path d="m4.93 4.93 14.14 14.14"></path>
          <path d="m19.07 4.93-14.14 14.14"></path>
        </svg>
      );
    }

    return null;
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">일기 작성하기</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>오늘의 날씨</CardTitle>
          <CardDescription>
            날짜를 선택하면 해당 날짜의 날씨 정보가 표시됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-full sm:w-[280px]">
                <label className="block text-sm font-medium mb-1">
                  날짜 선택
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP", { locale: ko })
                      ) : (
                        <span>날짜 선택</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateChange}
                      initialFocus
                      locale={ko}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* 날씨 동기화 버튼 */}
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 self-end"
                onClick={handleSyncWeather}
                disabled={isSyncingWeather || !date}
                title="날씨 정보 동기화"
              >
                <RefreshCw
                  className={cn("h-4 w-4", isSyncingWeather && "animate-spin")}
                />
              </Button>
            </div>

            {isWeatherLoading ? (
              <div className="flex items-center justify-center p-4 bg-muted/30 dark:bg-muted/10 rounded-md h-24">
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>날씨 정보 로딩 중...</span>
                </div>
              </div>
            ) : weatherError ? (
              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 rounded-md">
                <div>날씨 정보를 불러오는데 오류가 발생했습니다.</div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetchWeather()}
                  disabled={isWeatherLoading}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  다시 시도
                </Button>
              </div>
            ) : weatherData ? (
              <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border dark:border-blue-900/50">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-500/20">
                    {getWeatherIcon()}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
                      {weatherData.city}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        {weatherData.temperature}°C
                      </span>
                      <span className="text-blue-600 font-medium dark:text-blue-200">
                        {weatherData.condition}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-blue-600/80 dark:text-blue-300/80">
                      <span>습도: {weatherData.humidity ?? "65"}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-muted/30 dark:bg-muted/10 rounded-md">
                <div className="text-muted-foreground">
                  선택한 날짜의 날씨 정보가 없습니다.
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleSyncWeather}
                  disabled={isSyncingWeather || !date}
                >
                  {isSyncingWeather ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      동기화 중...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      날씨 동기화
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 추천 정보 카드 추가 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>오늘 날씨에 맞는 추천</CardTitle>
          <CardDescription>
            날씨에 맞는 옷차림, 음식, 활동, 영화 추천을 선택해보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="clothes" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="clothes">옷차림</TabsTrigger>
              <TabsTrigger value="foods">음식</TabsTrigger>
              <TabsTrigger value="activities">활동</TabsTrigger>
              <TabsTrigger value="movies">영화</TabsTrigger>
            </TabsList>

            <div className="mt-6">
              {isRecommendationsLoading ? (
                <div className="flex justify-center p-8">
                  <svg
                    className="animate-spin h-8 w-8 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <>
                  <TabsContent value="clothes">
                    {recommendationsData?.clothes?.clothes ? (
                      <RecommendationGrid
                        items={recommendationsData.clothes.clothes}
                        selectedItem={selectedClothes}
                        onSelect={setSelectedClothes}
                        category="clothes"
                      />
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        선택한 날씨에 맞는 옷차림 추천이 없습니다.
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="foods">
                    {recommendationsData?.foods?.foods ? (
                      <RecommendationGrid
                        items={recommendationsData.foods.foods}
                        selectedItem={selectedFood}
                        onSelect={setSelectedFood}
                        category="foods"
                      />
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        선택한 날씨에 맞는 음식 추천이 없습니다.
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="activities">
                    {recommendationsData?.activities?.activities ? (
                      <RecommendationGrid
                        items={recommendationsData.activities.activities}
                        selectedItem={selectedActivity}
                        onSelect={setSelectedActivity}
                        category="activities"
                      />
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        선택한 날씨에 맞는 활동 추천이 없습니다.
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="movies">
                    {recommendationsData?.movies?.movies ? (
                      <RecommendationGrid
                        items={recommendationsData.movies.movies}
                        selectedItem={selectedMovie}
                        onSelect={setSelectedMovie}
                        category="movies"
                      />
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        선택한 날씨에 맞는 영화 추천이 없습니다.
                      </div>
                    )}
                  </TabsContent>
                </>
              )}
            </div>
          </Tabs>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>일기 내용</CardTitle>
            <CardDescription>
              마크다운 형식으로 일기를 작성할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                제목
              </label>
              <Input
                id="title"
                placeholder="일기 제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-1"
              >
                내용
              </label>
              <Textarea
                id="content"
                placeholder="오늘의 일기를 작성해보세요. 마크다운 형식을 지원합니다."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] font-mono"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              취소
            </Button>
            <Button type="submit" disabled={isSubmitting || !weatherData}>
              {isSubmitting ? "저장 중..." : "일기 저장하기"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
