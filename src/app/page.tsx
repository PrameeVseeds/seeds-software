import Link from "next/link";
import { CustomSoftwareCta } from "@/src/components/custom-cta";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Heading,
  ProductGrid,
  services,
  industries,
} from "@/src/components/ui";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-background" aria-hidden="true">
          <span className="hero-orb orb-a" />
          <span className="hero-orb orb-b" />
          <span className="hero-ring ring-a" />
          <span className="hero-ring ring-b" />
          <svg
            className="hero-cosmos"
            viewBox="0 0 1400 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="cosmosGlow">
                <stop stopColor="var(--accent)" stopOpacity=".48" />
                <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              cx="940"
              cy="278"
              r="235"
              fill="url(#cosmosGlow)"
              opacity=".24"
            />
            <g className="cosmos-stars" fill="currentColor">
              <circle cx="82" cy="82" r="1.4" />
              <circle cx="176" cy="214" r="1.8" />
              <circle cx="253" cy="106" r="1" />
              <circle cx="330" cy="438" r="1.6" />
              <circle cx="418" cy="174" r="1.2" />
              <circle cx="506" cy="74" r="1.7" />
              <circle cx="582" cy="348" r="1.1" />
              <circle cx="672" cy="126" r="1.5" />
              <circle cx="760" cy="482" r="1.4" />
              <circle cx="838" cy="80" r="1" />
              <circle cx="1094" cy="115" r="1.5" />
              <circle cx="1206" cy="194" r="1.1" />
              <circle cx="1314" cy="72" r="1.7" />
              <circle cx="1260" cy="430" r="1.2" />
              <circle cx="1148" cy="520" r="1.6" />
              <circle cx="936" cy="512" r="1" />
              <circle cx="72" cy="492" r="1.1" />
              <circle cx="244" cy="314" r="1" />
              <circle cx="392" cy="526" r="1.3" />
              <circle cx="1050" cy="388" r="1.2" />
              <circle cx="684" cy="540" r="1.4" />
              <circle cx="1370" cy="302" r="1.3" />
            </g>
            <g className="cosmos-lines" fill="none" stroke="currentColor">
              <ellipse
                cx="920"
                cy="296"
                rx="272"
                ry="176"
                transform="rotate(-23 920 296)"
              />
              <ellipse
                cx="920"
                cy="296"
                rx="214"
                ry="132"
                transform="rotate(34 920 296)"
              />
              <circle cx="920" cy="296" r="118" />
              <path
                className="orbit-path"
                d="M118 414 C330 385 440 295 592 328 S820 420 960 278 1160 165 1290 210"
              />
              <path
                d="M920 158v276M782 296h276M823 199l194 194M1017 199 823 393"
                opacity=".35"
              />
              <path
                d="M702 120h28m-28 0v28m430-28h-28m28 0v28M702 472h28m-28 0v-28m430 28h-28m28 0v-28"
                opacity=".7"
              />
              <circle
                className="orbit-node node-one"
                cx="1174"
                cy="205"
                r="3"
              />
              <circle
                className="orbit-node node-two"
                cx="684"
                cy="355"
                r="2.5"
              />
              <circle
                className="orbit-node node-three"
                cx="1044"
                cy="444"
                r="2"
              />
            </g>
            <circle className="cosmos-core" cx="920" cy="296" r="4" />
          </svg>
          <span className="star-traveler" aria-hidden="true" />
          <span className="cosmos-beam beam-one" />
          <span className="cosmos-beam beam-two" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SOFTWARE FOR WHAT’S NEXT</span>
            <h1>
              <span className="title-word word-one">Software</span>{" "}
              <span className="title-word word-two">that</span>{" "}
              <span className="title-word word-three">helps</span>{" "}
              <span className="title-word word-four">businesses</span>{" "}
              <em>grow.</em>
            </h1>
            <p>
              We build reliable, scalable and user-friendly software solutions
              that simplify business operations and turn ideas into powerful
              digital products.
            </p>
            <div className="hero-actions">
              <Button href="/software">Explore our software</Button>
              <Link className="button button-outline" href="/request-quote">
                Build custom software
              </Link>
            </div>
            <Link className="text-link" href="/request-quote">
              Request a demo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <Heading
            eyebrow="SOFTWARE"
            title="Ready-to-use software solutions"
            copy="Explore software solutions designed to simplify everyday business operations."
          />
          <ProductGrid />
          <div className="center">
            <Button href="/software">Explore all software</Button>
          </div>
        </div>
      </section>
      <CustomSoftwareCta />
      <section className="section services-section">
        <div className="container">
          <Heading
            eyebrow="WHAT WE DO"
            title="Technology that moves work forward"
            copy="From the first sketch to ongoing support, we make useful software for real business needs."
          />
          <div className="service-grid">
            {services.map(([n, I]) => (
              <Link className="service-card" href="/services" key={n}>
                <I />
                <b>{n}</b>
                <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft industries-section">
        <div className="container">
          <Heading eyebrow="INDUSTRIES" title="Built around the work you do" />
          <div className="industry-grid">
            {industries.map(([n, I]) => (
              <div className="industry-item" key={n}>
                <I />
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section why-choose-section">
        <div className="why-choose-glow" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container">
          <div className="why-choose-heading">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>Good software starts with a team that gets your business.</h2>
            <p>
              We bring practical thinking, capable people and dependable support
              to every project.
            </p>
          </div>
          <div className="why-choose-grid">
            <article className="why-choose-card">
              <span className="why-choose-number">01</span>
              <h3>Focused on your goals</h3>
              <p>
                We learn how your business works, then shape software around the
                outcomes that matter.
              </p>
            </article>
            <article className="why-choose-card">
              <span className="why-choose-number">02</span>
              <h3>Built to grow with you</h3>
              <p>
                Reliable architecture and thoughtful design make it easier to
                adapt as your needs change.
              </p>
            </article>
            <article className="why-choose-card">
              <span className="why-choose-number">03</span>
              <h3>Here for the long run</h3>
              <p>
                Clear communication, careful delivery and ongoing support keep
                your software moving forward.
              </p>
            </article>
          </div>
        </div>
      </section>{" "}
      <section className="faq-simple">
        <div className="container">
          <Heading eyebrow="GOOD TO KNOW" title="Frequently asked questions" />
          {[
            {
              q: "How much does custom software development cost?",
              a: "The cost depends on the features, integrations and level of support you need. After learning about your goals, we can outline the scope, key milestones and a tailored estimate before development begins.",
            },
            {
              q: "How long does software development take?",
              a: "Timing depends on the size and complexity of the project. We agree on priorities and milestones with you, then share a delivery plan with regular progress updates.",
            },
            {
              q: "Can you customize an existing software product?",
              a: "Yes. We can review your current product and identify practical changes, integrations or workflows that fit your business. The best approach depends on the software and access available.",
            },
            {
              q: "Do you provide software maintenance?",
              a: "Yes. We can help after launch with updates, bug fixes, monitoring and improvements. The support plan can be tailored to your product and team.",
            },
            {
              q: "Can I request a software demo?",
              a: "Yes. Contact us with the product you are interested in and what you would like to see. We will help arrange a suitable demo and answer your questions.",
            },
            {
              q: "Can you integrate payment gateways?",
              a: "We can integrate payment providers based on your market, platform and business requirements. We will discuss the available options and any provider requirements during planning.",
            },
            {
              q: "Do you provide hosting and deployment?",
              a: "We can help prepare, deploy and configure your software for an appropriate hosting environment. Hosting and ongoing infrastructure support can be discussed as part of your project scope.",
            },
            {
              q: "Can you develop mobile applications?",
              a: "Yes. We can help plan and build mobile applications around your users and workflows. We will recommend an approach based on your platform needs, features and budget.",
            },
          ].map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="final">
        <div className="container">
          <span className="eyebrow">LET’S MAKE IT USEFUL</span>
          <h2>Let’s build your next software solution.</h2>
          <p>
            Whether you need ready-made business software or a completely custom
            solution, tell us what you need.
          </p>
          <Button href="/request-quote">Request a quote</Button>
        </div>
      </section>
    </>
  );
}
