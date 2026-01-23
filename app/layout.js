import "./globals.css";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Pokémon Dashboard",
  description: "Educational demo for Web Programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} min-h-screen bg-repeat bg-center`}
        style={{ 
          backgroundImage: "url('/bg.png')", 
          backgroundSize: "800px 800px",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <Navbar />
          <main className="min-h-screen py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}