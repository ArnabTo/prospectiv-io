import Navbar from "@/components/navbar/Nav-bar";
import NavigationBar from "@/components/navbar/Navigation-bar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Navbar /> */}
      <NavigationBar/>
      {children}
    </div>
  );
}
