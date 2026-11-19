import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "블랑쉬 | 가장 순수한 시작",
  description: "덜어낼수록 분명해집니다. 블랑쉬가 전하는 정제된 경험.",
  openGraph: {
    title: "블랑쉬 | 가장 순수한 시작",
    description: "덜어낼수록 분명해집니다. 블랑쉬가 전하는 정제된 경험.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
