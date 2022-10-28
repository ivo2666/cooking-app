import { useQuery } from "react-query";
import service from "../service";

const useFindIngredients = (debouncedFilter: string) => {
  const { data, isFetching, error } = useQuery(
    ["ingredients", debouncedFilter],
    () => service.findIngredients(debouncedFilter),
    {
      enabled: !!debouncedFilter,
    }
  );
  return { data, isFetching, error };
};

export default useFindIngredients;
