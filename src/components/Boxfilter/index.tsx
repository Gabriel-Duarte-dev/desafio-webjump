import { Flex, Heading, ListItem, UnorderedList, Box } from "@chakra-ui/react";
import { Colorfilter } from "../Colorfilter";
import { ListItemFilter } from "../ListItemFilter";

interface BoxfilterProps {
  category: string;
}

export function Boxfilter({ category }: BoxfilterProps) {
  return (
    <Flex
      direction="column"
      padding={4}
      borderWidth="1px"
      borderColor="gray.200"
      w="100%"
      minH="474px"
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
      <Flex gap={2} mb="32px" wrap="wrap">
        {category == "camisetas" ? (
          <>
            <Colorfilter bg="black" color="Preta" />
            <Colorfilter bg="orange" color="Laranja" />
            <Colorfilter bg="yellow" color="Amarela" />
            <Colorfilter bg="pink.100" color="Rosa" />
          </>
        ) : category == "calcas" ? (
          <>
            <Colorfilter bg="#ab814d" color="Bege" />
            <Colorfilter bg="gray" color="Cinza" />
            <Colorfilter bg="black" color="Preta" />
          </>
        ) : (
          <>
            <Colorfilter bg="black" color="Preta" />
            <Colorfilter bg="gray" color="Cinza" />
            <Colorfilter bg="blue" color="Azul" />
            <Colorfilter bg="pink.100" color="Rosa" />
            <Colorfilter bg="beige" color="Bege" />
          </>
        )}
      </Flex>
      <Heading as="h4" fontSize="18px" color="darkBlue" mb="11px">
        TIPO
      </Heading>
      <UnorderedList>
        <ListItemFilter text="Corrida" />
        <ListItemFilter text="Caminhada" />
        <ListItemFilter text="Casual" />
        <ListItemFilter text="Social" />
      </UnorderedList>
    </Flex>
  );
}
