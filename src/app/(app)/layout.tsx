import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/navbar/Navigation-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavigationBar/>
      {children}
      <Footer/>
    </div>
  );
}
