"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WeatherIcon } from "@/components/weather-icon";
import { toast } from "sonner";

export default function DiaryDetail() {
  const params = useParams();
  const router = useRouter();
  const diaryId = Number(params.id);

  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [isCommentSubmitting, setIsCommentSubmitting] = useState(false);

  // 일기 데이터 가져오기
  const {
    data: diary,
    isLoading,
    error,
    refetch: refetchDiary,
  } = api.diary.getById.useQuery(
    { id: diaryId },
    {
      enabled: !isNaN(diaryId),
      refetchOnWindowFocus: false,
    }
  );

  // 날씨 추천 데이터 가져오기
  const { data: recommendationsData } =
    api.diary.getAllRecommendations.useQuery(
      {
        weatherType: diary?.weather?.condition || "",
        temperature: diary?.weather?.temperature,
      },
      {
        enabled: !!diary?.weather,
        refetchOnWindowFocus: false,
      }
    );

  // 댓글 추가 mutation
  const createCommentMutation = api.diary.createComment.useMutation({
    onSuccess: () => {
      setComment("");
      setAuthor("");
      // 데이터 새로고침 - 직접 refetch 호출
      refetchDiary();
      setIsCommentSubmitting(false);
      toast.success("댓글이 추가되었습니다");
    },
    onError: (error) => {
      setIsCommentSubmitting(false);
      toast.error(`댓글 추가 실패: ${error.message}`);
    },
  });

  // 댓글 삭제 mutation
  const deleteCommentMutation = api.diary.deleteComment.useMutation({
    onSuccess: () => {
      // 데이터 새로고침 - 직접 refetch 호출
      refetchDiary();
      toast.success("댓글이 삭제되었습니다");
    },
    onError: (error) => {
      toast.error(`댓글 삭제 실패: ${error.message}`);
    },
  });

  // 일기 삭제 mutation
  const deleteDiaryMutation = api.diary.delete.useMutation({
    onSuccess: () => {
      router.push("/");
      toast.success("일기가 삭제되었습니다");
    },
    onError: (error) => {
      toast.error(`일기 삭제 실패: ${error.message}`);
    },
  });

  // 댓글 추가 함수
  const handleAddComment = () => {
    if (!comment.trim() || !author.trim() || isCommentSubmitting) return;

    setIsCommentSubmitting(true);
    createCommentMutation.mutate({
      content: comment,
      author: author,
      diaryId: diaryId,
    });
  };

  // 댓글 삭제 함수
  const handleDeleteComment = (commentId: number) => {
    deleteCommentMutation.mutate({ id: commentId });
  };

  // 일기 삭제 함수
  const handleDeleteDiary = () => {
    if (window.confirm("정말 이 일기를 삭제하시겠습니까?")) {
      deleteDiaryMutation.mutate({ id: diaryId });
    }
  };

  // Enter 키 눌렀을 때 댓글 추가
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      comment.trim() &&
      author.trim() &&
      !isCommentSubmitting
    ) {
      e.preventDefault();
      // 브라우저 이벤트 전파 중지
      e.stopPropagation();
      handleAddComment();
    }
  };

  // 로컬 스토리지에서 이전에 사용한 작성자 이름 가져오기
  useEffect(() => {
    const savedAuthor = localStorage.getItem("commentAuthor");
    if (savedAuthor) {
      setAuthor(savedAuthor);
    }
  }, []);

  // 작성자 이름 저장
  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthor = e.target.value;
    setAuthor(newAuthor);
    if (newAuthor.trim()) {
      localStorage.setItem("commentAuthor", newAuthor);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-24" />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-full max-w-md mb-2" />
            <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-40 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !diary) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold mb-4">일기를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground mb-8">
          요청하신 일기가 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
        <Button asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* 헤더 & 네비게이션 */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
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
            className="mr-2"
          >
            <path d="m11 17-5-5 5-5" />
            <path d="m18 17-5-5 5-5" />
          </svg>
          목록으로 돌아가기
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/diary/edit/${diaryId}`}>수정하기</Link>
          </Button>
          <Button variant="destructive" size="sm" onClick={handleDeleteDiary}>
            삭제하기
          </Button>
        </div>
      </div>

      {/* 일기 상세 정보 */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-card/5 border-b border-primary/5 pb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              {diary.date
                ? format(new Date(diary.date), "yyyy년 MM월 dd일 EEEE", {
                    locale: ko,
                  })
                : "날짜 정보 없음"}
            </span>
            {diary.weather && (
              <div className="flex items-center gap-1 text-primary">
                <WeatherIcon type={diary.weather.condition} size={16} />
                <span className="text-sm font-medium">
                  {diary.weather.condition} {diary.weather.temperature}°C
                </span>
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold">{diary.title}</h1>
        </CardHeader>

        <CardContent className="pt-8 px-6 md:px-8">
          <div className="prose dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap">{diary.content}</div>
          </div>

          {/* 선택한 추천 정보 표시 */}
          {(diary.selectedClothes ||
            diary.selectedFood ||
            diary.selectedActivity ||
            diary.selectedMovie) && (
            <div className="mt-6 p-4 rounded-lg bg-muted/40 border border-border/40">
              <h3 className="text-lg font-medium mb-3">이날 선택한 추천</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {diary.selectedClothes && (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                      👕
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">옷차림</p>
                      <p className="font-medium">{diary.selectedClothes}</p>
                    </div>
                  </div>
                )}

                {diary.selectedFood && (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                      🍔
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">음식</p>
                      <p className="font-medium">{diary.selectedFood}</p>
                    </div>
                  </div>
                )}

                {diary.selectedActivity && (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">
                      🚶
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">활동</p>
                      <p className="font-medium">{diary.selectedActivity}</p>
                    </div>
                  </div>
                )}

                {diary.selectedMovie && (
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                      🎬
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">영화</p>
                      <p className="font-medium">{diary.selectedMovie}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 날씨 기반 추천 정보 */}
          {recommendationsData && (
            <div className="mt-10 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 3c.3 0 .5.1.7.3s.3.4.3.7v10c0 .3-.1.5-.3.7s-.4.3-.7.3h-1l-.1 1c-.1.5.3.9.8.9.3 0 .5.1.7.3s.3.4.3.7-.1.5-.3.7-.4.3-.7.3c-1.7 0-3-1.3-3-3v-1h-1c-.3 0-.5-.1-.7-.3s-.3-.4-.3-.7v-10c0-.3.1-.5.3-.7s.4-.3.7-.3z" />
                  <path d="M12 7h1" />
                  <path d="M12 11h1" />
                  <path d="M9 15h1" />
                </svg>
                <span>오늘 날씨에 맞는 추천</span>
              </h3>

              <div className="space-y-4">
                {recommendationsData.clothes?.clothes && (
                  <div className="flex gap-2">
                    <span className="font-medium">옷차림:</span>
                    <span>
                      {recommendationsData.clothes.clothes.join(", ")}
                    </span>
                  </div>
                )}

                {recommendationsData.foods?.foods && (
                  <div className="flex gap-2">
                    <span className="font-medium">음식:</span>
                    <span>{recommendationsData.foods.foods.join(", ")}</span>
                  </div>
                )}

                {recommendationsData.activities?.activities && (
                  <div className="flex gap-2">
                    <span className="font-medium">활동:</span>
                    <span>
                      {recommendationsData.activities.activities.join(", ")}
                    </span>
                  </div>
                )}

                {recommendationsData.movies?.movies && (
                  <div className="flex gap-2">
                    <span className="font-medium">영화:</span>
                    <span>{recommendationsData.movies.movies.join(", ")}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 댓글 섹션 */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">댓글</h2>

        {/* 댓글 입력 폼 */}
        <div className="space-y-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (comment.trim() && author.trim() && !isCommentSubmitting) {
                handleAddComment();
              }
            }}
          >
            <div className="flex gap-4">
              <Input
                value={author}
                onChange={handleAuthorChange}
                placeholder="이름"
                className="max-w-[200px]"
              />
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="댓글을 입력하세요... (Enter 키로 등록)"
                rows={1}
                className="flex-1"
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                disabled={
                  isCommentSubmitting || !comment.trim() || !author.trim()
                }
              >
                {isCommentSubmitting ? "등록 중..." : "댓글 추가"}
              </Button>
            </div>
          </form>
        </div>

        {/* 댓글 목록 */}
        <div className="space-y-4">
          {diary.comments && diary.comments.length > 0 ? (
            diary.comments.map((comment: any) => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <div className="font-medium">{comment.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(comment.createdAt), "yyyy.MM.dd HH:mm")}
                    </div>
                  </div>
                  <p className="mt-2">{comment.content}</p>
                </CardContent>
                <CardFooter className="flex justify-end py-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-destructive hover:text-destructive"
                    onClick={() => handleDeleteComment(comment.id)}
                    disabled={deleteCommentMutation.isPending}
                  >
                    삭제
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              아직 댓글이 없습니다. 첫 댓글을 작성해보세요.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
