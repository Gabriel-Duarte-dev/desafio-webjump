import { api } from "../api";

export type MenuDTO = {
  items: MenuItemDTO[];
};

export type MenuItemDTO = {
  id: number;
  name: string;
  path: string;
};

const getMenu = async (): Promise<MenuDTO> => {
  const { data } = await api.get("/list");

  return data;
};

export { getMenu };
