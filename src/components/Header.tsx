import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": any;
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
        src="https://js.givebutter.com/elements/latest.js"
        strategy="lazyOnload"
      />
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <NextLink href="/" className="shrink-0 -ml-1">
              <svg
                viewBox="0 0 500 250"
                width="180"
                height="90"
                aria-label="CHD3 Foundation"
                role="img"
              >
                <path d="M57.473 137.789V146.33C57.473 161.437 50.352 168.986 36.117 168.986H24.603C10.365 168.986 3.247 161.437 3.247 146.33V58.307C3.247 43.203 10.365 35.651 24.603 35.651H36.117C50.352 35.651 57.473 43.204 57.473 58.307V73.349H39.645V59.607C39.645 54.407 36.981 51.807 31.66 51.807H28.132C23.426 51.807 21.075 54.407 21.075 59.607V145.031C21.075 150.23 23.425 152.83 28.132 152.83H32.589C37.293 152.83 39.646 150.23 39.646 145.031V137.789H57.473Z" fill="#FFEC3C"/>
                <path d="M111.142 168.986V108.446H89.229V168.986H71.401V35.651H89.229V92.291H111.142V35.651H128.97V168.986H111.142Z" fill="#FFEC3C"/>
                <path d="M145.682 168.986V35.651H176.695C193.408 35.651 201.765 44.193 201.765 61.278V149.674C201.765 162.551 194.645 168.987 180.409 168.987H145.682V168.986ZM163.51 152.83H176.881C181.585 152.83 183.938 150.851 183.938 146.889V61.464C183.938 55.028 181.274 51.808 175.952 51.808H163.51V152.83Z" fill="#FFEC3C"/>
                <path d="M257.103 100.461C266.388 102.94 271.031 108.571 271.031 117.36V146.329C271.031 161.436 263.91 168.985 249.675 168.985H237.605C223.367 168.985 216.248 161.436 216.248 146.329V137.788H234.076V145.03C234.076 150.229 236.426 152.829 241.133 152.829H245.218C250.54 152.829 253.203 150.229 253.203 145.03V117.545C253.203 111.728 249.736 108.817 242.804 108.817H237.976V93.774H240.576C247.509 93.774 250.975 90.867 250.975 85.046V59.79C250.975 54.59 248.312 51.99 242.99 51.99H240.576C235.87 51.99 233.519 54.59 233.519 59.79V73.347H215.692V58.491C215.692 43.263 222.809 35.649 237.047 35.649H247.446C261.681 35.649 268.802 43.263 268.802 58.491V85.047C268.803 93.469 264.903 98.605 257.103 100.461Z" fill="#FFEC3C"/>
                <path d="M7.472 189.121V194.59H17.521V198.787H7.472V207.215H2.448V184.955H18.443L18.411 189.121H7.472Z" fill="#FFEC3C"/>
                <path d="M50.047 196.084C50.047 202.508 44.896 207.437 38.09 207.437C31.285 207.437 26.134 202.539 26.134 196.084C26.134 189.598 31.286 184.795 38.09 184.795C44.896 184.795 50.047 189.629 50.047 196.084ZM31.286 196.084C31.286 199.996 34.434 203.049 38.155 203.049C41.875 203.049 44.896 199.996 44.896 196.084C44.896 192.174 41.875 189.184 38.155 189.184C34.402 189.184 31.286 192.174 31.286 196.084Z" fill="#FFEC3C"/>
                <path d="M79.394 197.897C79.394 203.78 75.546 207.438 69.409 207.438C63.24 207.438 59.297 203.78 59.297 197.897V184.956H64.321V197.897C64.321 201.11 66.42 203.049 69.409 203.049C72.398 203.049 74.369 201.11 74.369 197.897V184.956H79.393L79.394 197.897Z" fill="#FFEC3C"/>
                <path d="M105.815 207.215L95.035 192.936V207.215H90.234V184.955H94.813L105.624 199.264V184.955H110.394V207.215H105.815Z" fill="#FFEC3C"/>
                <path d="M131.091 184.955C137.991 184.955 142.793 189.502 142.793 196.084C142.793 202.635 137.928 207.215 130.9 207.215H121.647V184.955H131.091ZM126.671 202.984H131.218C134.939 202.984 137.674 200.187 137.674 196.117C137.674 192.014 134.812 189.183 130.996 189.183H126.671V202.984Z" fill="#FFEC3C"/>
                <path d="M156.241 202.891L154.492 207.215H149.309L158.976 184.955H164.159L173.667 207.215H168.293L166.544 202.891H156.241ZM161.424 190.201L157.894 198.851H164.922L161.424 190.201Z" fill="#FFEC3C"/>
                <path d="M189.626 189.217V207.215H184.602V189.217H177.829V184.955H196.432V189.217H189.626Z" fill="#FFEC3C"/>
                <path d="M205.49 207.215V184.955H210.514V207.215H205.49Z" fill="#FFEC3C"/>
                <path d="M244.124 196.084C244.124 202.508 238.973 207.437 232.168 207.437C225.362 207.437 220.211 202.539 220.211 196.084C220.211 189.598 225.362 184.795 232.168 184.795C238.973 184.795 244.124 189.629 244.124 196.084ZM225.362 196.084C225.362 199.996 228.51 203.049 232.231 203.049C235.952 203.049 238.972 199.996 238.972 196.084C238.972 192.174 235.951 189.184 232.231 189.184C228.478 189.184 225.362 192.174 225.362 196.084Z" fill="#FFEC3C"/>
                <path d="M269.369 207.215L258.589 192.936V207.215H253.787V184.955H258.366L269.179 199.264V184.955H273.949V207.215H269.369Z" fill="#FFEC3C"/>
                <path d="M349.545 33.249C349.545 33.249 325.793 58.914 316.782 67.923L353.095 70.926L350.637 40.621" fill="#3F51B5"/>
                <path d="M355.552 72.564L391.318 75.567C391.318 75.567 380.397 111.334 345.177 153.652C345.177 153.652 350.91 105.6 354.459 74.202" fill="#3F51B5"/>
                <path d="M347.088 3.48999C347.088 3.48999 366.746 101.232 335.621 176.586C335.621 176.586 339.443 180.408 324.701 182.045C309.958 183.684 298.49 171.672 286.476 181.5C286.476 181.5 281.016 193.512 302.858 195.152C324.701 196.789 363.469 183.138 372.206 197.334C372.206 197.334 378.759 205.527 366.2 207.711C353.64 209.895 324.701 198.428 327.976 236.106" stroke="black" strokeWidth="5.4604" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M353.095 33.795C353.095 33.795 374.937 52.361 391.045 72.837L354.734 70.653" fill="#FFEC3C"/>
                <path d="M313.78 71.745C313.78 71.745 335.075 119.797 341.628 151.74C341.628 151.74 352.003 118.978 351.457 74.475" fill="#FFEC3C"/>
                <path d="M349.818 23.693C349.818 23.693 337.259 40.075 306.681 69.562C306.681 69.562 333.437 129.081 338.351 169.487C338.351 169.487 383.672 119.798 398.415 77.207C398.415 77.207 380.396 52.088 349.818 23.693Z" stroke="black" strokeWidth="5.4604" strokeMiterlimit="10"/>
                <path d="M327.843 222.277C327.843 222.277 311.795 206.638 307.932 208.47C307.932 208.47 306.846 208.173 306.497 211.714C306.147 215.257 305.804 218.525 305.804 218.525L304.707 218.775L305.491 220.431C305.491 220.431 302.607 227.47 302.038 228.548C301.469 229.63 301.387 233.45 312.103 230.403C322.82 227.358 325.317 225.501 326.93 226.626C328.545 227.755 340.017 240.29 344.107 240.651C348.195 241.014 347.463 236.901 347.488 235.809C347.51 234.717 348.163 229.815 348.163 229.815L350.098 228.766L349.047 226.83C349.047 226.83 353.027 219.543 353.046 218.723C353.063 217.905 352.861 214.623 345.722 216.381C338.582 218.141 327.843 222.277 327.843 222.277Z" fill="#3F51B5"/>
              </svg>
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
              <givebutter-widget id="gO0drp" className="hidden sm:block" />
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
                <givebutter-widget id="gO0drp" />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
