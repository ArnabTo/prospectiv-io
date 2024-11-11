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
      <div className="relative z-20 mb-[120vh] md:mb-[75vh] lg:mb-[70vh] h-max bg-background rounded-b-3xl">
        <Intro />
        <Navbar />
        <div className=" z-40">
          {children}
        </div>
        <Toaster />
      </div>
      <div className="bg-card h-[58rem] md:h-[35rem] lg:h-[34rem] xl:h-[34rem] 2xl:h-[31rem] fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
