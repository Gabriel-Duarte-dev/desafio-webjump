import { Flex, GridItem, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Boxfilter } from "../../components/Boxfilter";
import { Catalogo } from "../../components/Catalogo";
import { Layout } from "../../components/Layout";

export function Produtos() {
  const { product } = useParams();

  return (
    <Layout category>
      <GridItem as="nav" area="nav">
        <Boxfilter category={product ?? ""} />
      </GridItem>
      <GridItem as="main" area="main">
        <Catalogo title={product ?? ""} />
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
