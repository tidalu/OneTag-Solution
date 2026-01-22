export { metadata } from "./metadata";

import { SchemaOrg, createBreadcrumbSchema } from "@/src/components/schema-org";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
      {children}
    </>
  );
}
