import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";

import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Together",
  description: "A Community Building Website made with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        poppins.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {authModal}

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
