import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Flex, Spacer } from "@chakra-ui/react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      background="backgroundLight"
    >
      <Header />
      {children}
      <Spacer />
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
};
