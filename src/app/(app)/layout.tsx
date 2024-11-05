import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "sonner";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative z-20 mb-[70vh] h-max bg-background">
        <Navbar />
        {children}
        <Toaster />
      </div>
      <div className="bg-background h-[500px] fixed bottom-0 z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
