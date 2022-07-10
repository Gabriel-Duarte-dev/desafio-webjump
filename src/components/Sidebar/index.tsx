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
import { MenuItemDTO } from "../../services/menu";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItens: MenuItemDTO[];
}

export function Sidebar({ isOpen, onClose, menuItens }: SidebarProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };
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
                fontSize="16px"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
                cursor="pointer"
                transition="0.3s"
                _hover={{ transform: "scale(1.1)" }}
                onClick={() => handleNavigate(`/${item.path}`)}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
