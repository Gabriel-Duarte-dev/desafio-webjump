import {
  Button,
  Flex,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useFilter } from "../../Context/filter";
import { SearchModal } from "../SearchModal";

export function InputSearch() {
  const [value, setValue] = useState("");
  const { handleFilterByInput } = useFilter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFilterByInput(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex display={{ sm: "none", md: "flex" }} align="center">
          <Input
            type="text"
            w="414px"
            h="44px"
            borderColor="#959595"
            _hover={{ borderColor: "#5c5c5c" }}
            focusBorderColor="black"
            borderRadius="none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            type="submit"
            bg="red"
            _hover={{ bg: "redHover" }}
            _active={{ bg: "redHover" }}
            color="white"
            w="110px"
            h="44px"
            borderRadius="none"
          >
            BUSCAR
          </Button>
        </Flex>
      </form>
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
        onClick={onOpen}
      />
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
