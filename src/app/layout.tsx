import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { TrpcProvider } from "./providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "날씨일기 - 날씨와 함께하는 일기장",
  description:
    "매일의 날씨와 함께 일기를 기록하고, 날씨에 맞는 활동과 옷차림을 추천받아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system">
          <TrpcProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 w-full flex justify-center px-4 py-6 md:px-8 md:py-8">
                <div className="max-w-7xl w-full">{children}</div>
              </main>
              <Footer />
            </div>
            <Toaster position="top-right" />
          </TrpcProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
