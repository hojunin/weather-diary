"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { WeatherIcon } from "@/components/weather-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

export default function DiaryList() {
  const [searchTerm, setSearchTerm] = useState("");

  // 모든 일기 가져오기
  const { data: diaries, isLoading } = api.diary.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  // 검색 필터링 기능
  const filteredDiaries = diaries?.filter(
    (diary) =>
      diary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diary.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">모든 일기</h1>
        <Button asChild>
          <Link href="/create">새 일기 작성</Link>
        </Button>
      </div>

      {/* 검색 */}
      <div className="flex max-w-md">
        <Input
          placeholder="제목이나 내용으로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {/* 일기 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // 로딩 상태 스켈레톤
          Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="border-primary/5 bg-card/50">
              <CardHeader>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-6 w-full max-w-[200px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24 w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-9 w-full" />
              </CardFooter>
            </Card>
          ))
        ) : filteredDiaries && filteredDiaries.length > 0 ? (
          // 일기 목록 표시
          filteredDiaries.map((diary) => (
            <Card
              key={diary.id}
              className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {diary.date
                      ? format(new Date(diary.date), "yyyy년 MM월 dd일", {
                          locale: ko,
                        })
                      : "날짜 정보 없음"}
                  </span>
                  {diary.weather && (
                    <div className="flex items-center gap-1 text-primary">
                      <WeatherIcon type={diary.weather.condition} size={16} />
                      <span className="text-sm font-medium">
                        {diary.weather.temperature}°C
                      </span>
                    </div>
                  )}
                </div>
                <CardTitle className="line-clamp-1">{diary.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground line-clamp-3">
                  {diary.content}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href={`/diary/${diary.id}`}>자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          // 검색 결과가 없을 때
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <p className="text-muted-foreground mb-4">
              {searchTerm
                ? "검색 결과가 없습니다."
                : "아직 작성된 일기가 없습니다."}
            </p>
            <Button asChild>
              <Link href="/create">첫 일기 작성하기</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
