import { services } from "../lib/services";

export const dynamic = "force-static";

export default function sitemap() {

  const serviceUrls = services.map((service) => ({
    url: `https://repairjunction.com/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://repairjunction.com",
      lastModified: new Date(),
    },
    {
      url: "https://repairjunction.com/services",
      lastModified: new Date(),
    },
    ...serviceUrls
  ];
}