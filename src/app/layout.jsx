import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Greybacks FTC Scouting",
  description: "Scouting Tool for the FIRST Tech Challenge World Championship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none sb-none">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
