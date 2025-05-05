"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RecommendationCardProps {
  title: string;
  description?: string;
  icon?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function RecommendationCard({
  title,
  description,
  icon,
  isSelected = false,
  onClick,
}: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: isSelected
          ? "0 0 0 2px rgba(147, 51, 234, 0.5), 0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-[calc(33.333%-4px)] sm:w-24 h-20 sm:h-24 rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden bg-card border",
        isSelected
          ? "border-primary ring-2 ring-primary/30"
          : "border-border hover:border-primary/50"
      )}
    >
      {icon ? (
        <div className="relative w-8 sm:w-10 h-8 sm:h-10 mb-1">
          <span className="text-2xl sm:text-3xl">{icon}</span>
        </div>
      ) : (
        <div className="w-8 sm:w-10 h-8 sm:h-10 mb-1 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium text-primary">
            {title.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-[9px] sm:text-xs font-medium truncate max-w-full px-1 sm:px-2">
        {title}
      </span>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-primary rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}

export function RecommendationGrid({
  items,
  selectedItem,
  onSelect,
  category,
}: {
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
  category: string;
}) {
  const iconMap: Record<string, Record<string, string>> = {
    clothes: {
      "겨울 코트": "🧥",
      "패딩 점퍼": "🧥",
      가디건: "🧶",
      티셔츠: "👕",
      "얇은 셔츠": "👔",
      "반팔 티셔츠": "👕",
      "짧은 바지": "👖",
      우산: "☂️",
      레인코트: "🧥",
      부츠: "👢",
    },
    foods: {
      "따뜻한 국수": "🍜",
      "해산물 요리": "🦞",
      샐러드: "🥗",
      바베큐: "🍖",
      비빔밥: "🍚",
      수프: "🍲",
      스테이크: "🥩",
      초밥: "🍣",
      피자: "🍕",
      햄버거: "🍔",
    },
    activities: {
      "영화 감상": "🎬",
      독서: "📚",
      산책: "🚶",
      "자전거 타기": "🚲",
      등산: "🏔️",
      "실내 운동": "🏋️",
      수영: "🏊",
      "카페 방문": "☕",
      "박물관 관람": "🏛️",
      쇼핑: "🛍️",
    },
    movies: {
      "로맨틱 코미디": "❤️",
      액션: "💥",
      스릴러: "😱",
      공포: "👻",
      SF: "🚀",
      판타지: "🧙",
      애니메이션: "🎨",
      다큐멘터리: "📹",
      역사: "📜",
      음악: "🎵",
    },
  };

  return (
    <div className="flex flex-wrap gap-1 sm:gap-2 w-full">
      {items.map((item) => (
        <RecommendationCard
          key={item}
          title={item}
          icon={iconMap[category]?.[item] || undefined}
          isSelected={selectedItem === item}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
