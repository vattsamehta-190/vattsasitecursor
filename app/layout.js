import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Vattsa Mehta — Consultant, Creator, Podcast Host",
  description:
    "Consultant, creator, and builder. Gals Getting Rich podcast. Based in Manhattan, New York.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
