import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 md:py-18 rounded-2xl">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-70"></div>
          {/* 배경 원형 장식 요소들 */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-400/30 filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-500/10 filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">
              오늘의 날씨와{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                일기
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              날씨일기와 함께 일상의 순간을 기록하세요. 날씨에 맞는 옷차림,
              음식, 활동 추천까지 제공됩니다.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 text-white font-medium px-8"
                asChild
              >
                <Link href="/create">일기 작성하기</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300 font-medium px-8"
                asChild
              >
                <Link href="/about">서비스 소개</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 최근 일기 미리보기 섹션 */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">최근 일기</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            다른 사람들이 다양한 날씨에서 작성한 일기를 확인해보세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 일기 카드 */}
            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    2023년 7월 15일
                  </span>
                  <div className="flex items-center gap-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                    <span className="text-sm font-medium">맑음 28°C</span>
                  </div>
                </div>
                <CardTitle>여름 해변에서의 하루</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground line-clamp-3">
                  오늘은 날씨가 정말 좋아서 해변에 다녀왔다. 파도소리를 들으며
                  책을 읽는 시간이 너무 행복했다. 시원한 바닷바람과 따뜻한
                  햇살이 조화롭게 어우러져 완벽한 하루를 만들어 주었다...
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/diary/1">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    2023년 7월 10일
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                      <path d="M10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M20 16.5a2.5 2.5 0 0 0-5 0v.5"></path>
                      <path d="M12 16a2 2 0 0 0-4 0v1"></path>
                      <path d="M12 16a2 2 0 0 1 4 0v.5"></path>
                      <path d="M10 13V7a3 3 0 1 1 6 0v4.5"></path>
                    </svg>
                    <span className="text-sm font-medium">흐림 24°C</span>
                  </div>
                </div>
                <CardTitle>비가 올 것 같은 하늘</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground line-clamp-3">
                  오늘은 계속 구름이 끼어 있어서 우울한 기분이었다. 그래도 실내
                  카페에서 따뜻한 차 한잔과 함께 보낸 시간은 편안했다. 창밖으로
                  보이는 흐린 하늘도 나름의 운치가 있었다...
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/diary/2">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    2023년 7월 5일
                  </span>
                  <div className="flex items-center gap-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                      <path d="M16 14v6"></path>
                      <path d="M8 14v6"></path>
                      <path d="M12 16v6"></path>
                    </svg>
                    <span className="text-sm font-medium">비 22°C</span>
                  </div>
                </div>
                <CardTitle>빗소리를 들으며</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground line-clamp-3">
                  하루종일 비가 내렸다. 창문을 열고 빗소리를 들으며 오랜만에
                  책을 읽었다. 빗방울이 창문에 부딪히는 소리와 함께 차 한잔의
                  여유가 정말 좋았다. 비오는 날의 집은 더욱 아늑하게 느껴졌다...
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/diary/3">자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-16">
            <Button variant="outline" asChild>
              <Link href="/diary">더 많은 일기 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">날씨일기 특징</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            날씨일기만의 특별한 기능으로 여러분의 일상을 더 풍요롭게 기록하세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative px-6 pt-6 pb-6">
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
                  >
                    <path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 3V9L16 11"></path>
                  </svg>
                </div>
                <CardTitle>날씨 기반 일기</CardTitle>
                <CardDescription className="mt-2">
                  그날의 날씨 정보가 자동으로 기록되어 추억을 더 생생하게 남길
                  수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative px-6 pt-6 pb-6">
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
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <CardTitle>맞춤 추천</CardTitle>
                <CardDescription className="mt-2">
                  날씨에 적합한 옷차림, 음식, 활동을 추천받아 일상에 활력을
                  더해보세요.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/5 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative px-6 pt-6 pb-6">
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
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <circle cx="12" cy="10" r="2"></circle>
                    <line x1="8" y1="2" x2="8" y2="4"></line>
                    <line x1="16" y1="2" x2="16" y2="4"></line>
                  </svg>
                </div>
                <CardTitle>커뮤니티 공유</CardTitle>
                <CardDescription className="mt-2">
                  다양한 날씨에서의 경험을 다른 사용자들과 공유하고 소통할 수
                  있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
