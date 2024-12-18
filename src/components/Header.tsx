import { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { CHD3Icon } from "./CHD3Icon";
import { HeartIcon } from "@heroicons/react/24/outline";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": any;
    }
  }
}

const Links = [
  { name: "Home", href: "" },
  { name: "About Us", href: "about" },
  { name: "Research", href: "research" },
];

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/" + href}
  >
    {children}
  </Link>
);

const StoreLink = () => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href="https://chd3-foundation-store.printify.me/products"
    isExternal
  >
    <Flex>
      <Center>
        Store <ExternalLinkIcon mx="4px" />
      </Center>
    </Flex>
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={4}
      bg="backgroundDark"
      height={{ base: "150px", md: "175px" }}
      position="relative"
    >
      <Box position="absolute">
        <Link href={"/"}>
          <CHD3Icon
            mt={-3}
            ml={{ base: 0, md: 10, lg: 10 }}
            height={{ base: "170px", md: "180px", lg: "200px" }}
            width={{ base: "250px", md: "290px", lg: "330px" }}
          />
        </Link>
      </Box>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Spacer />
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            <StoreLink />
          </HStack>
        </HStack>
        {/* <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex> */}
      </Flex>
      <Flex justifyContent="end" mt={3}>
        <givebutter-widget id="gO0drp"></givebutter-widget>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Flex justifyContent="end">
            <Stack
              as={"nav"}
              spacing={4}
              background="backgroundLight"
              zIndex={100}
              borderRadius="md"
              border="1px"
              borderColor="backgroundDark"
            >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
              <StoreLink />
            </Stack>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
}
