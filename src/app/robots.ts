export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.aimvirtue.com/sitemap.xml",
    host: "https://www.aimvirtue.com",
  };
}
