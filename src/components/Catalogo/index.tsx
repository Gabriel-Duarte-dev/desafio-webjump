import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { GoListUnordered } from "react-icons/go";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { ProductCard } from "../ProductCard";
import { useEffect, useMemo, useState } from "react";
import { useCategory } from "../../hooks/useCategory";
import { useFilter } from "../../Context/filter";
import { motion } from "framer-motion";

interface CatalogoProps {
  title: string;
}

export function Catalogo({ title }: CatalogoProps) {
  const [order, setOrder] = useState<"grid" | "list">("grid");
  const { filterByColor, filterByType } = useFilter();
  const { category, isLoading, isError, refetch } = useCategory(
    title == "camisetas" ? 1 : title == "calcas" ? 2 : 3
  );

  const MotionSimpleGrid = motion(SimpleGrid);

  useEffect(() => {
    refetch();
  }, [title]);

  const renderCategory = useMemo(() => {
    if (category) {
      if (filterByColor.length > 1 || filterByType.length > 1) {
        return category.items.filter((product) => {
          return (
            filterByColor.includes(product.filter[0].color) ||
            filterByType.includes(product.filter[0].type)
          );
        });
      }
    }

    return category?.items ?? [];
  }, [category, filterByColor, filterByType]);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="md" color="lightBlue" />
      </Center>
    );
  }

  return (
    <Box>
      <Heading
        as="h1"
        fontSize="32px"
        color="red"
        mb="5px"
        mt={{ sm: 4, md: 0 }}
        textTransform="capitalize"
        fontWeight={400}
      >
        {title == "calcas"
          ? "Calças"
          : title == "calcados"
          ? "Calçados"
          : title}
      </Heading>
      <Flex
        justify={{ sm: "center", md: "space-between" }}
        align="center"
        padding="2px 0"
        borderTopWidth={{ sm: "none", md: "1px" }}
        borderBottomWidth={{ sm: "none", md: "1px" }}
        borderColor={{ sm: "none", md: "gray.300" }}
        mb="45px"
      >
        <HStack display={{ sm: "none", md: "inherit" }}>
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
          <Select size="xs" w={{ sm: "199px", md: "216px" }} borderRadius="5px">
            <option value="maior">Maior preço</option>
            <option value="menor">Menor preço</option>
          </Select>
        </HStack>
      </Flex>
      <MotionSimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap="24px" layout>
        {renderCategory?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </MotionSimpleGrid>
    </Box>
  );
}
