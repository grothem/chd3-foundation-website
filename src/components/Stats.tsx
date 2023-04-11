import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BeakerIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@chakra-ui/react";

export const Stats = () => {
  const fontSize = { base: "sm", md: "md" };
  return (
    <Flex
      justifyContent="space-evenly"
      width="100vw"
      py={{ base: 4, md: 6 }}
      backgroundColor="primary"
    >
      <Flex direction="column" alignItems="center">
        <Icon as={UserIcon} />
        <Text color="gray.800" fontSize={fontSize}>
          170
        </Text>
        <Text align="center" color="gray.800" fontSize={fontSize}>
          Known cases
        </Text>
      </Flex>
      {/* <Flex direction="column" alignItems="center">
        <Icon as={BeakerIcon} />
        <Text fontSize={fontSize}>100</Text>
        <Text align="center" fontSize={fontSize}>
          Research participants
        </Text>
      </Flex> */}
      <Flex direction="column" alignItems="center">
        <Icon as={UserGroupIcon} />
        <Text fontSize={fontSize}>428</Text>
        <Text align="center" fontSize={fontSize}>
          Suppport group members
        </Text>
      </Flex>
    </Flex>
  );
};
