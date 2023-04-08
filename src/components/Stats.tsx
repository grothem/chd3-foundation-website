import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BeakerIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@chakra-ui/react";

export const Stats = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      width="100vw"
      py={5}
      backgroundColor="primary"
    >
      <Flex
        direction="column"
        alignItems="center"
        borderRadius={100}
        borderColor="red"
      >
        <Icon as={UserIcon} />
        <Text color="gray.800">100</Text>
        <Text color="gray.800">Known cases</Text>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        borderRadius={100}
        borderColor="red"
      >
        <Icon as={BeakerIcon} />
        <Text>100</Text>
        <Text>Research participants</Text>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        borderRadius={100}
        borderColor="red"
      >
        <Icon as={UserGroupIcon} />
        <Text>100</Text>
        <Text>Suppport group members</Text>
      </Flex>
    </Flex>
  );
};
