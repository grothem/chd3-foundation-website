import {
  Container,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { ReactNode } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaPaypal } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    label: "CHD3 Foundation",
    href: "https://www.facebook.com/profile.php?id=100090494154041",
  },
  {
    label: "Family Support Group",
    href: "https://www.facebook.com/groups/1742254126095885",
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="backgroundDark" color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Stack key={link.label} direction="row" align="center">
                <FaFacebook />
                <Link href={link.href} isExternal>
                  {link.label}
                </Link>
              </Stack>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support us</ListHeader>
            <Stack direction="row" align="center">
              <FaPaypal />
              <Link
                isExternal
                href="https://www.paypal.com/donate/?hosted_button_id=EPJTXCFF2LBSY"
              >
                Pay Pal
              </Link>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact us</ListHeader>
            <a href="mailto:chd3foundation@gmail.com">
              chd3foundation@gmail.com
            </a>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <NextLink href={"/"} passHref>
            <Link>
              <Icon as={HeartIcon} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          Created by the CHD3 Foundation
        </Text>
      </Box>
    </Box>
  );
};
