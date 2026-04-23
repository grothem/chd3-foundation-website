import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { BioCard } from "@/components/BioCard";

const BOARD_MEMBERS = [
  {
    name: "Heather McArty",
    title: "Co-Founding Board Member, President",
    image: "heather.jpg",
    bio: (
      <>
        <p>
          Heather has 25 years of experience in the finance industry and now
          serves as the Executive Director of a life-affirming Pregnancy Resource
          Center in Illinois. Dedicated to serving her community, she earned a
          Nonprofit Management Certificate from the University of Illinois Chicago
          and helped establish a food pantry assisting seven rural communities,
          where she has served as Executive Director and Board President since 2014.
        </p>
        <p>
          Heather resides in Illinois with her husband, Chip, and their daughter,
          Olivia. She is also mom to Glendon and &ldquo;Mimi&rdquo; to his three
          children. Her grandson, Branson, was diagnosed with CHD3 through genetic
          testing just before his second birthday. Heather is passionate about
          raising awareness of this rare disorder through advocacy, networking, and
          fundraising to support medical research and share resources with CHD3
          families.
        </p>
        <p className="text-text italic">
          &ldquo;The meaning of life is to find your gift. The purpose is to give
          it away.&rdquo; — Pablo Picasso
        </p>
      </>
    ),
  },
  {
    name: "Celina Britton",
    title: "Co-Founding Board Member, Vice President",
    image: "celina.jpg",
    bio: (
      <>
        <p>
          Celina resides in West Texas with her husband, Cary, and their 3 kids,
          Cara, Karsyn, and Eli. She is a middle school theatre teacher and active
          in her community. Her passion has always been to advocate and be a voice
          for her students, but her passion only grew when their daughter Cara was
          diagnosed with CHD3 at age 3. Her hope is to bring awareness to the
          disorder, further medical research, and provide support to families
          affected.
        </p>
        <p className="text-text italic">
          &ldquo;Every child deserves a champion — an adult who will never give up
          on them, who understands the power of connection, and insists that they
          become the best that they can possibly be.&rdquo; — Rita Pierson
        </p>
      </>
    ),
  },
  {
    name: "Emily Niepraschk",
    title: "Co-Founding Board Member, Secretary",
    image: "emily.jpg",
    bio: (
      <p>
        Emily, who has a BA in English from Brigham Young University, lives in
        Virginia with her husband and their 5 children. Their youngest, Jonas,
        who was part of the initial CHD3 research, spurred her interest in
        educating and advocating for rare disorders. Emily is busy with her
        family, volunteers at their local elementary school, and is currently the
        secretary of the children&apos;s organization at her church. She spends a
        lot of time at amusement parks with her roller coaster-loving little boy!
      </p>
    ),
  },
  {
    name: "Abby Grothe",
    title: "Co-Founding Board Member, Co-Treasurer",
    image: "abby.jpg",
    bio: (
      <p>
        Abby lives in Iowa with her husband, Mark, and their 3 children. Their
        daughter Elsie is 6 years old and was diagnosed with Snijders Blok-Campeau
        Syndrome around 2 years old. Abby previously worked as a mental health
        therapist and feels passionately about helping her daughter cope with any
        challenges she faces.
      </p>
    ),
  },
  {
    name: "Gerianne Benisch",
    title: "Co-Founding Board Member, Co-Treasurer",
    image: "gerianne.jpg",
    bio: (
      <p>
        Gerianne lives in Illinois with Craig, her husband of 26 years. They have
        two children, Claire age 25 and Colin age 22. Colin was the index case for
        the CHD3 research project. He was 18 years old when they received the
        diagnosis. Gerianne loves to hang out with Colin watching demolition sites,
        bowling, softball, and basketball. She is also involved with the board of
        Colin&apos;s Challenger League baseball in the summer months.
      </p>
    ),
  },
  {
    name: "Christine Smith",
    title: "Co-Founding Board Member",
    image: "christine.jpg",
    bio: (
      <p>
        Christine resides in Colorado with her husband, Greg, and their 4 kids.
        Liam is their CHD3 warrior. She currently works as Liam&apos;s parent CNA
        and has 12 years of experience as an Oncology RN prior to the birth of
        Liam. They have a small zoo of animals — 2 dogs, 1 cat, 2 ferrets, 3
        chickens, and 2 ducks!
      </p>
    ),
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — CHD3 Foundation</title>
        <meta name="description" content="Meet the board members of the CHD3 Foundation." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        {/* Page header */}
        <section className="bg-bg-tint border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4">
              The People Behind<br />
              <span className="text-primary">CHD3 Foundation</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
              CHD3 Foundation is made up of families, caregivers, volunteers,
              and advocates united by a shared mission. Below are the board
              members who lead our organization.
            </p>
          </div>
        </section>

        {/* Board grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BOARD_MEMBERS.map((member, i) => (
              <BioCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </section>
      </AppLayout>
    </>
  );
}
