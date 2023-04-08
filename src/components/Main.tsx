import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Stats } from "./Stats";

export const Main = () => {
  return (
    <Box>
      <Flex margin={4} p={6} boxShadow="md" rounded="lg">
        <Text color="gray.600">
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
      </Flex>
      <Stats />
    </Box>
  );
};
