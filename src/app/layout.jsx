import ToggleMode from "@/components/ToggleMode";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "FTC Scouting - %s",
    default: "FTC Scouting",
  },
  description:
    "Scouting App for the 2023/2024 FIRST Tech Challenge World Championship.",
  category: "technology",
  metadataBase: new URL("https://ftc-scouting.vercel.app/"),
  openGraph: {
    title: "FTC Scouting",
    description:
      "Scouting App for the 2023/2024 FIRST Tech Challenge World Championship.",
    url: "https://ftc-scouting.vercel.app/",
    siteName: "FTC Scouting",
    images: [
      {
        url: "https://ftc-scouting.vercel.app/opengraph-image.webp",
        width: 800,
        height: 400,
        alt: "Scouting App for the 2023/2024 FIRST Tech Challenge World Championship.",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={poppins.className}>
        <body className="select-none dark:bg-black">
          {children}
          <Analytics />
          <ToggleMode />
        </body>
      </html>
    </>
  );
}
