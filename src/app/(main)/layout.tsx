import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "@/assets/css/global.scss";
import Navigation from "@/widgets/navigation/navigation";

export const metadata: Metadata = {
  title: "DiplomaFrontend",
  description: "Дипломный проект",
};

const JetBrainsMono = JetBrains_Mono({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
        <section className="container">
            <Navigation/>
            {children}
        </section>
      </body>
    </html>
  );
}
