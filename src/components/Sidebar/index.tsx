import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { menuItens } from "../Header";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent bg="red">
        <DrawerCloseButton color="white" />
        <DrawerHeader />
        <DrawerBody as="aside">
          <List as="ul" spacing={4} alignItems="center" listStyleType="none">
            {menuItens.map((item, index) => (
              <ListItem
                key={index}
                as="li"
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
