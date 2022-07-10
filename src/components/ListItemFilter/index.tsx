import { ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { useFilter } from "../../Context/filter";

interface ListItemFilterProps {
  text: string;
}

export function ListItemFilter({ text }: ListItemFilterProps) {
  const [selected, setSelected] = useState(false);
  const { handleAddFilterByType, handleRemoveFilterByType } = useFilter();

  const toggleFilter = () => {
    if (selected) {
      handleRemoveFilterByType(text);
    } else {
      handleAddFilterByType(text);
    }
    setSelected(!selected);
  };
  return (
    <ListItem
      fontSize="16px"
      textDecoration={selected ? "underline" : "none"}
      cursor="pointer"
      onClick={toggleFilter}
    >
      {text}
    </ListItem>
  );
}
