import {
  Flex,
  Box,
  List,
  ListItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Sidebar } from "../Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenu } from "../../hooks/useMenu";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { menu, isLoading, isError } = useMenu();

  return (
    <Flex as="header" w="100%" direction="column" align="center">
      <Flex
        as="section"
        w="100%"
        maxW={{ sm: "320px", md: "768", lg: "1024px", xl: "1440px" }}
        h="180px"
        bg="white"
        justify={{ sm: "center", md: "space-between" }}
        align="center"
        gap={4}
        padding={4}
      >
        <Box display={{ md: "none" }}>
          <GiHamburgerMenu size={32} cursor="pointer" onClick={onOpen} />
        </Box>
        {menu && (
          <Sidebar isOpen={isOpen} onClose={onClose} menuItens={menu?.items} />
        )}
        <Logo subtitle={false} />
        <InputSearch />
      </Flex>
      <Flex
        display={{ sm: "none", md: "flex" }}
        w="100%"
        h="54px"
        bg="red"
        align="center"
        justify="center"
      >
        {menu && <Menu menuItens={menu?.items} />}
      </Flex>
    </Flex>
  );
}
