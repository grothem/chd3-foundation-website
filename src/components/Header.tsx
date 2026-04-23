import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon, HeartIcon } from "@heroicons/react/24/outline";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": { id: string; class?: string };
    }
  }
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Forms", href: "/forms" },
];

const STORE_HREF = "https://chd3-foundation-store.printify.me/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
    <Script
      src="https://widgets.givebutter.com/latest.umd.cjs?acct=ruykNMO5qtnfw8Tv&p=other"
      strategy="afterInteractive"
    />
    <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <NextLink href="/" className="shrink-0 flex items-center gap-3">
              <Image
                src="/kite.svg"
                alt="CHD3 Foundation"
                width={48}
                height={60}
                priority
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-text leading-tight">CHD3 Foundation</span>
                <span className="hidden lg:block text-xs text-text-muted leading-tight">Snijders Blok-Campeau Syndrome</span>
              </div>
            </NextLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <NextLink
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "text-primary bg-primary-light"
                        : "text-text-muted hover:text-text hover:bg-neutral-100"
                    }`}
                  >
                    {link.name}
                  </NextLink>
                );
              })}
              <a
                href={STORE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md text-sm font-medium text-text-muted hover:text-text hover:bg-neutral-100 transition-colors inline-flex items-center gap-1"
              >
                Store
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
              </a>
            </nav>

            {/* Donate + mobile toggle */}
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-primary text-white text-sm font-semibold pointer-events-none">
                  <HeartIcon className="w-4 h-4" />
                  Donate
                </button>
                <div className="absolute inset-0 opacity-0">
                  <givebutter-widget id="gO0drp" />
                </div>
              </div>
              <button
                className="md:hidden p-2 rounded-md text-text-muted hover:bg-neutral-100 transition-colors"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen
                  ? <XMarkIcon className="w-5 h-5" />
                  : <Bars3Icon className="w-5 h-5" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <NextLink
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "text-primary bg-primary-light"
                        : "text-text-muted hover:text-text hover:bg-neutral-100"
                    }`}
                  >
                    {link.name}
                  </NextLink>
                );
              })}
              <a
                href={STORE_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-md text-sm font-medium text-text-muted hover:text-text hover:bg-neutral-100 transition-colors inline-flex items-center gap-1"
              >
                Store
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
              </a>
              <div className="pt-2">
                <div className="relative inline-block">
                  <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[8px] bg-primary text-white text-sm font-semibold pointer-events-none">
                    <HeartIcon className="w-4 h-4" />
                    Donate
                  </button>
                  <div className="absolute inset-0 opacity-0">
                    <givebutter-widget id="gO0drp" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
    );
}
