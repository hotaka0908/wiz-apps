import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wiz",
  description: "Apps spoken into being",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
