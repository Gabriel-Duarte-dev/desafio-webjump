import { Grid, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { LoginBar } from "../LoginBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <LoginBar />
      <Header />
      <Grid
        mt={8}
        mb={8}
        templateAreas={`
                    "nav main"
                    "footer footer"`}
        gridTemplateRows={{
          md: "auto",
          lg: "auto",
          xl: "auto",
        }}
        gridTemplateColumns={{
          md: "153px auto",
          lg: "207px auto",
          xl: "261px auto",
        }}
        gap={{ sm: 0, md: "8" }}
        w="100%"
        maxW={{ sm: "320px", md: "768px", lg: "1024px", xl: "1440px" }}
        h="100%"
        padding={4}
      >
        {children}
      </Grid>
    </Flex>
  );
}
