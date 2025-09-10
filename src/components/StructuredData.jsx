export default function StructuredData({ type = "Organization", data = {} }) {
  const baseUrl = "https://metalls.example.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Металлы и Сплавы",
    description:
      "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок, консультации экспертов.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    telephone: "+7 (XXX) XXX-XX-XX",
    email: "contact@example.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressLocality: "Москва",
      addressRegion: "Московская область",
    },
    sameAs: ["https://vk.com/example", "https://t.me/example"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7 (XXX) XXX-XX-XX",
      contactType: "customer service",
      availableLanguage: "Russian",
    },
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
    serviceType: "Поставка, продажа и покупка металлов и сплавов",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Металлы и сплавы",
        description: "Поставка, продажа и покупка металлов и сплавов",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Металлы и Сплавы",
    url: baseUrl,
    description:
      "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката.",
    publisher: {
      "@type": "Organization",
      name: "Металлы и Сплавы",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.breadcrumbs || [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: baseUrl,
      },
    ],
  };

  const productSchema = data.product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.product.name,
        description: data.product.description,
        image: data.product.image,
        brand: {
          "@type": "Brand",
          name: "Металлы и Сплавы",
        },
        offers: {
          "@type": "Offer",
          price: data.product.price,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Металлы и Сплавы",
          },
        },
      }
    : null;

  const schemas = [organizationSchema, websiteSchema, breadcrumbSchema];

  if (productSchema) {
    schemas.push(productSchema);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas),
      }}
    />
  );
}
