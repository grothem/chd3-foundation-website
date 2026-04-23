import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function BoardApplication() {
  const docHref = "/docs/CHD3%20Board%20Member%20App.docx";

  return (
    <>
      <Head>
        <title>Board Member Application — CHD3 Foundation</title>
        <meta name="description" content="Download the CHD3 Foundation Board Member Application." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-card rounded-[16px] border border-border shadow-card p-8 max-w-md">
            <h1 className="text-2xl font-extrabold text-text mb-3">Board Member Application</h1>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Download the application, complete it, and return it to us at{" "}
              <a href="mailto:chd3foundation@gmail.com" className="text-primary hover:underline">
                chd3foundation@gmail.com
              </a>
              .
            </p>
            <a
              href={docHref}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Download Application
              <ArrowDownTrayIcon className="w-4 h-4" />
            </a>
          </div>
        </section>
      </AppLayout>
    </>
  );
}
