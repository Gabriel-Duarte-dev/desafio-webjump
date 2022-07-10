import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFilter } from "../../Context/filter";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { handleFilterByInput } = useFilter();
  const [search, setSearch] = useState("");

  const handleFilter = () => {
    handleFilterByInput(search);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} mt={4} p={2}>
          <Center>
            <Input
              type="text"
              w="414px"
              h="44px"
              borderColor="#959595"
              _hover={{ borderColor: "#5c5c5c" }}
              focusBorderColor="black"
              borderRadius="none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Center>
        </ModalBody>

        <ModalFooter p={2}>
          <Button
            type="submit"
            bg="red"
            _hover={{ bg: "redHover" }}
            _active={{ bg: "redHover" }}
            color="white"
            w="110px"
            h="44px"
            borderRadius="none"
            onClick={handleFilter}
          >
            BUSCAR
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
