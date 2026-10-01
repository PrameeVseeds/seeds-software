import Image from "next/image";
import Link from "next/link";
import { SriLankaFlag } from "@/src/components/sri-lanka-flag";
import { SocialLinks } from "@/src/components/social-links";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="brand">
            <span className="brand-image-frame footer-brand-image">
              <Image
                src="/logos/logo.png"
                alt=""
                width={84}
                height={84}
                className="brand-image"
              />
            </span>
            <span className="brand-name">
              SeedStack<span className="brand-light">Labz</span>
            </span>
          </Link>
          <p>Thoughtful software for the way your business works.</p>
          <SocialLinks className="contact-socials footer-socials" />
        </div>
        {[
          ["Company", ["About", "/about"], ["Contact", "/contact"]],
          [
            "Software",
            ["All software", "/software"],
            ["Services", "/services"],
            ["Industries", "/industries"],
          ],
          [
            "Contact",
            ["info@vseeds.lk", "mailto:info@vseeds.lk"],
            ["+94 76 007 9784", "tel:+94760079784"],
          ],
        ].map(([g, ...items]) => (
          <div className="footer-col" key={g as string}>
            <b>{g as string}</b>
            {(items as string[][]).map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} SeedStack Labz. All rights reserved.{" "}
        <span><SriLankaFlag /> Ja-Ela, Sri Lanka</span>
      </div>
    </footer>
  );
}
