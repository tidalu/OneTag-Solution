export { metadata } from "./metadata";

import { SchemaOrg, createBreadcrumbSchema } from "@/src/components/schema-org";

export default function ESLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Electronic Shelf Labels", url: "/electronic-shelf-labels" },
  ]);

  const productData = {
    name: "ZKONG Electronic Shelf Labels",
    description:
      "Premium electronic shelf labels with Bluetooth and Wi-Fi connectivity for real-time pricing updates, extended battery life, and cloud management.",
    image: "https://onetag.uz/ESL/zkong-electronic-shelf-labels.webp",
    category: "Retail Technology",
  };

  return (
    <>
      <SchemaOrg type="Product" data={productData} />
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
      {children}
    </>
  );
}
