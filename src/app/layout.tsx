import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import InitialPageLoader from "@/components/InitialPageLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Anas | Full Stack Developer",
  description:
    "Full-stack developer specializing in MERN stack, building scalable real-world applications. Explore my projects, open source contributions, and skills.",
  keywords: [
    "Mohammad Anas portfolio",
    "MERN stack developer",
    "Full stack developer India",
    "React developer",
    "MongoDB Express React Node",
    "Remote developer",
    "Freelance web developer",
    "Open source contributor",
    "Web developer portfolio",
  ],
  authors: [{ name: "Mohammad Anas", url: "https://anas51.vercel.app/" }],
  creator: "Mohammad Anas",
  openGraph: {
    title: "Mohammad Anas | Full Stack Developer",
    description:
      "Full-stack developer building scalable real-world applications. Explore projects and open-source contributions.",
    url: "https://anas51.vercel.app/",
    siteName: "Mohammad Anas Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Anas Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Anas | Full Stack Developer",
    description:
      "Full-stack developer building scalable real-world applications.",
    creator: "@MA76305",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://anas51.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              var t = localStorage.getItem('theme');
              document.documentElement.dataset.theme = (t === 'light' || t === 'dark') ? t : 'dark';
            } catch (e) {
              document.documentElement.dataset.theme = 'dark';
            }
          })();`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <InitialPageLoader />
      </body>
    </html>
  );
}
