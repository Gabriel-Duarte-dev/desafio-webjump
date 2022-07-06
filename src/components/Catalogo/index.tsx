import {
  Box,
  Flex,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GoListUnordered } from "react-icons/go";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

interface CatalogoProps {
  title: string;
}

export function Catalogo({ title }: CatalogoProps) {
  const [order, setOrder] = useState<"grid" | "list">("grid");
  return (
    <Box>
      <Heading
        as="h1"
        fontSize="32px"
        color="red"
        mb="5px"
        textTransform="capitalize"
        fontWeight={400}
      >
        {title}
      </Heading>
      <Flex
        justify="space-between"
        align="center"
        padding="2px 0"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="gray.300"
        mb="45px"
      >
        <HStack>
          <BsGrid3X3GapFill
            cursor="pointer"
            color={order == "grid" ? "#00A8A9" : "#CB0D1F"}
            onClick={() => setOrder("grid")}
          />
          <GoListUnordered
            cursor="pointer"
            color={order == "grid" ? "#CB0D1F" : "#00A8A9"}
            onClick={() => setOrder("list")}
          />
        </HStack>

        <HStack>
          <Text as="span" fontSize="11px">
            ORDENAR POR
          </Text>
          <Select size="xs" w="216px" borderRadius="5px">
            <option value="maior">Maior preço</option>
            <option value="menor">Menor preço</option>
          </Select>
        </HStack>
      </Flex>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4 }}
        spacingX="35px"
        spacingY="20px"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
    </Box>
  );
}
