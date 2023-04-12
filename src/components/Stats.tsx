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
      boxShadow="lg"
    >
      <Flex color="background" direction="column" alignItems="center">
        <Icon mb={2} as={UserIcon} />
        <Text fontSize={fontSize}>170</Text>
        <Text align="center" fontSize={fontSize}>
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
      <Flex color="background" direction="column" alignItems="center">
        <Icon mb={2} as={UserGroupIcon} />
        <Text fontSize={fontSize}>428</Text>
        <Text align="center" fontSize={fontSize}>
          Suppport group members
        </Text>
      </Flex>
    </Flex>
  );
};
