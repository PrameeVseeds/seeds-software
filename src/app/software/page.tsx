import { ProductGrid, Heading } from "@/src/components/ui";
import { PageBackButton } from "@/src/components/page-back-button";
export const metadata = {
  title: "Business Software",
  description: "Ready-to-use business software solutions.",
};
export default function Page() {
  return (
    <section className="page-section section-soft">
      <div className="container">
        <PageBackButton />
        <Heading
          eyebrow="OUR SOFTWARE"
          title="Software built for everyday business"
          copy="Ready-to-use solutions designed to simplify operations."
        />
        <ProductGrid />
      </div>
    </section>
  );
}
