import { Button } from "@/src/components/ui";
import { PageBackButton } from "@/src/components/page-back-button";

export const metadata = {
  title: "About SeedStack Labz",
  description:
    "Learn how SeedStack Labz builds practical software around real business workflows.",
};

const principles = [
  {
    number: "01",
    title: "Understand the work",
    copy: "We start by learning your goals, existing processes and the points that slow your team down.",
  },
  {
    number: "02",
    title: "Build with purpose",
    copy: "We shape clear, reliable software around the needs you have identified, and keep you involved as it takes form.",
  },
  {
    number: "03",
    title: "Keep improving",
    copy: "After launch, we stay available to support your software and help it adapt as your business changes.",
  },
];

export default function Page() {
  return (
    <>
      <section className="about-hero">
        <div className="about-ambient" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="container about-hero-layout">
          <div className="about-title">
            <PageBackButton />
            <span className="eyebrow">ABOUT SEEDSTACK LABZ</span>
            <h1>
              People first.
              <br />
              Software that fits.
            </h1>
            <p>Thoughtful software for the way your business works.</p>
          </div>
          <div className="about-story">
            <span className="about-kicker">WHO WE ARE</span>
            <h2>Technology should make good work easier.</h2>
            <p>
              We partner with businesses to make everyday operations simpler
              through ready-to-use software and tailored digital products. We
              listen first, build with care, and keep working alongside our
              clients as their needs evolve.
            </p>
            <div className="about-tags">
              <span>Business-focused</span>
              <span>Built around real workflows</span>
              <span>Support beyond launch</span>
            </div>
            <Button href="/contact">Talk with our team</Button>
          </div>
        </div>
      </section>
      <section className="about-why-section">
        <div className="about-why-ambient" aria-hidden="true" />
        <div className="container about-why-content">
          <div className="about-why-heading">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>A software partner who starts with your business.</h2>
            <p>
              We combine practical product thinking with careful engineering, so
              the solution fits the people and processes it is meant to support.
            </p>
          </div>
          <div className="about-why-grid">
            <article className="about-why-card">
              <span>01 / YOUR WORKFLOW</span>
              <h3>We listen before we build</h3>
              <p>
                We take time to understand your goals and day-to-day work, then
                shape a solution around the real problem.
              </p>
            </article>
            <article className="about-why-card">
              <span>02 / THE RIGHT APPROACH</span>
              <h3>Choose what fits your needs</h3>
              <p>
                Explore ready-to-use business software or work with us on a
                tailored digital product for your requirements.
              </p>
            </article>
            <article className="about-why-card">
              <span>03 / ONGOING PARTNERSHIP</span>
              <h3>Support beyond launch</h3>
              <p>
                We stay available to help maintain and improve your software as
                your team and business needs change.
              </p>
            </article>
          </div>
        </div>
      </section>{" "}
      <section className="about-principles">
        <div className="container">
          <div className="about-principles-heading">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>Clear steps. Thoughtful software.</h2>
            <p>
              Every project starts with understanding the problem and stays
              focused on making a useful difference to the people who use the
              result.
            </p>
          </div>
          <div className="about-principles-grid">
            {principles.map((item) => (
              <article className="about-principle-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
