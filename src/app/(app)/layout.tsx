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
      {/* <NavigationBar/> */}
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
}
