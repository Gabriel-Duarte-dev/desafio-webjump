import { Flex, Box, List, ListItem } from "@chakra-ui/react";
import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";

const menuItens = [
  "PÁGINA INICIAL",
  "CAMISETAS",
  "CALÇAS",
  "SAPATOS",
  "CONTATO",
];

export function Header() {
  return (
    <Flex as="header" w="100%" direction="column" align="center">
      <Flex
        as="section"
        w="100%"
        maxW={{ sm: "320px", md: "768", lg: "1024px", xl: "1440px" }}
        h="180px"
        bg="white"
        justify="space-between"
        align="center"
        gap={4}
      >
        <Logo subtitle={false} />
        <InputSearch colorBtn="red" />
      </Flex>
      <Flex w="100%" h="54px" bg="red" align="center" justify="center">
        <Box
          as="nav"
          maxW={{ sm: "320px", md: "768", lg: "1024px", xl: "1440px" }}
          w="100%"
        >
          <List
            as="ul"
            display="flex"
            alignItems="center"
            gap={20}
            listStyleType="none"
          >
            {menuItens.map((item, index) => (
              <ListItem
                key={index}
                as="li"
                color="white"
                fontWeight="bold"
                cursor="pointer"
                transition="0.3s"
                _hover={{ transform: "scale(1.1)" }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </Flex>
  );
}
