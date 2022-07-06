import { Flex, Heading, Img, Text } from "@chakra-ui/react";

import logo from "../../assets/logo.png";

interface LogoProps {
  subtitle: boolean;
}

export function Logo({ subtitle }: LogoProps) {
  return (
    <Flex direction="column" align="center">
      <Img
        src={logo}
        alt="logo do webjump (Apenas um texto escrito 'webjump')"
      />
      {subtitle && <Text fontSize={10}>more than just a plataform</Text>}
    </Flex>
  );
}
