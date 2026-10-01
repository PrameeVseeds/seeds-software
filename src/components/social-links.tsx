type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "contact-socials" }: SocialLinksProps) {
  return (
    <div className={className} aria-label="Social media links">
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M13.4 21v-8h2.7l.4-3h-3.1V8c0-.9.3-1.4 1.5-1.4h1.7V3.9c-.3 0-1.2-.1-2.3-.1-2.4 0-4 1.5-4 4.1V10H7.6v3h2.7v8h3.1Z" />
        </svg>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M5.2 8.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.6 10h3.2v10.4H3.6V10Zm5.2 0h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.1 3.9 4.8v5.9h-3.2v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.3H8.8V10Z" />
        </svg>
      </a>
      <a href="https://wa.me/94760079784" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="M8.6 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.6 1 1.4 1.8 2.5 2.4.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.4-1.9.2-1.2-.3-2.5-1-3.9-2.4-1.4-1.4-2.1-2.7-2.4-3.9-.2-.8 0-1.5.3-1.9Z" />
        </svg>
      </a>
    </div>
  );
}
