import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Main = () => {
  return (
    <Box as="section" bgGradient={{ base: "linear(to-b, white, gray.50)", md: "linear(to-b, white, gray.50)" }} py={{ base: 8, md: 12 }}>
      <VStack margin={4} p={6} spacing={3} textAlign="center">
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="extrabold" color="primary">
          What is Snijders Blok-Campeau Syndrome?
        </Heading>
        <Text color="gray.600" maxWidth={{ base: "90vw", md: "75vw" }} mx="auto" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
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

interface StatTileProps {
  value: string;
  label: string;
}

function StatTile({ value, label }: StatTileProps) {
  return (
    <Box
      p={{ base: 5, md: 6 }}
      bg="background"
      borderWidth="1px"
      borderColor="gray.200"
      rounded="2xl"
      boxShadow="sm"
      textAlign="center"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
    >
      <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight="extrabold" color="primary" lineHeight="1">
        {value}
      </Text>
      <Text mt={2} fontSize={{ base: "sm", md: "md" }} color="gray.600">
        {label}
      </Text>
    </Box>
  );
}

export default function Statistics() {
  return (
    <Box mb={8} px={{ base: 8, md: 24, lg: 32 }} pt={5} maxW={{ base: "container.md", lg: "container.xl" }} mx="auto">
      <SimpleGrid
        alignContent={"center"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, lg: 6 }}
      >
        <StatTile value={"237"} label={"Known cases (approx.)"} />
        <StatTile value={"787"} label={"Support group members"} />
      </SimpleGrid>
    </Box>
  );
}
