import Script from "next/script";

export interface SchemaOrgProps {
  type?:
    | "Organization"
    | "LocalBusiness"
    | "Product"
    | "BreadcrumbList"
    | "FAQPage";
  data?: any;
}

export function SchemaOrg({ type = "Organization", data }: SchemaOrgProps) {
  let schema: any = {};

  switch (type) {
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Onetag Smart Solutions",
        alternateName: "Onetag",
        url: "https://onetag.uz",
        logo: "https://onetag.uz/logo.png",
        description:
          "Leading provider of electronic shelf labels and smart retail solutions in Uzbekistan",
        email: "info@onetag.uz",
        telephone: "+998999178111",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sharof Rashidov Street 4",
          addressLocality: "Chirchik",
          addressRegion: "Tashkent Region",
          postalCode: "111700",
          addressCountry: "UZ",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+998999178111",
          contactType: "Sales",
          email: "info@onetag.uz",
          areaServed: "UZ",
          availableLanguage: ["English", "Russian", "Uzbek"],
        },
        sameAs: [
          // Add social media URLs when available
        ],
        ...data,
      };
      break;

    case "LocalBusiness":
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Onetag Smart Solutions",
        image: "https://onetag.uz/logo.png",
        "@id": "https://onetag.uz",
        url: "https://onetag.uz",
        telephone: "+998999178111",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Sharof Rashidov Street 4",
          addressLocality: "Chirchik",
          addressRegion: "Tashkent Region",
          postalCode: "111700",
          addressCountry: "UZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.469611,
          longitude: 69.5825,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        ...data,
      };
      break;

    case "Product":
      schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data?.name || "Electronic Shelf Labels",
        description:
          data?.description ||
          "Smart electronic shelf labels with Bluetooth and Wi-Fi connectivity for real-time pricing updates",
        brand: {
          "@type": "Brand",
          name: "Onetag",
        },
        manufacturer: {
          "@type": "Organization",
          name: "ZKONG",
        },
        category: "Retail Technology",
        image: data?.image || "https://onetag.uz/esl-product.jpg",
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/InStock",
          priceCurrency: "UZS",
          seller: {
            "@type": "Organization",
            name: "Onetag Smart Solutions",
          },
        },
        ...data,
      };
      break;

    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items || [],
      };
      break;

    case "FAQPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data?.questions || [],
      };
      break;

    default:
      schema = data;
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
      strategy="afterInteractive"
    />
  );
}

// Breadcrumb helper function
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    items: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://onetag.uz${item.url}`,
    })),
  };
}
