export { metadata } from "./metadata";

import { SchemaOrg, createBreadcrumbSchema } from "@/src/components/schema-org";

export default function ESLCloudPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "ESL Cloud Platform", url: "/esl-cloud-platform" },
  ]);

  const productData = {
    name: "ZKONG ESL Cloud Platform",
    description:
      "Centralized cloud platform for managing electronic shelf labels across multiple stores. Real-time updates, analytics, and seamless POS integration.",
    category: "Retail Software",
  };

  return (
    <>
      <SchemaOrg type="Product" data={productData} />
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
      {children}
    </>
  );
}
