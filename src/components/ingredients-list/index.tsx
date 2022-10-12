import { Ingredient } from "../../data-types";
import Spinner from "../../svgs/loading";
import DropdownItem from "../dropdown-item";

interface IngredientsListsProps {
  currentIngredients: Ingredient[];
  ingredients: Ingredient[] | undefined;
  handleCheck: (id: Ingredient["id"]) => void;
  isLoading: boolean;
  hasError: boolean;
  searching: string;
}

const IngredientsList: React.FC<IngredientsListsProps> = ({
  currentIngredients,
  ingredients = [],
  handleCheck,
  isLoading,
  hasError,
  searching,
}) => {
  if (hasError) {
    return <div>Something wrong</div>;
  }

  if (
    searching &&
    !ingredients.length &&
    !currentIngredients.length &&
    isLoading
  ) {
    return (
      <div className="flex items-center justify-center w-full min-h-[100px]">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {currentIngredients.map((ingr: Ingredient) => {
        const { id, name, isChecked } = ingr;
        return (
          <DropdownItem
            key={id}
            value={name}
            isChecked={!!isChecked}
            onChange={() => handleCheck(id)}
          />
        );
      })}
      {searching && !ingredients.length && !isLoading && (
        <div className="flex items-center justify-center w-full min-h-[100px]">
          No matching ingredients
        </div>
      )}
    </>
  );
};

export default IngredientsList;
