"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "@/themes/theme";
import { AuthProvider } from "@/context/AuthContext";

const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
