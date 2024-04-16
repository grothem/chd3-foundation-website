import {
  Container,
  Box,
  Image,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { ReactNode } from "react";
import {
  FaFacebook,
  FaShoppingCart,
  FaEnvelope,
  FaDonate,
} from "react-icons/fa";

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
              <FaDonate />
              <Link isExternal href="https://givebutter.com/hCoJWE">
                Donations
              </Link>
            </Stack>
            <Stack direction="row" align="center">
              <FaShoppingCart />
              <Link
                isExternal
                href="https://chd3-foundation-store.printify.me/products"
              >
                Store
              </Link>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact us</ListHeader>
            <Stack direction="row" align="center">
              <FaEnvelope />
              <a href="mailto:chd3foundation@gmail.com">
                chd3foundation@gmail.com
              </a>
            </Stack>
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
              <Image boxSize="50px" src="/kite.png" alt="Kite" />
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
