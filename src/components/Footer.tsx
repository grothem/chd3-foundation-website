import NextLink from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const SOCIAL_LINKS = [
  { label: "CHD3 Foundation", href: "https://www.facebook.com/profile.php?id=100090494154041" },
  { label: "Family Support Group", href: "https://www.facebook.com/groups/1742254126095885" },
];

const FacebookIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Community</h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    <FacebookIcon />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Support Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://givebutter.com/hCoJWE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors"
                >
                  <HeartIcon className="w-4 h-4 shrink-0" />
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="https://chd3-foundation-store.printify.me/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors"
                >
                  <ShoppingBagIcon className="w-4 h-4 shrink-0" />
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:chd3foundation@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors"
                >
                  <EnvelopeIcon className="w-4 h-4 shrink-0" />
                  chd3foundation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4">
          <NextLink href="/">
            <Image src="/kite.png" alt="CHD3 Foundation" width={36} height={36} className="opacity-60 hover:opacity-100 transition-opacity" />
          </NextLink>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} CHD3 Foundation · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
