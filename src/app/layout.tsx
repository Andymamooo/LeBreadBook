import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Breadbook",
  description: "Designed by Toro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>Le Breadbook</nav>
        {children}
      </body>
    </html>
  );
}
