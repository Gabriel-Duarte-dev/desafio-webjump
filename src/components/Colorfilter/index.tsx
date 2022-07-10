import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IoMdArrowDropup } from "react-icons/io";
import { useFilter } from "../../Context/filter";

interface ColorfilterProps {
  bg: string;
  color: string;
}

export function Colorfilter({ bg, color }: ColorfilterProps) {
  const [selected, setSelected] = useState(false);
  const { handleAddFilterByColor, handleRemoveFilterByColor } = useFilter();

  const toggleFilter = () => {
    if (selected) {
      handleRemoveFilterByColor(color);
    } else {
      handleAddFilterByColor(color);
    }

    setSelected(!selected);
  };
  return (
    <Flex direction="column" align="center">
      <Box bg={bg} w="48px" h="24px" cursor="pointer" onClick={toggleFilter} />
      {selected && <IoMdArrowDropup />}
    </Flex>
  );
}
