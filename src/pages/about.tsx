import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {
  Flex,
  Heading,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Bios() {
  return (
    <>
      <Header />
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        <HeatherBio />
        <CelinaBio />
        <EmilyBio />
        <AbbyBio />
        <GerianneBio />
        <ChristineBio />
        <CourtneyBio />
      </VStack>
      <Footer />
    </>
  );
}

const HeatherBio = () => {
  return (
    <BioTemplate
      name="Heather McArty"
      image="bio/heather.jpg"
      title="Co-Founding Board Member, President"
      bio={
        <>
          <Text>
            Heather has 25 years of experience in the finance industry and is
            employed with INB, N.A. as Vice President, Branch Manager. Dedicated
            to serving her community, she obtained a Nonprofit Management
            Certificate from the University of Illinois Chicago to expand her
            knowledge in helping to establish and operate the 501C3
            organization, Oakwood Area Food Pantry, Inc., where she has served
            as Executive Director and Board President since 2014.
          </Text>
          <br />
          <Text>
            Heather resides in Illinois with her husband Chip and daughter,
            Olivia. She is also a mom to Glendon and a Mimi to his three
            children. Her grandson Branson was diagnosed with CHD3 through gene
            testing, just before his second birthday. She is dedicated to
            raising awareness of this rare disorder through advocacy,
            networking, and fundraising, in order to support further medical
            research and disseminate information to CHD3 families and patients.
          </Text>
          <br />
          <Text>
            &quot;The meaning of life is to find your gift. The purpose is to
            give it away. &quot; -Pablo Picasso.
          </Text>
        </>
      }
    />
  );
};

const CelinaBio = () => {
  return (
    <BioTemplate
      name="Celina Britton"
      title="Co-founding Board Member, Vice President"
      bio={
        <>
          <Text>
            Celina resides in West Texas with her husband, Cary and their 3
            kids, Cara, Karsyn, and Eli. She is a middle school theatre teacher
            and active in her community. Her passion has always been to advocate
            and be a voice for her students, but her passion only grew when
            their daughter Cara was diagnosed with CHD3 at age 3. Her hope is to
            bring awareness to the disorder, further medical research, and
            provide support to families affected.{" "}
          </Text>
          <br />
          <Text>
            &quot;Every child deserves a champion—an adult who will never give
            up on them, who understands the power of connection, and insists
            that they become the best that they can possibly be.&quot;- Rita
            Pierson
          </Text>
        </>
      }
    />
  );
};

const EmilyBio = () => {
  return (
    <BioTemplate
      name="Emily Niepraschk"
      title="Co-Founding Board Member, Secretary"
      bio={
        <Text>
          Emily, who has a BA in English from Brigham Young University, lives in
          Virginia with her husband and their 5 children. Their youngest, Jonas,
          who was part of the initial CHD3 research, spurred her interest in
          educating and advocating for rare disorders. Emily is busy with her
          family, volunteers at their local elementary school, and is currently
          the secretary of the children&apos;s organization at her church. She
          spends a lot of time at amusement parks with her roller coaster-loving
          little boy!
        </Text>
      }
    />
  );
};

const AbbyBio = () => {
  return (
    <BioTemplate
      name="Abby Grothe"
      title="Co-Founding Board Member, Co-Treasurer"
      bio={<Text>bio goes here</Text>}
    />
  );
};

const GerianneBio = () => {
  return (
    <BioTemplate
      name="Gerianne Benisch"
      title="Co-Founding Board Member, Co-Treasurer"
      bio={
        <Text>
          Gerianne lives in Illinois with Craig, her husband of 26 years. They
          have two children, Claire age 25 and Colin age 22. Colin was the index
          case for the CHD3 research project. He was 18 years old when we
          received the diagnosis. Gerianne loves to hang out with Colin watching
          demolition sites, bowling, softball, and basketball. She is also
          involved with the board of Colin&apos;s Challenger League baseball in
          the summer months.
        </Text>
      }
    />
  );
};

const ChristineBio = () => {
  return (
    <BioTemplate
      name="Christine Smith"
      title="Co-Founding Board Member"
      bio={
        <Text>
          Christine resides in Colorado with her husband, Greg and their 4 kids.
          Liam is their CHD3 warrior. She currently works as Liam&apos;s parent
          CNA. She has 12 years of experience as an Oncology RN prior to the
          birth of Liam. They have a small zoo of animals, 2 dogs, 1 cat, 2
          ferrets, 3 chickens and 2 ducks!
        </Text>
      }
    />
  );
};

const CourtneyBio = () => {
  return (
    <BioTemplate
      name="Courtney Broyles"
      title="Co-Founding Board Member"
      image="bio/courtney.jpg"
      bio={
        <Text>
          Courtney resides in Colorado with her husband, Toby, and their two
          children, Remington and Sullivan. Sullivan was diagnosed with CHD3 at
          around 14 months of age. Courtney is an active member of her community
          being the Vice President of the Cerebral Palsy Association of Colorado
          Springs, CHD3 research participant, active school PTO member, softball
          coach, advocate for inclusion and caregiver to Sullivan.
        </Text>
      }
    />
  );
};

const BioTemplate = ({
  name,
  image,
  title,
  bio,
}: {
  name: string;
  image?: string;
  title: string;
  bio: ReactNode;
}) => {
  return (
    <VStack my={10} mx={{ base: 4, md: 20, lg: 40 }}>
      <VStack>
        <Image
          fallbackSrc="https://via.placeholder.com/250"
          borderRadius="full"
          boxSize="250px"
          objectFit="cover"
          boxShadow="lg"
          src={image}
          alt={name}
        />
        <Heading fontWeight={600} fontSize="2xl">
          {name}
        </Heading>
        <Text fontWeight={600}>{title}</Text>
      </VStack>
      <Text align="center" px={4} color="gray.600">
        {bio}
      </Text>
    </VStack>
  );
};
