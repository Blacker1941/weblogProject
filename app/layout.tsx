import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/src/component/Base/Navbar/Navbar";


export default function RootLayout({ children }:any) {
  return (

    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
        
          {children}
        </main>
      </body>
    </html>
    
  
  );
}
