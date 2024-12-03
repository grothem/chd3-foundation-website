import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {
  Divider,
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
        <Text
          maxWidth={{ base: "90vw", md: "75vw", lg: "50vw" }}
          px={4}
          my={8}
          color="gray.600"
        >
          The groups of Dr. Campeau (including Dr. Rousseau) and Dr. Fisher
          (including Dr. Snijders Blok) focused on CHD3 several years before the
          2018 publication when they noted that rare de novo variants in this
          gene were associated with neurodevelopmental issues. They collected
          clinical and genetic information, along with samples from individuals
          with CHD3 mutations, to better understand the effects of the
          mutations. They collaborated together and eventually with CHD3 protein
          expert Dr. Paul Wade. Justine Rousseau and Sophie Ehresmann introduced
          mutations in a piece of DNA and the in vitro assays were performed by
          Joanna Twist and Motoki Takaku in Dr. Wade&apos;s lab (with Justine
          and Sophie visiting them to learn the techniques). The efforts of
          these researchers with the critical collaboration of clinicians,
          bioinformaticians and families allowed the eventual characterization
          of the syndrome caused by impaired activity of this chromatin
          remodeler.
        </Text>

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
        <VStack my={4} mx={{ base: 4, md: 10 }}>
          <Heading fontSize="xl">For Clinicians</Heading>
          <Text align="center">
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
        <VStack my={4} mx={{ base: 4, md: 10 }}>
          <Heading fontSize="xl">For Families</Heading>
          <Text align="center">
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
        <VStack
          mt={4}
          mb={20}
          mx={{ base: 4, md: 10 }}
          maxWidth={{ base: "90vw", md: "75vw", lg: "50vw" }}
        >
          <Heading fontSize="xl" mb={4}>
            Published Research
          </Heading>
          <ResearchPlublication
            header="2017, open access"
            subText="Early research into speech and language disorders discovered a
            mutation on CHD3."
          >
            Eising, Else et al. “A set of regulatory genes co-expressed in
            embryonic human brain is implicated in disrupted speech
            development.” Molecular psychiatry vol. 24,7 (2019): 1065-1078.{" "}
            <Link
              color="primary"
              isExternal
              href="https://doi.org/10.1038/s41380-018-0020-x"
            >
              https://doi.org/10.1038/s41380-018-0020-x
            </Link>
          </ResearchPlublication>
          <Divider />
          <ResearchPlublication
            header="2018, open access"
            subText="First publication describing CHD3 as a cause of a neurodevelopmental syndrome in 35 individuals."
          >
            Snijders Blok, Lot et al. “CHD3 helicase domain mutations cause a
            neurodevelopmental syndrome with macrocephaly and impaired speech
            and language.” Nature communications vol. 9,1 4619. 5 Nov. 2018,{" "}
            <Link
              color="primary"
              isExternal
              href="https://doi.org/10.1038/s41467-018-06014-6"
            >
              https://doi.org/10.1038/s41467-018-06014-6
            </Link>
          </ResearchPlublication>
          <Divider />
          <ResearchPlublication
            header="2020, open access"
            subText="A second publication examining 24 additional individuals brings the number of patients to approximately 60 and further defines the disorder.  The syndrome was given its name between 2018 and 2020."
          >
            Drivas, T.G., Li, D., Nair, D. et al. “A second cohort of CHD3
            patients expands the molecular mechanisms known to cause Snijders
            Blok-Campeau syndrome.” Eur J Hum Genet 28, 1422–1431 (2020).{" "}
            <Link
              color="primary"
              isExternal
              href="https://doi.org/10.1038/s41431-020-0654-4"
            >
              https://doi.org/10.1038/s41431-020-0654-4
            </Link>
          </ResearchPlublication>
          <Divider />
          <ResearchPlublication
            header="2020, open access"
            subText="Case report of a 9-year-old child from Japan with severe ID, autism, joint laxity, and dysmorphisms."
          >
            Miyako Mizukami, et al. &ldquo;
            <Link
              color="primary"
              isExternal
              href="https://www.brainanddevelopment.com/article/S0387-7604(20)30328-4/fulltext"
            >
              A de novo CHD3 variant in a child with intellectual disability,
              autism, joint laxity, and dysmorphisms.
            </Link>
            &rdquo; Brain and Development, Volume 43, Issue 4, 2021, 563-565{" "}
            <Link
              color="primary"
              isExternal
              href="https://doi.org/10.1016/j.braindev.2020.12.004"
            >
              https://doi.org/10.1016/j.braindev.2020.12.004
            </Link>
          </ResearchPlublication>
          <Divider />
          {/* <ResearchPlublication
            header="2021, open access"
            subText="Discusses hypersociability as a feature of Snijders Blok-Campeau Syndrome. Open manuscript available online. PDF version through patient request or purchase."
          >
            Coursimault, Juliette et al. &ldquo;
            <Link
              color="primary"
              isExternal
              href="https://www.sciencedirect.com/science/article/abs/pii/S176972122100032X?via%3Dihub"
            >
              Hypersociability associated with developmental delay, macrocephaly
              and facial dysmorphism points to CHD3 mutations.
            </Link>
            &rdquo; European Journal of Medical Genetics vol. 64,4 (2021):
            104166
          </ResearchPlublication>
          <Divider /> */}
          <ResearchPlublication
            header="2021, open access"
            subText="Case study of a 14 month old girl from China. Note: full text is in Chinese."
          >
            Fan, Xi-Yong. &ldquo;
            <Link
              color="primary"
              isExternal
              href="https://pubmed.ncbi.nlm.nih.gov/34535214/"
            >
              Snijders Blok-Campeau syndrome caused by CHD3 gene mutation: a
              case report.
            </Link>
            &rdquo; &ldquo;CHD3基因突变致Snijders
            Blok-Campeau综合征1例报告.&rdquo; Zhongguo dang dai er ke za zhi =
            Chinese journal of contemporary pediatrics vol. 23,9 (2021):
            965-968. doi:10.7499/j.issn.1008-8830.2106091
          </ResearchPlublication>
          <Divider />
          <ResearchPlublication
            header="2022, paid access"
            subText="Describes a young CHD3 female with central precocious puberty."
          >
            LeBreton, L. et al. &ldquo;
            <Link
              color="primary"
              isExternal
              href="https://onlinelibrary.wiley.com/doi/10.1002/ajmg.a.63096"
            >
              A novel CHD3 variant in a patient with central precocious puberty:
              Expanded phenotype of Snijders Blok-Campeau syndrome?
            </Link>
            &rdquo; American Journal of Medical Genetics Part A, 191A: 1065–
            069.
          </ResearchPlublication>
          <Divider />
          <ResearchPlublication
            header="2022, paid access"
            subText="Examines 21 families with inherited CHD3 showing variable expressivity of the syndrome."
          >
            van der Spek, Jet et al. &ldquo;
            <Link
              color="primary"
              isExternal
              href="https://pubmed.ncbi.nlm.nih.gov/35346573/"
            >
              Inherited variants in CHD3 show variable expressivity in Snijders
              Blok-Campeau syndrome.
            </Link>
            &rdquo; Genetics in medicine : official journal of the American
            College of Medical Genetics vol. 24,6 (2022): 1283-1296.
            doi:10.1016/j.gim.2022.02.014
          </ResearchPlublication>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}

const ResearchPlublication = ({
  header,
  subText,
  children,
}: {
  header: string;
  subText: string;
  children: React.ReactNode;
}) => {
  return (
    <VStack py={3}>
      <Text as="b" align="center">
        {header}
      </Text>
      <Text>{children}</Text>
      <br />
      <Text as="i">{subText}</Text>
    </VStack>
  );
};
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
            More information can be obtained by visiting{" "}
            <Link isExternal href="https://www.pcampeaulab.org">
              www.pcampeaulab.org
            </Link>
            .
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
