import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Stats } from "./Stats";

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
          Approximately 60 individuals worldwide have been diagnosed with this
          disorder. Common traits are intellectual disability, developmental
          delays, hypotonia, impaired speech and language, and characteristic
          facial features. Many children have feeding difficulties, and sitting,
          standing, and walking are often delayed.
        </Text>
      </VStack>
      <Box my={6}>
        <Stats />
      </Box>
    </Box>
  );
};
