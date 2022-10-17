import { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import Dropdown from "./components/dropdown";
import Input from "./components/input";
import Navbar from "./components/navbar";
import { useQuery } from "react-query";
import service from "./service";
import { Ingredient } from "./data-types";
import IngredientsList from "./components/ingredients-list";
import useDebounce from "./hooks/useDebounce";
import RecipesList from "./components/recipes-list";
import RecipesLoading from "./components/recipes-loading";
import Footer from "./components/footer";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const debouncedFilter = useDebounce(filter, 500);

  const {
    data,
    isFetching: isIngrLoading,
    error: ingrErr,
  } = useQuery(
    ["ingredients", debouncedFilter],
    async () => {
      const data = await service.findIngredients(debouncedFilter);
      setIngredients((i) => {
        const prevChecked = i.filter(({ isChecked }) => isChecked); 
        const currentWithoutRepeats = data.filter((el) => !(prevChecked.find((x) => x.id === el.id))) 
        return [
          ...prevChecked,
          ...currentWithoutRepeats,
        ]
      });
      return data;
    },
    {
      enabled: !!debouncedFilter,
    }
  );

  const { data: recipes, isLoading: isRecipesLoading } = useQuery(
    ["recipes", searchIngredients],
    () => service.findRecipes(searchIngredients)
  );

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
    [ingredients, data]
  );

  const recipesList = useMemo(
    () =>
      isRecipesLoading ? (
        <RecipesLoading />
      ) : (
        <RecipesList recipes={recipes || []} />
      ),
    [recipes, isRecipesLoading]
  );

  const handleFocus = useCallback(() => setIsDropdownOpen(true), []);
  const handleCloseDropdown = useCallback(() => setIsDropdownOpen(false), []);
  const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsDropdownOpen(true);
    setFilter(event.target.value);
  };

  const dropdownRequirement = useMemo(
    () => isDropdownOpen && (!!debouncedFilter || !!searchIngredients.length),
    [isDropdownOpen, debouncedFilter, searchIngredients.length]
  );

  useEffect(() => {
    if (!debouncedFilter) {
      setIngredients(i => [...i.filter(({isChecked}) => isChecked)])
    }
  },[debouncedFilter])
  
  
  return (
    <>
      <main className="container mx-auto">
        <Navbar>
          <Dropdown>
            <Dropdown.Header>
              <Input
                value={filter}
                onFocus={handleFocus}
                handleChange={handleFilter}
                label="Filter Ingridients"
              />
            </Dropdown.Header>
            <Dropdown.Body
              isOpen={dropdownRequirement}
              onClose={handleCloseDropdown}
            >
              <IngredientsList
                {...{
                  currentIngredients: ingredients,
                  ingredients: data || [],
                  handleCheck,
                  isLoading: isIngrLoading,
                  hasError: !!ingrErr,
                  searching: debouncedFilter,
                }}
              />
            </Dropdown.Body>
          </Dropdown>
        </Navbar>
        {recipesList}
      </main>
      <Footer />
    </>
  );
}
export default App;
