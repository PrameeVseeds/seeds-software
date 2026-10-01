import { services, Heading } from "@/src/components/ui";
import { PageBackButton } from "@/src/components/page-back-button";
export const metadata = { title: "Software Development Services" };
export default function Page() {
  return (
    <section className="page-section services-page-section">
      <div className="container">
        <PageBackButton />
        <Heading
          eyebrow="OUR SERVICES"
          title="Good software starts with the right questions."
          copy="We plan, design, build and support digital products that solve real problems."
        />
        <div className="service-grid">
          {services.map(([n, I]) => (
            <article className="service-card" key={n}>
              <I />
              <b>{n}</b>
              <p>
                Collaborative delivery aligned with business goals and users.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

