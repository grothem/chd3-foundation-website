import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const customTheme = extendTheme({
  colors: {
    primary: "#5C6BC0", // lighter shade of blue
    secondary: "#FFC107", // warm shade of yellow
    background: "#E0E0E0", // medium-light gray
    backgroundLight: "#F5F5F5", // light gray
    backgroundDark: "#CCCCCC", // medium-dark gray
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
