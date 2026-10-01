import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Stethoscope,
  Scissors,
  Boxes,
  Hotel,
  CalendarDays,
  Code2,
  Monitor,
  Smartphone,
  Palette,
  Database,
  Wrench,
  Store,
  GraduationCap,
  Utensils,
  HardHat,
  Factory,
} from "lucide-react";
import { products, Product } from "@/src/data/products";

export function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="button button-primary">
      {children} ↗
    </Link>
  );
}

export function Heading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

const icons = [ShoppingBag, Stethoscope, Scissors, Boxes, Hotel, CalendarDays];
const previews = [
  {
    stat: ["$12,840", "248", "96%"],
    bars: [36, 56, 43, 75, 51, 88, 64, 96],
    rows: [
      ["#1048", "$128.00"],
      ["#1047", "$86.40"],
      ["#1046", "$212.00"],
    ],
    caption: "Today’s sales",
  },
  {
    stat: ["1,284", "38", "12"],
    bars: [66, 48, 80, 56, 92, 70, 84, 59],
    rows: [
      ["Amoxicillin", "In stock"],
      ["Vitamin C", "Low stock"],
      ["Ibuprofen", "In stock"],
    ],
    caption: "Stock overview",
  },
  {
    stat: ["36", "18", "92%"],
    bars: [52, 84, 60, 95, 66, 77, 48, 88],
    rows: [
      ["09:30  Maya", "Color"],
      ["10:45  Nila", "Cut & style"],
      ["12:00  Amy", "Consult"],
    ],
    caption: "Today’s schedule",
  },
  {
    stat: ["8,420", "126", "24"],
    bars: [78, 54, 69, 93, 61, 84, 58, 98],
    rows: [
      ["Canvas tote", "126 units"],
      ["Desk lamp", "24 units"],
      ["Travel mug", "08 units"],
    ],
    caption: "Inventory health",
  },
  {
    stat: ["82%", "46", "09"],
    bars: [43, 58, 72, 64, 91, 76, 95, 81],
    rows: [
      ["Room 204", "Checked in"],
      ["Room 118", "Ready"],
      ["Room 306", "Cleaning"],
    ],
    caption: "Occupancy",
  },
  {
    stat: ["64", "12", "08"],
    bars: [35, 56, 50, 82, 66, 95, 75, 88],
    rows: [
      ["09:00  Consultation", "Booked"],
      ["10:30  Follow-up", "Booked"],
      ["13:00  New patient", "Open"],
    ],
    caption: "Appointments",
  },
] as const;

export function ProductCard({ product }: { product: Product }) {
  const index = products.findIndex((item) => item.slug === product.slug);
  const Icon = icons[index] ?? Boxes;
  const preview = previews[index] ?? previews[0];
  return (
    <article className={"product-card product-card-" + product.color}>
      <div className={"product-visual " + product.color} aria-hidden="true">
        <span className="preview-halo" />
        <span className="preview-orbit orbit-back" />
        <span className="preview-orbit orbit-front" />
        <svg
          className="preview-circuits"
          viewBox="0 0 600 220"
          preserveAspectRatio="none"
        >
          <path d="M12 140h86l34-34h55m397-40h-72l-28 28h-48M62 195h68l30-30h40m325 18h-80l-22-22h-42" />
          <circle cx="12" cy="140" r="4" />
          <circle cx="187" cy="106" r="4" />
          <circle cx="584" cy="66" r="4" />
          <circle cx="62" cy="195" r="4" />
          <circle cx="525" cy="183" r="4" />
        </svg>
        <span className="preview-cube cube-one" />
        <span className="preview-cube cube-two" />
        <span className="preview-chip chip-left">
          <Icon size={15} />
        </span>
        <span className="preview-chip chip-right">
          <span />
          <span />
          <span />
        </span>
        <div className="preview-window">
          <div className="preview-sidebar">
            <span className="preview-logo">s</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="preview-content">
            <div className="preview-topbar">
              <span>{product.name}</span>
              <span className="preview-avatar">S</span>
            </div>
            <div className="preview-heading">
              <b>{preview.caption}</b>
              <small>Last 7 days⌄</small>
            </div>
            <div className="preview-stats">
              {preview.stat.map((value, i) => (
                <div key={i}>
                  <small>{["Today", "Active", "Healthy"][i]}</small>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <div className="preview-lower">
              <div className="preview-chart">
                {preview.bars.map((height, i) => (
                  <i key={i} style={{ height: height + "%" }} />
                ))}
              </div>
              <div className="preview-rows">
                {preview.rows.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <b>{value}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="preview-product-icon">
          <Icon size={17} />
        </span>
      </div>
      <div className="product-info">
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="badges">
          {product.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <div className="card-links">
          <Link href={"/software/" + product.slug}>
            View product <ArrowRight size={14} />
          </Link>
          <Link href="/request-quote">Request demo</Link>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

export const services = [
  ["Custom Software Development", Code2],
  ["Web Application Development", Monitor],
  ["Mobile Application Development", Smartphone],
  ["Business Management Systems", Boxes],
  ["POS & ERP Development", Store],
  ["UI/UX Design", Palette],
  ["Database Development", Database],
  ["Software Maintenance & Support", Wrench],
] as const;
export const industries = [
  ["Retail", Store],
  ["Healthcare", Stethoscope],
  ["Education", GraduationCap],
  ["Restaurants", Utensils],
  ["Hotels", Hotel],
  ["Salons", Scissors],
  ["Pharmacies", Stethoscope],
  ["Construction", HardHat],
  ["Professional Services", Monitor],
  ["Manufacturing", Factory],
] as const;
