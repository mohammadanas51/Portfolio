import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mohammad Anas | Full Stack Web Developer (MERN) Portfolio",
  description: "Welcome to Anas's portfolio – a MERN stack web developer passionate about building scalable, real-world applications. Explore projects, skills, and contact details.",
  keywords: [
    "Anas portfolio",
    "Mohammad Anas portfolio",
    "MERN stack developer",
    "Full stack developer India",
    "React developer",
    "MongoDB Express React Node",
    "Remote developer",
    "Freelance web developer",
    "Full stack projects",
    "Web developer portfolio",
  ],
  authors: [{ name: "Anas", url: "https://anas51.vercel.app/" }],
  creator: "Anas",
  openGraph: {
    title: "Anas | MERN Stack Developer Portfolio",
    description: "Explore full stack projects by Anas, a passionate MERN stack developer. Check out real-world web apps and get in touch for collaborations.",
    url: "https://anas51.vercel.app/",
    siteName: "Anas Portfolio",
    images: [
      {
        url: "/og-image.png", // Open Graph preview image
        width: 1200,
        height: 630,
        alt: "Anas Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas | Full Stack Developer Portfolio",
    description: "Explore projects and skills by Anas, a MERN stack developer building scalable web applications.",
    creator: "@MA76305", // Optional
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
