import {
  Flex,
  Box,
  Img,
  Text,
  Heading,
  Button,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CategoryItemDTO } from "../../services/categories";

interface ProductCardProps {
  product: CategoryItemDTO;
}

export function ProductCard({ product }: ProductCardProps) {
  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      direction="column"
      align="center"
      justify="space-between"
      w={{ sm: "133px", md: "150px", lg: "163px", xl: "212px" }}
      wordBreak="break-word"
      textAlign="center"
      layout
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <Box w="100%" mb="24px">
        <Box
          w="100%"
          h={{ sm: "146px", md: "165px", lg: "179px", xl: "233px" }}
          borderWidth="1px"
          borderColor="gray.200"
          mb="8px"
        >
          <Img w="100%" h="100%" src={product.image} alt={product.name} />
        </Box>
        <Text fontSize="16px">{product.name}</Text>
      </Box>
      <Box w="100%">
        {product.specialPrice ? (
          <Stack
            direction={{ sm: "column", lg: "row" }}
            justify="center"
            wrap="wrap"
            mb="10px"
          >
            <Text
              fontSize="15px"
              color="gray.400"
              textDecoration="line-through"
            >
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
            <Heading as="h3" fontSize="21px" color="red">
              {product.specialPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Heading>
          </Stack>
        ) : (
          <Heading as="h3" fontSize="21px" color="red" mb="10px">
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Heading>
        )}
        <Button
          display={{ sm: "none", md: "inherit" }}
          w="100%"
          bg="lightBlue"
          _hover={{ bg: "lightBlueHover" }}
          _active={{
            bg: "lightBlueActive",
          }}
          color="white"
        >
          COMPRAR
        </Button>
      </Box>
    </MotionFlex>
  );
}
