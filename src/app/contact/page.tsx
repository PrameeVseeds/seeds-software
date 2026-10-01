import { Button } from "@/src/components/ui";
import { SriLankaFlag } from "@/src/components/sri-lanka-flag";
import { SocialLinks } from "@/src/components/social-links";
import { PageBackButton } from "@/src/components/page-back-button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact SeedStack Labz",
  description:
    "Contact SeedStack Labz in Ja-Ela, Sri Lanka about business software and custom software projects.",
};

const faqs = [
  {
    q: "What can I contact SeedStack Labz about?",
    a: "Talk to us about ready-to-use business software, a custom software project, a product demo, or support for an existing solution.",
  },
  {
    q: "What should I include in a project inquiry?",
    a: "Share a little about your business, the problem you want to solve, the people who will use the software, and any important timing or integration needs.",
  },
  {
    q: "How can I request a product demo?",
    a: "Email info@vseeds.lk or use the request form. Tell us which product you are interested in and we will follow up about a suitable next step.",
  },
  {
    q: "Where is SeedStack Labz located?",
    a: "Our address is SeedStack Labz, Seeds Pvt Ltd, L1 61, Reality Plaza, Ja-ela - 11350, Sri Lanka.",
  },
];

export default function Page() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-ambient" aria-hidden="true" />
        <div className="container contact-hero-grid">
          <div className="contact-intro">
            <PageBackButton />
            <span className="eyebrow">CONTACT</span>
            <h1>Let’s talk about what’s next.</h1>
            <p>
              Tell us what your team is working on. We’ll help you explore a
              useful next step.
            </p>
            <SocialLinks />
          </div>
          <div className="contact-details-card">
            <span className="contact-card-kicker">REACH OUR TEAM</span>
            <h2>We’re ready to hear about your project.</h2>
            <div className="contact-details-grid">
              <div className="contact-detail-column">
                <a className="contact-detail-row" href="mailto:info@vseeds.lk">
                  <Mail />
                  <span>
                    <small>EMAIL</small>info@vseeds.lk
                  </span>
                </a>
                <a className="contact-detail-row" href="tel:+94760079784">
                  <Phone />
                  <span>
                    <small>PHONE</small>+94 76 007 9784
                  </span>
                </a>
              </div>
              <div className="contact-detail-row contact-address">
                <MapPin />
                <span>
                  <small>VISIT US</small>SeedStack Labz, Seeds Pvt Lts,
                  <br />
                  L1 61, Reality Plaza,
                  <br />
                  Ja-ela - 11350,{" "}
                  <br></br>
                  <SriLankaFlag />{" "}
                  Sri Lanka
                </span>
              </div>
            </div>
            <div className="contact-details-actions">
              <Button href="/request-quote">Send a project inquiry</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="eyebrow">FIND US</span>
            <h2>Visit us in Ja-Ela</h2>
            <p>
              SeedStack Labz, Seeds Pvt Ltd, L1 61, Reality Plaza, Ja-ela -
              11350, Sri Lanka.
            </p>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Map showing Realty Plaza in Ja-Ela, Sri Lanka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.438013458487!2d79.88715968469694!3d7.075108598288987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0c9463cb0d7%3A0xe3137fdcc17700c6!2sRealty%20Plaza!5e0!3m2!1sen!2slk!4v1790832350722!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
      <section className="contact-faq-section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>Frequently asked questions</h2>
            <p>A few helpful details before you get in touch.</p>
          </div>
          <div className="contact-faq-list">
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
