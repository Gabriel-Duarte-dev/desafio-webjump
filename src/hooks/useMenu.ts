import { getMenu, MenuDTO } from "./../services/menu/index";
import { useQuery } from "react-query";

const useMenu = () => {
  const { data: menu, isLoading, isError } = useQuery<MenuDTO>("menu", getMenu);

  return { menu, isLoading, isError };
};

export { useMenu };
