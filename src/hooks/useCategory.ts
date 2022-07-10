import { useQuery } from "react-query";
import { CategoryDTO, getCategories } from "../services/categories";

const useCategory = (id: number) => {
  const {
    data: category,
    isLoading,
    isError,
    refetch,
  } = useQuery<CategoryDTO>("category", () => getCategories(id), {
    enabled: false,
  });

  return { category, isLoading, isError, refetch };
};

export { useCategory };
