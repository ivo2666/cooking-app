import { useState } from "react";
import Dropdown from "./components/dropdown";
import Input from "./components/input";
import Navbar from "./components/navbar";
import { useQuery } from "react-query";
import service from "./service";
import { Ingredient } from "./data-types";
import IngredientsList from "./components/ingredients-list";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [filter, setFilter] = useState("");
  const [checkedIngr, setCheckedIngr] = useState<Ingredient[]>([]);
  const debouncedFilter = useDebounce(filter, 500);

  const {
    data: ingredients,
    isFetching: isIngrLoading,
    error: ingrErr,
  } = useQuery(
    ["ingredients", debouncedFilter],
    () => service.findIngredients(debouncedFilter),
    {
      enabled: !!debouncedFilter,
    }
  );

  const handleCheck = (ingr: Ingredient, isChecked: boolean) => {
    setCheckedIngr((checkedIngr) =>
      isChecked
        ? checkedIngr.filter((el) => el.id !== ingr.id)
        : [...checkedIngr, { ...ingr, isChecked: true }]
    );
  };

  return (
    <main className="container mx-auto">
      <Navbar>
        <Dropdown>
          <Dropdown.Header>
            <Input
              value={filter}
              setValue={setFilter}
              label="Filter Ingridients"
            />
          </Dropdown.Header>
          <Dropdown.Body isOpen={!!debouncedFilter}>
            <IngredientsList
              {...{
                checkedIngr,
                ingredients,
                handleCheck,
                isLoading: isIngrLoading,
                hasError: !!ingrErr,
                searching: debouncedFilter,
              }}
            />
          </Dropdown.Body>
        </Dropdown>
      </Navbar>
    </main>
  );
}
export default App;
