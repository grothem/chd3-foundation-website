import Head from "next/head";
import { Poppins } from "next/font/google";
import {
  ArrowRightIcon,
  HeartIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  SparklesIcon,
  ChevronRightIcon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolid } from "@heroicons/react/24/solid";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// ─── Primitive components (drafts — tweak here) ───────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="mb-6 pb-3 border-b border-neutral-200">
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">{title}</span>
      </div>
      {children}
    </section>
  );
}

function Row({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      {label && <p className="text-xs text-neutral-400 font-medium mb-3 tracking-wide">{label}</p>}
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

// ─── Buttons ─────────────────────────────────────────────────────────────────

function BtnPrimary({ children, size = "md", icon }: { children: React.ReactNode; size?: "sm" | "md" | "lg"; icon?: boolean }) {
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  return (
    <button className={`inline-flex items-center gap-2 font-semibold rounded-[10px] bg-primary text-white hover:bg-primary-dark transition-colors ${sizes[size]}`}>
      {children}
      {icon && <ArrowRightIcon className="w-4 h-4" />}
    </button>
  );
}

function BtnSecondary({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  return (
    <button className={`inline-flex items-center gap-2 font-semibold rounded-[10px] border-2 border-primary text-primary hover:bg-primary-light transition-colors ${sizes[size]}`}>
      {children}
    </button>
  );
}

function BtnGhost({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-[10px] text-text-muted hover:bg-neutral-100 transition-colors">
      {children}
    </button>
  );
}

function BtnAccent({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-[10px] bg-accent text-white hover:bg-amber-600 transition-colors">
      {children}
    </button>
  );
}

// ─── Badges ──────────────────────────────────────────────────────────────────

function Badge({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "accent" | "neutral" | "success" }) {
  const styles = {
    primary: "bg-primary-light text-primary",
    accent: "bg-accent-light text-accent",
    neutral: "bg-neutral-100 text-neutral-600",
    success: "bg-green-100 text-green-700",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full ${styles[variant]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

// ─── Cards ───────────────────────────────────────────────────────────────────

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-[14px] border border-border p-5 ${className}`} style={{ boxShadow: "var(--shadow-card)" }}>
      {children}
    </div>
  );
}

function IconCard({ icon: Icon, title, description, link }: { icon: any; title: string; description: string; link: string }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="w-10 h-10 rounded-[10px] bg-primary-light flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h4 className="text-sm font-semibold text-text">{title}</h4>
      <p className="text-xs text-text-muted leading-relaxed">{description}</p>
      <span className="text-xs font-semibold text-primary flex items-center gap-1 mt-1">
        {link} <ChevronRightIcon className="w-3.5 h-3.5" />
      </span>
    </Card>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <Card className="text-center">
      <div className="text-3xl font-extrabold text-primary mb-1">{number}</div>
      <div className="text-xs text-text-muted font-medium">{label}</div>
    </Card>
  );
}

function BioCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <Card className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
        <span className="text-primary font-bold text-lg">{name[0]}</span>
      </div>
      <div>
        <div className="font-semibold text-sm text-text">{name}</div>
        <div className="text-xs text-primary font-medium mb-2">{role}</div>
        <p className="text-xs text-text-muted leading-relaxed line-clamp-3">{bio}</p>
      </div>
    </Card>
  );
}

// ─── Alert / Banner ──────────────────────────────────────────────────────────

function Alert({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "success" | "warning" }) {
  const styles = {
    info: "bg-primary-light border-primary/20 text-primary",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-accent-light border-amber-200 text-amber-800",
  };
  const icons = { info: BellIcon, success: CheckCircleSolid, warning: SparklesIcon };
  const Icon = icons[variant];
  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-[10px] border text-sm font-medium ${styles[variant]}`}>
      <Icon className="w-4 h-4 mt-0.5 shrink-0" />
      <span className="text-sm">{children}</span>
      <button className="ml-auto opacity-60 hover:opacity-100"><XMarkIcon className="w-4 h-4" /></button>
    </div>
  );
}

// ─── Form elements ───────────────────────────────────────────────────────────

function Input({ label, placeholder, error }: { label: string; placeholder: string; error?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-text">{label}</label>
      <input
        className={`px-4 py-2.5 rounded-[10px] border text-sm text-text placeholder:text-neutral-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${error ? "border-red-400 ring-2 ring-red-100" : "border-border"}`}
        placeholder={placeholder}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
}

// ─── Nav preview ─────────────────────────────────────────────────────────────

function NavPreview() {
  return (
    <div className="rounded-[14px] overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="bg-card flex items-center justify-between px-8 h-16 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg viewBox="0 0 500 250" width="18" height="9"><path d="M349.818 23.693C349.818 23.693 337.259 40.075 306.681 69.562C306.681 69.562 333.437 129.081 338.351 169.487C338.351 169.487 383.672 119.798 398.415 77.207C398.415 77.207 380.396 52.088 349.818 23.693Z" fill="white" /></svg>
          </div>
          <span className="font-bold text-sm text-text">CHD3 Foundation</span>
        </div>
        <nav className="flex items-center gap-7">
          {["Home", "About Us", "Research", "Forms"].map((link, i) => (
            <a key={link} className={`text-sm font-medium transition-colors ${i === 0 ? "text-primary" : "text-text-muted hover:text-text"}`}>{link}</a>
          ))}
        </nav>
        <button className="px-4 py-2 rounded-[8px] bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
          Donate
        </button>
      </div>
    </div>
  );
}

// ─── Hero preview ─────────────────────────────────────────────────────────────

function HeroPreview() {
  return (
    <div className="rounded-[14px] overflow-hidden border border-border bg-bg-tint" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="px-10 py-12 flex gap-10 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Global Support Community
          </div>
          <h2 className="text-4xl font-extrabold text-text leading-tight mb-4">
            You are not alone<br />
            in this <span className="text-primary">journey</span>
          </h2>
          <p className="text-base text-text-muted leading-relaxed mb-7 max-w-md">
            CHD3 Foundation connects families, supports research, and advocates for those living with CHD3-related conditions worldwide.
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-[10px] bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors">
              Join Our Community
            </button>
            <button className="px-6 py-3 rounded-[10px] border-2 border-primary text-primary font-semibold text-sm hover:bg-primary-light transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-card rounded-[14px] border border-border p-6 min-w-[200px] flex flex-col gap-4" style={{ boxShadow: "var(--shadow-card)" }}>
          {[["237", "Diagnosed cases worldwide"], ["787", "Support group members"], ["7", "Published research papers"]].map(([n, l], i) => (
            <div key={i}>
              {i > 0 && <div className="h-px bg-border mb-4" />}
              <div className="text-3xl font-extrabold text-primary leading-none mb-1">{n}</div>
              <div className="text-xs text-text-muted font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <div className="rounded-[14px] bg-primary px-8 py-7 flex items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Ready to connect with others?</h3>
        <p className="text-sm text-white/70">Our community is here for every step of the journey.</p>
      </div>
      <button className="shrink-0 px-6 py-3 rounded-[10px] bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors">
        Join Today
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Dev() {
  return (
    <>
      <Head>
        <title>Dev — CHD3 Components</title>
      </Head>
      <div className={`${poppins.variable} font-sans min-h-screen bg-neutral-50`}>
        {/* Header */}
        <div className="sticky top-0 z-50 bg-neutral-900 border-b border-neutral-800 px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm font-semibold text-white">CHD3 — Component Playground</span>
          </div>
          <span className="text-xs text-neutral-500">Edit <code className="text-neutral-300">src/pages/dev.tsx</code> to tweak</span>
        </div>

        <div className="max-w-4xl mx-auto px-8 py-12">

          {/* Color Palette */}
          <Section title="Color Palette">
            <Row label="Primary (Blue)">
              {[["bg-blue-50", "50"], ["bg-blue-100", "100"], ["bg-blue-200", "200"], ["bg-blue-300", "300"], ["bg-blue-400", "400"], ["bg-blue-500", "500"], ["bg-blue-600 ring-2 ring-blue-600 ring-offset-2", "600 ★"], ["bg-blue-700", "700"], ["bg-blue-800", "800"], ["bg-blue-900", "900"]].map(([cls, label]) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-10 h-10 rounded-lg ${cls}`} />
                  <span className="text-[10px] text-neutral-400">{label}</span>
                </div>
              ))}
            </Row>
            <Row label="Accent (Amber)">
              {[["bg-amber-50", "50"], ["bg-amber-100", "100"], ["bg-amber-200", "200"], ["bg-amber-300", "300"], ["bg-amber-400", "400"], ["bg-amber-500 ring-2 ring-amber-500 ring-offset-2", "500 ★"], ["bg-amber-600", "600"], ["bg-amber-700", "700"]].map(([cls, label]) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-10 h-10 rounded-lg ${cls}`} />
                  <span className="text-[10px] text-neutral-400">{label}</span>
                </div>
              ))}
            </Row>
            <Row label="Neutrals (warm-tinted)">
              {[["bg-neutral-50", "50"], ["bg-neutral-100", "100"], ["bg-neutral-200", "200"], ["bg-neutral-300", "300"], ["bg-neutral-400", "400"], ["bg-neutral-500", "500"], ["bg-neutral-600", "600"], ["bg-neutral-700", "700"], ["bg-neutral-800", "800"], ["bg-neutral-900", "900"]].map(([cls, label]) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-10 h-10 rounded-lg border border-border ${cls}`} />
                  <span className="text-[10px] text-neutral-400">{label}</span>
                </div>
              ))}
            </Row>
          </Section>

          {/* Typography */}
          <Section title="Typography — Poppins">
            <div className="space-y-5 bg-card rounded-[14px] border border-border p-7">
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">Display / Hero — 800 48px</span>
                <p className="text-5xl font-extrabold text-text leading-tight">You are not alone</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">H1 — 800 36px</span>
                <p className="text-4xl font-extrabold text-text">Supporting families worldwide</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">H2 — 700 28px</span>
                <p className="text-3xl font-bold text-text">Research & Resources</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">H3 — 700 22px</span>
                <p className="text-2xl font-bold text-text">Board Members</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">H4 — 600 18px</span>
                <p className="text-lg font-semibold text-text">Community Support</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">Body — 400 16px</span>
                <p className="text-base text-text-muted leading-relaxed max-w-xl">CHD3 Foundation connects families, supports research, and advocates for those living with CHD3-related conditions. We believe no family should navigate this journey alone.</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">Small / Caption — 400 14px</span>
                <p className="text-sm text-text-muted">Published in Nature Genetics, 2021 · DOI: 10.1038/s41588-021-00904-2</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest block mb-1">Section label — 600 11px uppercase</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary">How we help</p>
              </div>
            </div>
          </Section>

          {/* Buttons */}
          <Section title="Buttons">
            <Row label="Variants">
              <BtnPrimary>Primary</BtnPrimary>
              <BtnPrimary icon>With icon</BtnPrimary>
              <BtnSecondary>Secondary</BtnSecondary>
              <BtnGhost>Ghost</BtnGhost>
              <BtnAccent>Accent</BtnAccent>
            </Row>
            <Row label="Sizes">
              <BtnPrimary size="sm">Small</BtnPrimary>
              <BtnPrimary size="md">Medium</BtnPrimary>
              <BtnPrimary size="lg">Large</BtnPrimary>
            </Row>
            <Row label="Secondary sizes">
              <BtnSecondary size="sm">Small</BtnSecondary>
              <BtnSecondary size="md">Medium</BtnSecondary>
              <BtnSecondary size="lg">Large</BtnSecondary>
            </Row>
          </Section>

          {/* Badges */}
          <Section title="Badges & Pills">
            <Row>
              <Badge variant="primary">Support Community</Badge>
              <Badge variant="accent">New Research</Badge>
              <Badge variant="neutral">Board Member</Badge>
              <Badge variant="success">Active</Badge>
            </Row>
          </Section>

          {/* Alerts */}
          <Section title="Alerts & Banners">
            <div className="space-y-3">
              <Alert variant="info">New research published: "CHD3 variants and neurodevelopmental outcomes" — view the paper →</Alert>
              <Alert variant="success">Your assistance application has been received. We'll follow up within 5 business days.</Alert>
              <Alert variant="warning">Applications for the 2024 grant cycle close on December 15th.</Alert>
            </div>
          </Section>

          {/* Form Elements */}
          <Section title="Form Elements">
            <div className="bg-card rounded-[14px] border border-border p-7 grid grid-cols-2 gap-5">
              <Input label="Full name" placeholder="Jane Smith" />
              <Input label="Email address" placeholder="jane@example.com" />
              <Input label="Child's diagnosis" placeholder="CHD3 variant" />
              <Input label="Country" placeholder="United States" error="This field is required" />
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text">Additional notes</label>
                <textarea
                  className="px-4 py-2.5 rounded-[10px] border border-border text-sm text-text placeholder:text-neutral-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  rows={3}
                  placeholder="Tell us a bit about your situation..."
                />
              </div>
              <div className="col-span-2 flex items-center gap-2.5">
                <input type="checkbox" id="agree" className="w-4 h-4 accent-primary rounded" />
                <label htmlFor="agree" className="text-sm text-text-muted">I agree to the <span className="text-primary font-medium">privacy policy</span></label>
              </div>
            </div>
          </Section>

          {/* Cards */}
          <Section title="Cards">
            <Row label="Icon cards">
              <IconCard icon={UserGroupIcon} title="Community Support" description="Connect with other families navigating CHD3 diagnoses around the world." link="Join the group" />
              <IconCard icon={DocumentTextIcon} title="Financial Assistance" description="Apply for grants and assistance programs designed for affected families." link="Apply now" />
              <IconCard icon={HeartIcon} title="Research Updates" description="Stay current with the latest published research on CHD3 and related conditions." link="View research" />
            </Row>
            <Row label="Stat cards">
              <StatCard number="237" label="Diagnosed cases worldwide" />
              <StatCard number="787" label="Support group members" />
              <StatCard number="7" label="Published research papers" />
            </Row>
            <Row label="Bio card">
              <BioCard name="Jane Smith" role="Founder & President" bio="Jane founded CHD3 Foundation after her daughter was diagnosed in 2018. She brings 15 years of nonprofit leadership experience and is passionate about connecting rare disease families globally." />
              <BioCard name="Dr. Alex Chen" role="Medical Advisor" bio="Dr. Chen is a pediatric neurologist specializing in rare genetic conditions. He has contributed to three of the seven published papers on CHD3-related syndromes." />
            </Row>
          </Section>

          {/* Navigation */}
          <Section title="Navigation">
            <NavPreview />
          </Section>

          {/* Hero */}
          <Section title="Hero Section">
            <HeroPreview />
          </Section>

          {/* CTA */}
          <Section title="CTA Banner">
            <CTABanner />
          </Section>

        </div>
      </div>
    </>
  );
}
