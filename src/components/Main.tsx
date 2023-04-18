import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";

export const Main = () => {
  return (
    <Box>
      <VStack margin={4} p={6}>
        <Heading fontSize="2xl">
          What is Snijders Blok-Campeau Syndrome?
        </Heading>
        <Text color="gray.600" maxWidth={{ base: "90vw", md: "75vw" }}>
          Snijders Blok-Campeau Syndrome is a rare neurodevelopmental disorder
          caused by mutations in the CHD3 gene, which has an important role
          during early brain development. This gene makes a protein that is
          believed to regulate the function of other genes in the developing
          brain, all of which work together to ensure that brain cells move into
          their correct positions at the right time. Even small changes in CHD3
          can disrupt that process, resulting in abnormal brain development and
          creating a variety of conditions that affect other parts of the body.
          Common traits are intellectual disability, developmental delays,
          hypotonia, impaired speech and language, and characteristic facial
          features. Many children have feeding difficulties, and sitting,
          standing, and walking are often delayed.
        </Text>
      </VStack>
      <Statistics />
    </Box>
  );
};

interface StatsCardProps {
  title: string;
  stat: string;
  icon: React.ReactNode;
}

function StatsCard({ title, stat, icon }: StatsCardProps) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      background="primary"
      color="background"
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
      <Box position="absolute" right={0} bottom={0} mr={4}>
        {icon}
      </Box>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box mb={8} px={{ base: 8, md: 24, lg: 32 }} pt={5}>
      <SimpleGrid
        alignContent={"center"}
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard
          title={"Approximately"}
          stat={"170 known cases"}
          icon={<Icon boxSize={{ base: 6, md: 8 }} mb={2} as={UserIcon} />}
        />
        <StatsCard
          title={"And"}
          stat={"430 support group members"}
          icon={<Icon boxSize={{ base: 6, md: 8 }} mb={2} as={UserGroupIcon} />}
        />
      </SimpleGrid>
    </Box>
  );
}
