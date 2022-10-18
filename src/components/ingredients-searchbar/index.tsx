import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Ingredient } from "../../data-types";
import useDebounce from "../../hooks/useDebounce";
import service from "../../service";
import Dropdown from "../dropdown";
import IngredientsList from "../ingredients-list";
import Input from "../input";

interface IngredientsSearchbarProps {
  setSearchIngredients: (value: React.SetStateAction<string[]>) => void;
}

const IngredientsSearchbar: React.FC<IngredientsSearchbarProps> = ({
  setSearchIngredients,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const debouncedFilter = useDebounce(filter, 500);

  const { data, isFetching, error } = useQuery(
    ["ingredients", debouncedFilter],
    async () => {
      const data = await service.findIngredients(debouncedFilter);
      setIngredients((i) => {
        const prevChecked = i.filter(({ isChecked }) => isChecked);
        const currentWithoutRepeats = data.filter(
          (el) => !prevChecked.find((x) => x.id === el.id)
        );
        return [...prevChecked, ...currentWithoutRepeats];
      });
      return data;
    },
    {
      enabled: !!debouncedFilter,
    }
  );

  const handleFocus = useCallback(() => setIsDropdownOpen(true), []);
  
  const handleCloseDropdown = useCallback(() => setIsDropdownOpen(false), []);

  const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsDropdownOpen(true);
    setFilter(event.target.value);
  };
  
  const handleCheck = useCallback(
    (id: Ingredient["id"], name: string, isChecked: boolean | undefined) => {
      if (isChecked && !(data || []).find((x) => x.id === id)) {
        setIngredients(ingredients.filter((el) => el.id !== id));
      } else {
        setIngredients(
          ingredients.map((el) =>
            el.id === id ? { ...el, isChecked: !el.isChecked } : el
          )
        );
      }

      if (isChecked) {
        setSearchIngredients((s) => s.filter((str) => str !== name));
      } else {
        setSearchIngredients((s) => [...s, name]);
      }
    },
    [ingredients, data, setSearchIngredients]
  );

  useEffect(() => {
    if (!debouncedFilter) {
      setIngredients((i) => [...i.filter(({ isChecked }) => isChecked)]);
    }
  }, [debouncedFilter]);

  return (
    <Dropdown
      open={isDropdownOpen && (!!debouncedFilter || !!ingredients.length)}
      trigger={
        <Input
          value={filter}
          onFocus={handleFocus}
          handleChange={handleFilter}
          label="Filter Ingridients"
        />
      }
      menu={
        <IngredientsList
          {...{
            ingredients,
            hasData: !!data?.length,
            handleCheck,
            isFetching,
            error,
            searching: !!debouncedFilter,
          }}
        />
      }
      onClose={handleCloseDropdown}
    />
  );
};

export default IngredientsSearchbar;
