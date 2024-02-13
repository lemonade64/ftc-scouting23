export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ftc-scouting.vercel.app/sitemap.xml",
  };
}
