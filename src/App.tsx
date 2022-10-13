import { useEffect, useState } from "react";
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
  const [filter, setFilter] = useState("");
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
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

  const [currentIngredients, setCurrentIngredients] = useState<Ingredient[]>(
    ingredients || []
  );

  useEffect(() => {
    setCurrentIngredients((currentIngredients) => {
      const checkedIngr = currentIngredients.filter((el) => el.isChecked);
      setSearchIngredients(checkedIngr.map(({ name }) => name));
      return [
        ...checkedIngr,
        ...(ingredients || []).filter(
          (a) => !currentIngredients.find((b) => a.id === b.id)
        ),
      ];
    });
  }, [ingredients]);

  const {
    data: recipes,
    isFetching: isRecipesLoading,
    error: recipesErr,
  } = useQuery(["recipes", searchIngredients], () =>
    service.findRecipes(searchIngredients)
  );
  
  const handleCheck = (id: Ingredient["id"]) => {
    const isExist = !!ingredients?.find((el) => el.id === id);
    setCurrentIngredients((currentIngredients) => {
      let newIngr: Ingredient[] = [];
      currentIngredients.forEach((el) => {
        if (el.id === id) {
          if (isExist) {
            newIngr = [...newIngr, { ...el, isChecked: !el.isChecked }];
          }

          if (el.isChecked) {
            setSearchIngredients((current) =>
              current.filter((name) => name !== el.name)
            );
          } else {
            setSearchIngredients((current) => [...current, el.name]);
          }
        } else {
          newIngr = [...newIngr, el];
        }
      });

      return newIngr;
    });
  };

  const recipesList = isRecipesLoading ? (
    <RecipesLoading />
  ) : (
    <RecipesList recipes={recipes || []} />
  );

  return (
    <>
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
          <Dropdown.Body
            isOpen={!!debouncedFilter || !!currentIngredients.length}
          >
            <IngredientsList
              {...{
                currentIngredients,
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
      {recipesList}
    </main>
      <Footer />
      </>
  );
}
export default App;
