import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {
  Box,
  Heading,
  Image,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Research() {
  return (
    <>
      <Header />
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
        <CampeauBio />
        <FishBio />
        <VStack my={4}>
          <Heading fontSize="xl">Associated Sites</Heading>
          <VStack mt={2}>
            <Link
              color="primary"
              isExternal
              href="https://www.mpi.nl/people/fisher-simon-e"
            >
              https://www.mpi.nl/people/fisher-simon-e
            </Link>
            <Link
              color="primary"
              isExternal
              href="https://irp.nih.gov/pi/paul-wade"
            >
              https://irp.nih.gov/pi/paul-wade
            </Link>
            <Link color="primary" isExternal href="https://twitter.com/Lot_SB">
              https://twitter.com/Lot_SB
            </Link>
          </VStack>
        </VStack>
        <VStack my={4}>
          <Heading fontSize="xl">For Clinicians</Heading>
          <Text align="center" mx={{ base: 4, md: 10 }}>
            <Text>
              We are collecting information from physicians on additional
              patients here:{" "}
              <Link
                color="primary"
                isExternal
                href="https://humandiseasegenes.nl/chd3/"
              >
                https://humandiseasegenes.nl/chd3/
              </Link>
            </Text>
            <br />
            <Text>
              We are also collecting DNA or blood for episignatures with Dr.
              Rosanna Weksberg.
            </Text>
          </Text>
        </VStack>
        <VStack mt={4} mb={20}>
          <Heading fontSize="xl">For Families</Heading>
          <Text align="center" mx={{ base: 4, md: 10 }}>
            <Text>
              We are conducting neurodevelopmental questionnaires with parents
              here:{" "}
              <Link
                color="primary"
                isExternal
                href="https://is.gd/neurodevelopmentalstudy"
              >
                https://is.gd/neurodevelopmentalstudy
              </Link>
            </Text>
            <br />
            <Text>
              Abnormal pain sensitivity questionnaire study with Kimberly Lobo (
              <a href="mailto:Kimberly.Lobo@childrens.harvard.edu">
                Kimberly.Lobo@childrens.harvard.edu
              </a>
              )
            </Text>
            <br />
            <Text>
              EEGs with auditory stimulation and high-resolution MRIs if the
              family can cover their travel to Montreal (
              <a href="mailto:khadije.jizi.hsj@ssss.gouv.qc.ca">
                khadije.jizi.hsj@ssss.gouv.qc.ca
              </a>
              ).
            </Text>
          </Text>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}

const CampeauBio = () => {
  return (
    <BioTemplate
      name="Dr. Campeau"
      image="bio/campeau.jpg"
      bio={
        <>
          <Text>
            Dr. Campeau studied medicine at Laval University, specialized in
            medical genetics at McGill University and completed a postdoctoral
            fellowship at the Baylor College of Medicine. He now practices
            clinical genetics at the Sainte-Justine Hospital and the Shriners
            Hospital for Children in Montreal. His research lab studies
            epigenetic diseases, epilepsy, and skeletal dysplasias. They
            identify disease-causing genes, decipher disease pathophysiology,
            and improve the management of children affected by these conditions.
            More information can be obtained by visiting www.pcampeaulab.org .
          </Text>
          <br />
          <Text>
            The groups of Dr Campeau (including Dr Rousseau) and Dr Fisher
            (including Dr Snijders Blok) focused on CHD3 several years before
            the 2018 publication when they noted that rare de novo variants in
            this gene were associated with neurodevelopmental issues. They
            collected clinical and genetic information, along with samples from
            individuals with CHD3 mutations, to better understand the effects of
            the mutations. They collaborated together and eventually with CHD3
            protein expert Dr Paul Wade. Justine Rousseau and Sophie Ehresmann
            introduced mutations in a piece of DNA and the in vitro assays were
            performed by Joanna Twist and Motoki Takaku in Dr Wade&apos;s lab
            (with Justine and Sophie visiting them to learn the techniques). The
            efforts of these researchers with the critical collaboration of
            clinicians, bioinformaticians and families allowed the eventual
            characterization of the syndrome caused by impaired activity of this
            chromatin remodeler.
          </Text>
        </>
      }
    />
  );
};
const FishBio = () => {
  return (
    <BioTemplate
      name="Simon Fisher"
      image="bio/fisher.jpg"
      bio={
        <Text>
          Simon Fisher is a director of the Max Planck Institute for
          Psycholinguistics and Professor of Language and Genetics at the
          Donders Institute for Brain, Cognition and Behaviour, in Nijmegen, the
          Netherlands. He has a Natural Sciences degree from Cambridge
          University, and a doctorate in Human Genetics from Oxford University,
          UK. From 2002-2010 he held a Royal Society University Research
          Fellowship, leading a group at the Wellcome Trust Centre for Human
          Genetics in Oxford, before being recruited to a directorship at the
          Max Planck Institute in Nijmegen. There he heads a department
          investigating neurogenetic pathways involved in key aspects of human
          cognition and behaviour, especially speech, language, and reading. His
          team identifies rare gene disruptions that cause relevant
          neurodevelopmental disorders, and characterizes their functional
          impacts in model systems, including brain organoids grown in the lab.
          In parallel, they study contributions of common DNA variation to
          individual differences in cognitive, behavioural, and
          neuroimaging-based traits via large-scale genome screens.
        </Text>
      }
    />
  );
};
const BioTemplate = ({
  name,
  image,
  bio,
}: {
  name: string;
  image?: string;
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
      </VStack>
      <Text
        maxWidth={{ base: "90vw", md: "75vw", lg: "50vw" }}
        align="center"
        px={4}
        color="gray.600"
      >
        {bio}
      </Text>
    </VStack>
  );
};
