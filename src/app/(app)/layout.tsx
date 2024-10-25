import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NavigationBar from "@/components/navbar/Navigation-bar";




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
      <Footer />
    </div>
  );
}
