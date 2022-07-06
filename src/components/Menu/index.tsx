import { Box, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { menuItens } from "../Header";

export function Menu() {
  const navigate = useNavigate();
  return (
    <Box
      as="nav"
      maxW={{ sm: "320px", md: "768", lg: "1024px", xl: "1440px" }}
      w="100%"
      padding={4}
    >
      <List
        as="ul"
        display="flex"
        alignItems="center"
        gap="4em"
        listStyleType="none"
      >
        {menuItens.map((item, index) => (
          <ListItem
            key={index}
            as="li"
            fontSize="16px"
            color="white"
            fontWeight="bold"
            cursor="pointer"
            transition="0.3s"
            _hover={{ transform: "scale(1.1)" }}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
