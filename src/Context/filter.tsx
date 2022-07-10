import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FilterContextProps {
  filterByColor: string[];
  filterByType: string[];
  handleAddFilterByColor: (color: string) => void;
  handleRemoveFilterByColor: (color: string) => void;
  handleAddFilterByType: (type: string) => void;
  handleRemoveFilterByType: (type: string) => void;
  handleFilterByInput: (type: string) => void;
}

const FilterContext = createContext<FilterContextProps>(
  {} as FilterContextProps
);

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const navigate = useNavigate();
  const [filterByColor, setFilterByColor] = useState<string[]>([""]);
  const [filterByType, setFilterByType] = useState<string[]>([""]);

  const handleAddFilterByColor = (color: string) => {
    setFilterByColor([...filterByColor, color]);
  };
  const handleRemoveFilterByColor = (color: string) => {
    setFilterByColor(filterByColor.filter((c) => c !== color));
  };
  const handleAddFilterByType = (type: string) => {
    setFilterByType([...filterByType, type]);
  };
  const handleRemoveFilterByType = (type: string) => {
    setFilterByType(filterByType.filter((t) => t !== type));
  };
  const handleFilterByInput = (value: string) => {
    const filter = value.toLowerCase();
    if (
      filter.includes("camisa") ||
      filter.includes("camiseta") ||
      filter.includes("camisas") ||
      filter.includes("camisetas")
    ) {
      navigate("/camisetas");
    }
    if (
      filter.includes("calca") ||
      filter.includes("calça") ||
      filter.includes("calcas") ||
      filter.includes("calças")
    ) {
      navigate("/calcas");
    }
    if (
      filter.includes("sapato") ||
      filter.includes("sapatos") ||
      filter.includes("cacados") ||
      filter.includes("calçados") ||
      filter.includes("tenis") ||
      filter.includes("tênis")
    ) {
      navigate("/calcados");
    }
  };
  return (
    <FilterContext.Provider
      value={{
        filterByColor,
        filterByType,
        handleAddFilterByColor,
        handleRemoveFilterByColor,
        handleAddFilterByType,
        handleRemoveFilterByType,
        handleFilterByInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  const context = useContext(FilterContext);

  return context;
}
