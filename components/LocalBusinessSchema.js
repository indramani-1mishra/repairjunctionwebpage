export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Repair Junction",
    url: "https://repairjunction.com",
    telephone: "+919217918881",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    service: [
      "AC Repair",
      "Refrigerator Repair",
      "Washing Machine Repair",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}