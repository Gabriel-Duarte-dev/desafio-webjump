import { Flex, Heading, ListItem, UnorderedList, Box } from "@chakra-ui/react";

export function Boxfilter() {
  return (
    <Flex
      direction="column"
      padding={4}
      borderWidth="1px"
      borderColor="gray.200"
      w="100%"
      height="474px"
    >
      <Heading as="h3" fontSize="24px" color="red" mb="14px">
        FILTRE POR
      </Heading>
      <Heading as="h4" fontSize="18px" color="darkBlue" mb="11px">
        CATEGORIAS
      </Heading>
      <UnorderedList mb="38px">
        <ListItem fontSize="16px">Roupas</ListItem>
        <ListItem fontSize="16px">Sapatos</ListItem>
        <ListItem fontSize="16px">Acessórios</ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize="18px" color="darkBlue" mb="11px">
        CORES
      </Heading>
      <Flex gap={2} mb="32px">
        <Box bg="red" w="48px" h="24px" />
        <Box bg="orange" w="48px" h="24px" />
        <Box bg="lightBlue" w="48px" h="24px" />
      </Flex>
      <Heading as="h4" fontSize="18px" color="darkBlue" mb="11px">
        TIPO
      </Heading>
      <UnorderedList>
        <ListItem fontSize="16px">Corrida</ListItem>
        <ListItem fontSize="16px">Caminhada</ListItem>
        <ListItem fontSize="16px">Casual</ListItem>
        <ListItem fontSize="16px">Social</ListItem>
      </UnorderedList>
    </Flex>
  );
}
