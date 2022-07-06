import { Button, Flex, Input } from "@chakra-ui/react";

interface InputSearchProps {
  colorBtn: "red" | "lightBlue";
}

export function InputSearch({ colorBtn }: InputSearchProps) {
  return (
    <Flex>
      <Input
        type="text"
        w="414px"
        h="44px"
        borderColor="#959595"
        _hover={{ borderColor: "#5c5c5c" }}
        focusBorderColor="black"
        borderRadius="none"
      />
      <Button
        bg={colorBtn}
        color="white"
        w="110px"
        h="44px"
        borderRadius="none"
      >
        BUSCAR
      </Button>
    </Flex>
  );
}
