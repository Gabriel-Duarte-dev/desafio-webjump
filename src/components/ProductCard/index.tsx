import { Flex, Box, Img, Text, Heading, Button } from "@chakra-ui/react";

export function ProductCard() {
  return (
    <Flex direction="column" align="center" w="212px">
      <Box w="100%" h="233px" mb="8px">
        <Img w="100%" h="100%" />
      </Box>
      <Text fontSize="16px" mb="24px">
        TÊNIS ADIDAS
      </Text>
      <Heading as="h3" fontSize="21px" color="darkBlue" mb="10px">
        R$299,90
      </Heading>
      <Button w="100%" bg="lightBlue" color="white">
        COMPRAR
      </Button>
    </Flex>
  );
}
