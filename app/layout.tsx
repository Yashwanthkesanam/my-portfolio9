import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yashwanth Kesanam | Full Stack Developer | Python | IoT Specialist",
  description: "Yashwanth Kesanam - National Winner SIH 2024 (Team Lead). Full Stack Developer specializing in Python, IoT, React, Next.js, and Embedded Systems. B.Tech in Electronics & Communication from Vijayawada, India. Building scalable web applications and innovative IoT solutions.",
  keywords: [
    // Name variations
    "Yashwanth Kesanam",
    "Kesanam Yashwanth",
    "Yashwanth K",
    "Yashwanth Kesanam Portfolio",
    "Yashwanth Kesanam Developer",

    // Professional titles
    "Full Stack Developer",
    "Python Developer",
    "IoT Developer",
    "Embedded Systems Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",

    // Achievements
    "SIH 2024 Winner",
    "Smart India Hackathon Winner",
    "National Winner SIH 2024",
    "MindSprint Winner",

    // Technologies
    "Python",
    "IoT",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Arduino",
    "FastAPI",
    "HTML",
    "CSS",
    "SQL",

    // Location
    "Vijayawada Developer",
    "India Software Engineer",
    "Electronics Engineer India",

    // Education
    "B.Tech Electronics and Communication",
    "ECE Graduate",

    // Services
    "Freelance Developer",
    "Web Development Services",
    "IoT Solutions",
    "Embedded Programming"
  ],
  authors: [{ name: "Yashwanth Kesanam", url: "https://github.com/Yashwanthkesanam" }],
  creator: "Yashwanth Kesanam",
  publisher: "Yashwanth Kesanam",
  applicationName: "Yashwanth Kesanam Portfolio",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashwanthkesanam.vercel.app",
    title: "Yashwanth Kesanam | Full Stack Developer | Python | IoT",
    description: "National Winner SIH 2024 (Team Lead). Full Stack Developer from Vijayawada specializing in Python, IoT, React, and Embedded Systems. Building innovative web and IoT solutions.",
    siteName: "Yashwanth Kesanam - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yashwanth Kesanam - Full Stack Developer & IoT Specialist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yashwanth Kesanam | Full Stack Developer",
    description: "National Winner SIH 2024. Full Stack Developer specializing in Python, IoT, and Web Development.",
    images: ["/og-image.jpg"],
    creator: "@YashwanthK", // Add your Twitter handle if you have one
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "6r93yps7-Klf9pfP8WgW3aXw9jyldt73U_MTRgvdjl8",
    // bing: "your-bing-verification-code",
  },

  alternates: {
    canonical: "https://yashwanthkesanam.vercel.app",
  },

  category: "Technology",
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
