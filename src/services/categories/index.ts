import { api } from "../api";

export type CategoryDTO = {
  filters: FilterDTO[];
  items: CategoryItemDTO[];
};

export type FilterDTO = {
  color: string;
  gender: string;
  type: string;
};

export type CategoryItemDTO = {
  id: number;
  sku: string;
  path: string;
  name: string;
  image: string;
  price: number;
  specialPrice?: number;
  filter: FilterDTO[];
};

const getCategories = async (id: number): Promise<CategoryDTO> => {
  const { data } = await api.get(`/${id}`);

  return data;
};

export { getCategories };
