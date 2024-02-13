export default function manifest() {
  return {
    name: "FIRST Tech Challenge Scouting Application",
    short_name: "FTC Scouting App",
    description:
      "Scouting App for the 2023/2024 FIRST Tech Challenge World Championship.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
