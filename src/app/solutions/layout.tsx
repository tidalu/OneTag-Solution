export { metadata } from "./metadata";

import { SchemaOrg, createBreadcrumbSchema } from "@/src/components/schema-org";

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solutions" },
  ]);

  return (
    <>
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
      {children}
    </>
  );
}
