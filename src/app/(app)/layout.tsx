'use client'
import Footer from "@/components/footer/Footer";
import Intro from "@/components/intro-animation/Intro";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "sonner";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative z-20 mb-[100vh] md:mb-[88vh] lg:mb-[65vh] h-max bg-background rounded-b-3xl">
        <Intro />
        <Navbar />
        <div className=" z-40">
          {children}
        </div>
        <Toaster />
      </div>
      <div className="bg-card h-[68rem] md:h-[42rem] lg:h-[39rem] xl:h-[34rem] 2xl:h-[31rem] fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
