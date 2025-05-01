import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNN",
  description: "DNN Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <nav className="py-8 px-16 border-b border-gray-600 flex justify-between items-center">
          <Image src="/logo.png" alt="DNN Logo" width={100} height={100} />
          <div className="flex items-center gap-2">
            <Link
              href="/team"
              className="mr-6 text-lg cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Team
            </Link>
            <Link href="https://x.com/dnn_on_x" target="_blank">
              <Image
                className="cursor-pointer hover:scale-110 transition-all duration-300"
                src="/twitter.png"
                alt="Twitter"
                width={45}
                height={45}
              />
            </Link>
            <Link href="https://medium.com/DNN" target="_blank">
              <Image
                className="cursor-pointer hover:scale-110 transition-all duration-300"
                src="/medium.png"
                alt="Telegram"
                width={45}
                height={45}
              />
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
