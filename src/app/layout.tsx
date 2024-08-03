import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { ThemeProvider } from "components/providers/ThemeProvider";
import { Web3ModalProvider } from "components/providers/Web3ModalProvider";
import { Navbar } from "components/Navbar";
import { config } from "lib/wagmiConfig";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasySwaps",
  description: "A hackathon project for Build The New Internet using WalletConnect's AppKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
