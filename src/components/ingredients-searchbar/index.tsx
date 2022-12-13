import {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Ingredient } from "../../data-types";
import useDebounce from "../../hooks/useDebounce";
import useFindIngredients from "../../hooks/useFindIngredients";
import Dropdown from "./dropdown";
import IngredientsList from "./ingredients-list";
import Input from "./input";

interface IngredientsSearchbarProps {
  onChange: (name: string, isChecked: boolean | undefined) => void;
}

const IngredientsSearchbar: React.FC<IngredientsSearchbarProps> = ({
  onChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const debouncedFilter = useDebounce(filter, 500);
  const { data, isFetching, error } = useFindIngredients(debouncedFilter);

  const handleFocus = useCallback(() => setIsDropdownOpen(true), []);

  const handleCloseDropdown = useCallback(() => setIsDropdownOpen(false), []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsDropdownOpen(true);
    setFilter(event.target.value);
  };

  const handleSearchIngrChange = useCallback(
    (id: Ingredient["id"], name: string, isChecked: boolean | undefined) => {
      if (isChecked && !(data || []).find((x) => x.id === id)) {
        setIngredients((ingredients) =>
          ingredients.filter((el) => el.id !== id)
        );
      } else {
        setIngredients((ingredients) =>
          ingredients.map((el) =>
            el.id === id ? { ...el, isChecked: !el.isChecked } : el
          )
        );
      }
      onChange(name, isChecked);
    },
    [data, onChange]
  );

  useEffect(() => {
    data && setIngredients((ingredients) => {
      const prevChecked = ingredients.filter(({ isChecked }) => isChecked);
      const currentWithoutRepeats = (data || []).filter(
        (el) => !prevChecked.find((x) => x.id === el.id)
      );
      return [...prevChecked, ...currentWithoutRepeats];
    });
  }, [data]);

  useEffect(() => {
    if (!debouncedFilter) {
      setIngredients((ingredients) => [
        ...ingredients.filter(({ isChecked }) => isChecked),
      ]);
    }
  }, [debouncedFilter]);

  return (
    <Dropdown
      open={isDropdownOpen && (!!debouncedFilter || !!ingredients.length)}
      trigger={
        <Input
          value={filter}
          onFocus={handleFocus}
          onChange={handleChange}
          label="Filter Ingridients"
        />
      }
      menu={
        <IngredientsList
          {...{
            ingredients,
            hasData: !!data?.length,
            onChange: handleSearchIngrChange,
            isFetching,
            error,
            isSearching: !!debouncedFilter,
          }}
        />
      }
      onClose={handleCloseDropdown}
    />
  );
};

export default memo(IngredientsSearchbar);
