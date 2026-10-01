"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Software", "/software"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="SeedStack Labz home">
          <span className="brand-image-frame">
            <Image src="/logos/logo.png" alt="" width={84} height={84} className="brand-image" priority />
          </span>
          <span className="brand-name">SeedStack<span className="brand-light">Labz</span></span>
        </Link>
        <div className="desktop-links">
          {links.map(([name, href]) => (
            <Link href={href} key={href} aria-current={isActive(href) ? "page" : undefined}>
              {name}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="button button-primary nav-cta" href="/request-quote">
            Get a Quote <ArrowUpRight className="quote-arrow" size={15} />
          </Link>
          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-panel" id="mobile-navigation">
          {links.map(([name, href]) => (
            <Link href={href} key={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
          <Link className="button button-primary" href="/request-quote" onClick={() => setOpen(false)}>
            Get a Quote <ArrowUpRight className="quote-arrow" size={15} />
          </Link>
        </div>
      )}
    </header>
  );
}

