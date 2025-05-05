import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* 페이지 헤더 */}
      <section className="relative py-20 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-400/5 opacity-50"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-400/10 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative rounded-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              서비스 소개
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              날씨데일리는 오늘의 날씨를 기록하고 날씨에 어울리는 일기를 작성할
              수 있는 개인 일기장 서비스입니다.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 mt-10">
        <div className="max-w-4xl mx-auto">
          {/* 날씨데일리란? */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold">날씨데일리란?</h2>
            </div>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              날씨데일리는 당신의 매일을 날씨와 함께 기록하는 개인 일기장
              서비스입니다. 그날의 날씨 정보를 자동으로 불러와 저장하고, 날씨에
              어울리는 옷차림, 음식, 활동, 영화 등을 추천받아 기록할 수
              있습니다.
            </p>
            <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border-primary/5 shadow-lg shadow-primary/5 backdrop-blur-sm">
              <p className="text-center text-xl font-medium italic">
                "오늘의 날씨와 함께, 나의 하루를 기록하세요"
              </p>
            </Card>
          </section>

          {/* 핵심 가치 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
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
                  className="text-cyan-400"
                >
                  <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                  <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold">핵심 가치</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/50 p-6 rounded-2xl border border-primary/5 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">날씨 기반 추천</h3>
                <p className="text-muted-foreground leading-relaxed">
                  그날의 날씨에 맞는 옷차림, 음식, 활동, 영화 등을 추천받아 더
                  풍성한 일기를 작성할 수 있습니다.
                </p>
              </div>

              <div className="bg-card/50 p-6 rounded-2xl border border-primary/5 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-4">
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
                    className="text-cyan-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">자동 날씨 기록</h3>
                <p className="text-muted-foreground leading-relaxed">
                  일기를 작성할 때 해당 날짜의 날씨가 자동으로 기록되어 나중에
                  추억을 되돌아볼 때 더 생생하게 기억할 수 있습니다.
                </p>
              </div>

              <div className="bg-card/50 p-6 rounded-2xl border border-primary/5 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4">
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
                    className="text-purple-500"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">마크다운 지원</h3>
                <p className="text-muted-foreground leading-relaxed">
                  마크다운 형식을 지원하여 더 풍부하고 표현력 있는 일기를 작성할
                  수 있습니다.
                </p>
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <section className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 p-8 rounded-3xl border border-primary/5 shadow-lg shadow-primary/5 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold mb-4">지금 바로 일기 작성하기</h3>
            <p className="text-muted-foreground mb-6">
              날씨데일리와 함께 오늘의 날씨와 더불어 나만의 하루를 기록해보세요.
            </p>
            <Button
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 text-white font-medium px-8"
              asChild
            >
              <Link href="/create">일기 작성하기</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
