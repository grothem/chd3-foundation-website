import { motion } from "framer-motion";
import NextLink from "next/link";
import {
  UserGroupIcon,
  DocumentTextIcon,
  HeartIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const STATS = [
  { value: "237", label: "Known cases worldwide" },
  { value: "787", label: "Support group members" },
  { value: "7", label: "Published research papers" },
];

const CARDS = [
  {
    icon: UserGroupIcon,
    title: "Community Support",
    description: "Connect with families navigating CHD3 diagnoses around the world.",
    href: "https://www.facebook.com/groups/1742254126095885",
    external: true,
    label: "Join the group",
  },
  {
    icon: HeartIcon,
    title: "Financial Assistance",
    description: "Apply for grants and assistance programs designed to support affected families.",
    href: "/forms",
    external: false,
    label: "Apply now",
  },
  {
    icon: DocumentTextIcon,
    title: "Research",
    description: "Stay current with the latest published research on CHD3-related conditions.",
    href: "/research",
    external: false,
    label: "View research",
  },
];

export const Main = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-tint border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">

          {/* Text */}
          <div className="flex-1">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-text leading-tight mb-5"
            >
              A community for individuals<br />
              and families living with <span className="text-primary">CHD3</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-base md:text-lg text-text-muted leading-relaxed mb-8 max-w-lg"
            >
              CHD3 Foundation connects families, funds research, and advocates for those living with Snijders Blok-Campeau Syndrome worldwide.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#support"
                className="px-6 py-3 rounded-[10px] bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Find Support
              </a>
              <NextLink
                href="/about"
                className="px-6 py-3 rounded-[10px] border-2 border-primary text-primary font-semibold text-sm hover:bg-primary-light transition-colors"
              >
                Who We Are
              </NextLink>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-auto"
          >
            <div className="bg-card rounded-[16px] border border-border p-6 shadow-card md:min-w-[220px]">
              {STATS.map((stat, i) => (
                <div key={stat.label}>
                  {i > 0 && <div className="h-px bg-border my-4" />}
                  <div className="text-3xl font-extrabold text-primary leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is SBC Syndrome */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-6">
            What is Snijders Blok-Campeau Syndrome?
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Snijders Blok-Campeau Syndrome is a rare neurodevelopmental disorder
            caused by mutations in the CHD3 gene, which plays an important role
            during early brain development. This gene makes a protein that
            regulates the function of other genes in the developing brain,
            ensuring that brain cells move into their correct positions at the
            right time. Even small changes in CHD3 can disrupt that process,
            resulting in abnormal brain development and a variety of conditions
            affecting other parts of the body. Common traits include intellectual
            disability, developmental delays, hypotonia, impaired speech and
            language, and characteristic facial features.
          </p>
        </motion.div>
      </section>

      {/* Feature cards */}
      <section id="support" className="bg-neutral-50 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
              How we help
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Resources for families &amp; caregivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              >
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-card rounded-[14px] border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                  >
                    <CardContent card={card} />
                  </a>
                ) : (
                  <NextLink
                    href={card.href}
                    className="group block bg-card rounded-[14px] border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                  >
                    <CardContent card={card} />
                  </NextLink>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

function CardContent({ card }: { card: typeof CARDS[number] }) {
  return (
    <>
      <div className="w-10 h-10 rounded-[10px] bg-primary-light flex items-center justify-center mb-4">
        <card.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-sm font-semibold text-text mb-2">{card.title}</h3>
      <p className="text-xs text-text-muted leading-relaxed mb-4">{card.description}</p>
      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
        {card.label} <ChevronRightIcon className="w-3.5 h-3.5" />
      </span>
    </>
  );
}
