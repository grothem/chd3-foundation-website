import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { Box, Button, VStack } from "@chakra-ui/react";

export default function BoardApplication() {
  const docHref = "/docs/CHD3%20Board%20Member%20App.docx";

  return (
    <>
      <Head>
        <title>Board Member Application | CHD3 Foundation</title>
        <meta
          name="description"
          content="Download the CHD3 Foundation Board Member Application (.docx)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <VStack spacing={6} px={{ base: 4, md: 8, lg: 16 }} py={{ base: 8, md: 12 }}>
          <Box>
            <Button
              as="a"
              href={docHref}
              download
              bg="primary"
              color="background"
              _hover={{ opacity: 0.9, textDecoration: "none" }}
              size="lg"
              rounded="xl"
            >
              Download Board Member Application (.docx)
            </Button>
          </Box>
        </VStack>
      </AppLayout>
    </>
  );
}


