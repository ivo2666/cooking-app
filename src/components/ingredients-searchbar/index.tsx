import {
  ChangeEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { Ingredient } from "../../data-types";
import useDebounce from "../../hooks/useDebounce";
import useFindIngredients from "../../hooks/useFindIngredients";
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
  const ingredientsRef = useRef<Ingredient[]>([]);
  const debouncedFilter = useDebounce(filter, 500);

  const { data, isFetching, error } = useFindIngredients(debouncedFilter);

  const handleFocus = useCallback(() => setIsDropdownOpen(true), []);

  const handleCloseDropdown = useCallback(() => setIsDropdownOpen(false), []);

  const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsDropdownOpen(true);
    setFilter(event.target.value);
  };

  const handleCheck = useCallback(
    (id: Ingredient["id"], name: string, isChecked: boolean | undefined) => {
      if (isChecked && !(data || []).find((x) => x.id === id)) {
        ingredientsRef.current = ingredientsRef.current.filter(
          (el) => el.id !== id
        );
      } else {
        ingredientsRef.current = ingredientsRef.current.map((el) =>
          el.id === id ? { ...el, isChecked: !el.isChecked } : el
        );
      }

      if (isChecked) {
        setSearchIngredients((s) => s.filter((str) => str !== name));
      } else {
        setSearchIngredients((s) => [...s, name]);
      }
    },
    [data, setSearchIngredients]
  );

  useMemo(() => {
    const prevChecked = ingredientsRef.current.filter(
      ({ isChecked }) => isChecked
    );
    const currentWithoutRepeats = (data || []).filter(
      (el) => !prevChecked.find((x) => x.id === el.id)
    );
    ingredientsRef.current = [...prevChecked, ...currentWithoutRepeats];

    return ingredientsRef.current;
  }, [data]);

  useMemo(() => {
    if (!debouncedFilter) {
      ingredientsRef.current = [
        ...ingredientsRef.current.filter(({ isChecked }) => isChecked),
      ];
    }
  }, [debouncedFilter]);
  
  return (
    <Dropdown
      open={isDropdownOpen && (!!debouncedFilter || !!ingredientsRef.current.length)}
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
            ingredients: ingredientsRef.current,
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
