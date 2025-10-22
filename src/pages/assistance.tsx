import Head from "next/head";
import { AppLayout } from "@/layout/AppLayout";
import { Box, Link, VStack } from "@chakra-ui/react";

export default function Assistance() {
  const embedUrl =
    "https://docs.google.com/forms/d/1rI5vP7EPTsDFCuBZZ3xxL5CVXNNjaI5rj87xgbfMFes/viewform?embedded=true";
  const directUrl =
    "https://docs.google.com/forms/d/1rI5vP7EPTsDFCuBZZ3xxL5CVXNNjaI5rj87xgbfMFes/viewform";

  return (
    <>
      <Head>
        <title>Assistance Application | CHD3 Foundation</title>
        <meta
          name="description"
          content="Submit your assistance application to the CHD3 Foundation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <VStack spacing={4} px={{ base: 4, md: 8, lg: 16 }} py={{ base: 6, md: 8 }}>
          <Box>
            <Link
              color="primary"
              href="https://docs.google.com/document/d/18Ib2fYblscQqXL3fv2V2OAgdLAz2uMBA/edit"
              isExternal
            >
              Application guidelines
            </Link>
          </Box>
          <Box
            as="iframe"
            src={embedUrl}
            width="100%"
            height="50vh"
            style={{ border: 0 }}
          />
          <Box>
            <Link color="primary" href={directUrl} isExternal>
              Open the form in a new tab
            </Link>
          </Box>
        </VStack>
      </AppLayout>
    </>
  );
}


