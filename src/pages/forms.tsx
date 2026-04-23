import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { DocumentTextIcon, ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const FORMS = [
  {
    icon: DocumentTextIcon,
    title: "Assistance Application",
    description: "Apply for financial assistance from the CHD3 Foundation. This form is hosted on Google Forms and takes approximately 10–15 minutes to complete.",
    action: "Open Application",
    href: "https://docs.google.com/forms/d/1rI5vP7EPTsDFCuBZZ3xxL5CVXNNjaI5rj87xgbfMFes/viewform",
    external: true,
    download: false,
  },
  {
    icon: DocumentTextIcon,
    title: "Board Member Application",
    description: "Interested in joining the CHD3 Foundation board? Download the application, complete it, and return it to us at chd3foundation@gmail.com.",
    action: "Download Application",
    href: "/docs/CHD3%20Board%20Member%20App.docx",
    external: false,
    download: true,
  },
];

export default function Forms() {
  return (
    <>
      <Head>
        <title>Forms — CHD3 Foundation</title>
        <meta name="description" content="Access CHD3 Foundation forms and applications." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        {/* Page header */}
        <section className="bg-bg-tint border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4">
              Forms
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
              Access our assistance application and board member application below.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {FORMS.map((form) => (
              <div
                key={form.title}
                className="bg-card rounded-[16px] border border-border shadow-card p-7 flex flex-col gap-5"
              >
                <div className="w-10 h-10 rounded-[10px] bg-primary-light flex items-center justify-center">
                  <form.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-text mb-2">{form.title}</h2>
                  <p className="text-sm text-text-muted leading-relaxed">{form.description}</p>
                </div>
                <a
                  href={form.href}
                  target={form.external ? "_blank" : undefined}
                  rel={form.external ? "noopener noreferrer" : undefined}
                  download={form.download}
                  className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors self-start"
                >
                  {form.action}
                  {form.external
                    ? <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    : <ArrowDownTrayIcon className="w-4 h-4" />
                  }
                </a>
              </div>
            ))}
          </div>
        </section>
      </AppLayout>
    </>
  );
}
