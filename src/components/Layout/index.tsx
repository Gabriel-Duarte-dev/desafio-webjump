import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box w="100%" maxW="1440px">
      {children}
    </Box>
  );
}
