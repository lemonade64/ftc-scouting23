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
    "Scouting Tool for the 2023/2024 FIRST Tech Challenge World Championship.",
  category: "technology",
  keywords:
    "access, action, ads, agency, agent, appointments, consulting, contact, creative, custom, digital, expertise, guaranteed, high, idea, innovative, lead, management, package, results, revolutionary, sales, weekly, property listings, open houses, investment properties, residential properties, commercial real estate, rental properties, house hunting, sydney real estate, inner-city, sydney property market, harbour views, beachfront properties, eastern suburbs, digital marketing for real estate, social media advertising, lead generation for real estate agents, content creation for property listings, instagram/facebook ads for real estate, SEO for real estate agencies, buyer/seller tips and advice, property showcase videos, virtual property tours, community insights, neighborhood spotlights, real estate agent services, property management, buyer/seller representation, home valuation services, comparative market analysis (CMA), real estate auctions",
  metadataBase: new URL("https://ftc-scouting.vercel.app/"),
  openGraph: {
    title: "FTC Scouting",
    description:
      "Scouting Tool for the 2023/2024 FIRST Tech Challenge World Championship.",
    url: "https://ftc-scouting.vercel.app/",
    siteName: "FTC Scouting",
    // images: [
    //   {
    //     url: "https://ftc-scouting.vercel.app/opengraph-image.png",
    //     width: 800,
    //     height: 400,
    //     alt: "Scouting Tool for the 2023/2024 FIRST Tech Challenge World Championship.",
    //   },
    // ],
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
    <html lang="en" className="select-none sb-none">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
