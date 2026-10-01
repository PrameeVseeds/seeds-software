import { industries, Heading } from "@/src/components/ui";
import { PageBackButton } from "@/src/components/page-back-button";
export const metadata = { title: "Industries" };
export default function Page() {
  return (
    <section className="page-section section-soft industries-page-section">
      <div className="container">
        <PageBackButton />
        <Heading
          eyebrow="INDUSTRIES"
          title="Software shaped around your world."
          copy="We take time to understand the details and rhythms of your industry."
        />
        <div className="industry-grid">
          {industries.map(([n, I]) => (
            <article className="industry-item" key={n}>
              <I />
              {n}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

