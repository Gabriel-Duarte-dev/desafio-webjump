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

export const menuItens = [
  {
    path: "/",
    label: "PÁGINA INICIAL",
  },
  {
    path: "/catalogo/camisetas",
    label: "CAMISETAS",
  },
  {
    path: "/catalogo/calças",
    label: "CALÇAS",
  },
  {
    path: "/catalogo/sapatos",
    label: "SAPATOS",
  },
  {
    path: "/catalogo/contato",
    label: "CONTATO",
  },
];

export type MenuItensType = keyof typeof menuItens;

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <IconButton
          display={{ sm: "inherit", md: "none" }}
          aria-label=""
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
        />
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Logo subtitle={false} />
        <InputSearch colorBtn="red" />
      </Flex>
      <Flex
        display={{ sm: "none", md: "flex" }}
        w="100%"
        h="54px"
        bg="red"
        align="center"
        justify="center"
      >
        <Menu />
      </Flex>
    </Flex>
  );
}
