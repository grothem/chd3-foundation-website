import Head from "next/head";
import { motion } from "framer-motion";
import { AppLayout } from "@/layout/AppLayout";
import { BioCard } from "@/components/BioCard";
import { ArrowTopRightOnSquareIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const RESEARCHERS = [
  {
    name: "Dr. Campeau",
    image: "campeau.jpg",
    bio: (
      <p>
        Dr. Campeau studied medicine at Laval University, specialized in medical
        genetics at McGill University, and completed a postdoctoral fellowship at
        the Baylor College of Medicine. He now practices clinical genetics at the
        Sainte-Justine Hospital and the Shriners Hospital for Children in
        Montreal. His research lab studies epigenetic diseases, epilepsy, and
        skeletal dysplasias. More information at{" "}
        <a
          href="https://www.pcampeaulab.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          pcampeaulab.org
        </a>
        .
      </p>
    ),
  },
  {
    name: "Simon Fisher",
    image: "fisher.jpg",
    bio: (
      <p>
        Simon Fisher is a director of the Max Planck Institute for
        Psycholinguistics and Professor of Language and Genetics at the Donders
        Institute for Brain, Cognition and Behaviour in Nijmegen, the
        Netherlands. He heads a department investigating neurogenetic pathways
        involved in speech, language, and reading — identifying rare gene
        disruptions that cause neurodevelopmental disorders and characterizing
        their functional impacts in model systems including brain organoids.
      </p>
    ),
  },
];

const PUBLICATIONS = [
  {
    year: "2017",
    open: true,
    summary: "Early research into speech and language disorders discovered a mutation on CHD3.",
    citation: 'Eising, Else et al. "A set of regulatory genes co-expressed in embryonic human brain is implicated in disrupted speech development." Molecular psychiatry vol. 24,7 (2019): 1065-1078.',
    doi: "https://doi.org/10.1038/s41380-018-0020-x",
  },
  {
    year: "2018",
    open: true,
    summary: "First publication describing CHD3 as a cause of a neurodevelopmental syndrome in 35 individuals.",
    citation: 'Snijders Blok, Lot et al. "CHD3 helicase domain mutations cause a neurodevelopmental syndrome with macrocephaly and impaired speech and language." Nature communications vol. 9,1 4619. 5 Nov. 2018.',
    doi: "https://doi.org/10.1038/s41467-018-06014-6",
  },
  {
    year: "2020",
    open: true,
    summary: "A second publication examining 24 additional individuals brings the total to ~60 patients and further defines the disorder. The syndrome was named between 2018 and 2020.",
    citation: 'Drivas, T.G., Li, D., Nair, D. et al. "A second cohort of CHD3 patients expands the molecular mechanisms known to cause Snijders Blok-Campeau syndrome." Eur J Hum Genet 28, 1422–1431 (2020).',
    doi: "https://doi.org/10.1038/s41431-020-0654-4",
  },
  {
    year: "2020",
    open: true,
    summary: "Case report of a 9-year-old child from Japan with severe ID, autism, joint laxity, and dysmorphisms.",
    citation: "Miyako Mizukami, et al. \"A de novo CHD3 variant in a child with intellectual disability, autism, joint laxity, and dysmorphisms.\" Brain and Development, Volume 43, Issue 4, 2021, 563-565.",
    doi: "https://doi.org/10.1016/j.braindev.2020.12.004",
  },
  {
    year: "2021",
    open: true,
    summary: "Case study of a 14-month-old girl from China. Note: full text is in Chinese.",
    citation: "Fan, Xi-Yong. \"Snijders Blok-Campeau syndrome caused by CHD3 gene mutation: a case report.\" Zhongguo dang dai er ke za zhi vol. 23,9 (2021): 965-968.",
    doi: "https://pubmed.ncbi.nlm.nih.gov/34535214/",
  },
  {
    year: "2022",
    open: false,
    summary: "Describes a young CHD3 female with central precocious puberty.",
    citation: "LeBreton, L. et al. \"A novel CHD3 variant in a patient with central precocious puberty: Expanded phenotype of Snijders Blok-Campeau syndrome?\" American Journal of Medical Genetics Part A, 191A: 1065–1069.",
    doi: "https://onlinelibrary.wiley.com/doi/10.1002/ajmg.a.63096",
  },
  {
    year: "2022",
    open: false,
    summary: "Examines 21 families with inherited CHD3 showing variable expressivity of the syndrome.",
    citation: "van der Spek, Jet et al. \"Inherited variants in CHD3 show variable expressivity in Snijders Blok-Campeau syndrome.\" Genetics in medicine vol. 24,6 (2022): 1283-1296.",
    doi: "https://pubmed.ncbi.nlm.nih.gov/35346573/",
  },
];

const ASSOCIATED_LINKS = [
  { label: "Simon Fisher — Max Planck Institute", href: "https://www.mpi.nl/people/fisher-simon-e" },
  { label: "Paul Wade — NIH", href: "https://irp.nih.gov/pi/paul-wade" },
  { label: "Lot Snijders Blok", href: "https://twitter.com/Lot_SB" },
];

export default function Research() {
  return (
    <>
      <Head>
        <title>Research — CHD3 Foundation</title>
        <meta name="description" content="Published research and researchers behind Snijders Blok-Campeau Syndrome." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>

        {/* Page header */}
        <section className="bg-bg-tint border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4">
              Research
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
              The groups of Dr. Campeau and Dr. Fisher focused on CHD3 several
              years before the landmark 2018 publication, collecting clinical and
              genetic information to better understand the effects of CHD3
              mutations. Their collaboration — along with clinicians,
              bioinformaticians, and families — led to the characterization of
              Snijders Blok-Campeau Syndrome.
            </p>
          </div>
        </section>

        {/* Researchers */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-text mb-8">Key Researchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCHERS.map((r, i) => (
              <BioCard key={r.name} {...r} index={i} />
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="bg-neutral-50 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-text mb-8">Published Research</h2>
            <div className="space-y-4">
              {PUBLICATIONS.map((pub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  className="bg-card rounded-[14px] border border-border shadow-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                      <span className="text-sm font-bold text-text">{pub.year}</span>
                      {pub.open ? (
                        <span className="text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Open</span>
                      ) : (
                        <span className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <LockClosedIcon className="w-2.5 h-2.5" />
                          Paid
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text mb-2">{pub.summary}</p>
                      <p className="text-xs text-text-muted leading-relaxed mb-3">{pub.citation}</p>
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        View paper
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-xl font-bold text-text mb-5">Associated Sites</h2>
              <ul className="space-y-3">
                {ASSOCIATED_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text mb-5">For Clinicians</h2>
              <div className="space-y-3 text-sm text-text-muted leading-relaxed">
                <p>
                  We are collecting information from physicians on additional patients at{" "}
                  <a
                    href="https://humandiseasegenes.nl/chd3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    humandiseasegenes.nl/chd3
                  </a>
                  .
                </p>
                <p>
                  We are also collecting DNA or blood for episignatures with Dr. Rosanna Weksberg.
                </p>
              </div>
            </div>

          </div>
        </section>

      </AppLayout>
    </>
  );
}
