import {
  Box,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";

export function Home() {
  return (
    <Layout>
      <GridItem display={{ sm: "none", md: "inherit" }} as="nav" area="nav">
        <UnorderedList
          bg="#E2DEDC"
          padding={4}
          pl={8}
          w="100%"
          height={{ sm: 0, md: "357px", lg: "483px", xl: "507px" }}
        >
          <ListItem>Página Inicial</ListItem>
          <ListItem>Camisetas</ListItem>
          <ListItem>Calças</ListItem>
          <ListItem>Sapatos</ListItem>
          <ListItem>Contato</ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem as="main" area="main">
        <VStack>
          <Box
            w="100%"
            h={{ sm: "86px", md: "165px", lg: "223px", xl: "281px" }}
            bg="#ACACAC"
          />
          <Box>
            <Text as="h3" fontSize="26px">
              Seja bem-vindo!
            </Text>
            <Text as="p" fontSize="16px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </Text>
          </Box>
        </VStack>
      </GridItem>
      <GridItem as="footer" area="footer">
        <Box
          bg="red"
          w="100%"
          h="178px"
          mt={{ sm: 8, md: 0 }}
          mb={{ sm: 8, md: 0 }}
        />
      </GridItem>
    </Layout>
  );
}
