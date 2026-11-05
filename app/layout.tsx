import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meetway",
  description: "실시간으로 함께 정하는 약속장소",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
