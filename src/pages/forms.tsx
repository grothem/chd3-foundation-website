import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { Box, Button, Link, VStack } from "@chakra-ui/react";

export default function Forms() {
  const assistanceFormUrl =
    "https://docs.google.com/forms/d/1rI5vP7EPTsDFCuBZZ3xxL5CVXNNjaI5rj87xgbfMFes/viewform";
  const boardDocHref = "/docs/CHD3%20Board%20Member%20App.docx";

  return (
    <>
      <Head>
        <title>Forms | CHD3 Foundation</title>
        <meta name="description" content="Access CHD3 Foundation forms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <VStack spacing={6} px={{ base: 4, md: 8, lg: 16 }} py={{ base: 8, md: 12 }}>
          <Box>
            <Link href={assistanceFormUrl} isExternal _hover={{ textDecoration: "none" }}>
              <Button
                bg="primary"
                color="background"
                _hover={{ opacity: 0.9 }}
                size={{ base: "md", md: "lg" }}
                fontSize={{ base: "sm", md: "md" }}
                px={{ base: 4, md: 6 }}
                w={{ base: "100%", md: "auto" }}
                whiteSpace="normal"
                rounded="xl"
              >
                Open Assistance Application (Google Form)
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href={boardDocHref} download _hover={{ textDecoration: "none" }}>
              <Button
                bg="primary"
                color="background"
                _hover={{ opacity: 0.9 }}
                size={{ base: "md", md: "lg" }}
                fontSize={{ base: "sm", md: "md" }}
                px={{ base: 4, md: 6 }}
                w={{ base: "100%", md: "auto" }}
                whiteSpace="normal"
                rounded="xl"
              >
                Download Board Member Application (.docx)
              </Button>
            </Link>
          </Box>
        </VStack>
      </AppLayout>
    </>
  );
}


