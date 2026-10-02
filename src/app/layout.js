import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import Layout from "@/components/Layout/Layout";
import NextProvider from "@/provider/NextProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const alfabetFont = localFont({
  src:"../../public/fonts/Iranian Sans.ttf"
})
export const metadata = {
  title: "   املاک خانه تو",
  description: "  خرید فروش خانه ویلا رهن اجاره ایران ",
  icons : {icon : "./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" className={` ${alfabetFont.className} h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${alfabetFont.className} `}>
        <NextProvider>
          <Layout>{children}</Layout>
        </NextProvider>
      </body>
    </html>
  );
}
