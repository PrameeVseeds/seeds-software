import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/src/data/products";
import { Button } from "@/src/components/ui";
import { PageBackButton } from "@/src/components/page-back-button";

const detailCopy: Record<string, string[]> = {
  "pos-management": [
    "A clear checkout flow keeps sale details and essential actions easy to review.",
    "Keep product quantities and stock changes in view as goods are sold or replenished.",
    "Review sales activity and summaries to understand what is moving in your store.",
  ],
  "pharmacy-management": [
    "Keep prescription records organized and easy for your team to find.",
    "Monitor medicine quantities and expiry dates as part of stock management.",
    "Keep supplier details and purchasing records together for easier follow-up.",
  ],
  "salon-management": [
    "Let clients request appointments online and keep upcoming bookings visible.",
    "Coordinate staff availability and appointments with a shared calendar.",
    "Keep client profiles and visit details accessible to support personal service.",
  ],
  "inventory-management": [
    "See stock levels and flag items that need attention or replenishment.",
    "Organize stock across the locations your operation uses.",
    "Keep purchasing requests and supplier orders alongside inventory records.",
  ],
  "hotel-management": [
    "Keep reservation details and booking changes organized for your team.",
    "See room readiness and status to help coordinate housekeeping and arrivals.",
    "Store guest details in one place to support consistent service.",
  ],
  "appointment-management": [
    "Let customers request available times with less back-and-forth.",
    "Send reminders to help customers keep track of upcoming visits.",
    "Coordinate calendars around team availability and working hours.",
  ],
};
const productLead: Record<string, string> = {
  "pos-management":
    "Bring checkout, stock control and sales activity together in one clear workspace for your store.",
  "pharmacy-management":
    "Coordinate prescription records, medicine stock and supplier information in one workspace.",
  "salon-management":
    "Keep appointments, staff schedules and client details connected throughout the day.",
  "inventory-management":
    "Track stock movement, replenishment and purchasing across your daily operations.",
  "hotel-management":
    "Coordinate reservations, room status and guest information across your hospitality team.",
  "appointment-management":
    "Manage bookings, reminders and team availability in one place.",
};
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const copy =
    detailCopy[product.slug] ?? product.features.map(() => product.description);
  return (
    <>
      <section className="product-hero">
        <div className="product-hero-ambient" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="container product-hero-layout">
          <div className="product-hero-copy">
            <PageBackButton />
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p>{productLead[product.slug] ?? product.description}</p>
            <div className="product-hero-actions">
              <Button href="/request-quote">Request a demo</Button>
              <Link className="product-text-link" href="#product-features">
                Explore capabilities
              </Link>
            </div>
            <div className="product-keywords" aria-label="Key capabilities">
              {product.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          </div>
          <div
            className="product-dashboard"
            role="img"
            aria-label={`${product.name} interface preview`}
          >
            <div className="dashboard-topline">
              <span className="dashboard-brand">
                <i /> WORKSPACE
              </span>
              <span className="dashboard-preview-label">INTERFACE PREVIEW</span>
            </div>
            <div className="dashboard-heading">
              <div>
                <small>OVERVIEW</small>
                <b>{product.category}</b>
              </div>
              <span className="dashboard-menu">MENU</span>
            </div>
            <div className="dashboard-stats">
              {product.features.map((feature, i) => (
                <div className="dashboard-stat" key={feature}>
                  <small>{feature}</small>
                  <b>{["Today", "In view", "Updated"][i]}</b>
                  <span>
                    {
                      [
                        "Activity overview",
                        "Organized records",
                        "Clear next steps",
                      ][i]
                    }
                  </span>
                </div>
              ))}
            </div>
            <div className="dashboard-chart">
              <div className="dashboard-chart-title">
                <b>Activity</b>
                <small>Recent overview</small>
              </div>
              <div className="dashboard-bars" aria-hidden="true">
                {[32, 48, 38, 61, 46, 72, 55, 83, 67, 92, 72, 100].map(
                  (height, i) => (
                    <i
                      key={i}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 55}ms`,
                      }}
                    />
                  ),
                )}
              </div>
              <div className="dashboard-chart-caption">
                <span>START</span>
                <span>IN PROGRESS</span>
                <span>COMPLETE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-features-section" id="product-features">
        <div className="product-features-ambient" aria-hidden="true" />
        <div className="container product-features-content">
          <div className="product-features-heading">
            <span className="eyebrow">CORE CAPABILITIES</span>
            <h2>Designed for your day-to-day</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-feature-grid">
            {product.features.map((feature, i) => (
              <article className="product-detail-card" key={feature}>
                <span className="product-detail-index">0{i + 1}</span>
                <h3>{feature}</h3>
                <p>{copy[i]}</p>
                <span className="product-detail-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="product-bottom-cta">
            <p>Want to see how it could fit your workflow?</p>
            <Button href="/request-quote">Talk to our team</Button>
          </div>
        </div>
      </section>
    </>
  );
}
