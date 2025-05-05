"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // 다크모드 감지
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-lg shadow-primary/5 backdrop-blur-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              W
            </div>
            <span className="text-xl font-extrabold tracking-tight relative overflow-hidden group-hover:text-primary transition-colors duration-300">
              날씨일기
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/"
                  className="relative text-sm font-medium overflow-hidden hover:text-primary transition-colors duration-200 py-2"
                >
                  <span>홈</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/create"
                  className="relative text-sm font-medium overflow-hidden hover:text-primary transition-colors duration-200 py-2"
                >
                  <span>일기 작성</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative text-sm font-medium overflow-hidden hover:text-primary transition-colors duration-200 py-2"
                >
                  <span>소개</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full hover:bg-primary/10 transition-colors duration-300"
          >
            {isDarkMode ? (
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
                className="h-5 w-5 text-yellow-300"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            ) : (
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
                className="h-5 w-5 text-blue-500"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            )}
          </Button>
          <Button
            variant="default"
            className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 px-6"
            asChild
          >
            <Link href="/create">일기 작성하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
