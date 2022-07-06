import { Flex, Link, Text, Box } from "@chakra-ui/react";

export function LoginBar() {
  return (
    <Flex w="100%" h="31px" bg="black" align="center" justify="flex-end">
      <Box mr={5}>
        <Link as="a" color="white" textDecoration="underline">
          Acesse sua conta
        </Link>
        <Text as="span" color="white" m="0 10px">
          ou
        </Text>
        <Link as="a" color="white" textDecoration="underline">
          Cadastre-se
        </Link>
      </Box>
    </Flex>
  );
}
