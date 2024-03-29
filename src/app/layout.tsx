import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CategoryProvider } from "@/context/CategoryContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoryProvider>
          <Navbar />  
          <div className="mx-auto max-w-screen-lg">
            <div className="flex items-center min-h-screen p-24">{children}</div>
            
          </div>
        </CategoryProvider>
      </body>
    </html>
  );
}
