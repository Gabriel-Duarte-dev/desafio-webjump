import { Grid, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";
import { LoginBar } from "../LoginBar";

interface LayoutProps {
  children: ReactNode;
  category?: true;
}

export function Layout({ children, category }: LayoutProps) {
  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <LoginBar />
      <Header />
      <Grid
        mt={8}
        mb={8}
        templateAreas={
          category
            ? {
                sm: `
          "nav nav"
          "main main"
          "footer footer"`,
                md: `
          "nav main"
          "footer footer"`,
              }
            : `
        "nav main"
        "footer footer"`
        }
        gridTemplateRows={
          category
            ? { sm: "auto auto auto", md: "auto" }
            : {
                md: "auto",
                lg: "auto",
                xl: "auto",
              }
        }
        gridTemplateColumns={
          category
            ? {
                sm: "100%",
                md: "207px auto",
                lg: "226px auto",
                xl: "261px auto",
              }
            : {
                md: "153px auto",
                lg: "207px auto",
                xl: "261px auto",
              }
        }
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
