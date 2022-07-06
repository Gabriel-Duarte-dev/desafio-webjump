import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface InputSearchProps {
  colorBtn: "red" | "lightBlue";
}

export function InputSearch({ colorBtn }: InputSearchProps) {
  return (
    <>
      <Flex display={{ sm: "none", md: "flex" }}>
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
      <IconButton
        display={{ sm: "inherit", md: "none" }}
        aria-label=""
        icon={<BsSearch />}
        bg="none"
        _hover={{ bg: "red", color: "white" }}
        _active={{ bg: "red", borderWidth: "2px" }}
        borderWidth="1px"
        borderColor="red"
        color="red"
      />
    </>
  );
}
