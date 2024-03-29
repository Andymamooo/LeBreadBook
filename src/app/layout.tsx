import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "../../public/logo.svg";

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
        <nav className='flex items-center justify-between flex-wrap bg-sky-950 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Image
              className='mr-4'
              src='/logo.svg'
              alt='Logo'
              height={54}
              width={54}
            />
            <span className='font-semibold text-xl tracking-tight'>
              Le Bread Book
            </span>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                Recipes
              </a>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                Account
              </a>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                Toro
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
