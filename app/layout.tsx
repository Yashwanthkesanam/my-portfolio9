import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yashwanth Kesanam | Full Stack Developer & Embedded Systems Engineer",
  description: "Portfolio of Yashwanth Kesanam - National Winner SIH 2024, Freelance Full Stack Developer, and Embedded Systems Engineer. Specializing in React, Next.js, IoT, and AI solutions.",
  keywords: [
    "Yashwanth Kesanam",
    "Kesanam Yashwanth",
    "Full Stack Developer",
    "Embedded Systems Engineer",
    "SIH 2024 Winner",
    "Web Developer",
    "IoT Specialist",
    "Next.js Developer",
    "React Developer",
    "Freelancer",
    "Portfolio",
    "Software Engineer India"
  ],
  authors: [{ name: "Yashwanth Kesanam" }],
  creator: "Yashwanth Kesanam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashwanth-portfolio.com", // Adjust domain if known, otherwise placeholder
    title: "Yashwanth Kesanam | Full Stack Developer & IoT Engineer",
    description: "National Winner SIH 2024. Building scalable web applications and innovative embedded systems.",
    siteName: "Yashwanth Kesanam Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or is a placeholder
        width: 1200,
        height: 630,
        alt: "Yashwanth Kesanam Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashwanth Kesanam | Portfolio",
    description: "National Winner SIH 2024. Full Stack Developer & Embedded Systems Engineer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
