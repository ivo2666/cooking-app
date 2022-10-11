import { Ingredient } from "../../data-types";
import Spinner from "../../svgs/loading";
import DropdownItem from "../dropdown-item";

interface IngredientsListsProps {
  checkedIngr: Ingredient[];
  ingredients: Ingredient[] | undefined;
  handleCheck: (ingr: Ingredient, isChecked: boolean) => void;
  isLoading: boolean;
  hasError: boolean;
  searching: string;
}

const IngredientsList: React.FC<IngredientsListsProps> = ({
  checkedIngr,
  ingredients = [],
  handleCheck,
  isLoading,
  hasError,
  searching,
}) => {
  
  if (hasError) {
    return <div>Something wrong</div>;
  }

  if (searching && !ingredients.length && !checkedIngr.length && !isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-[100px]">
       No matching ingredients
      </div>
    );
  }
  
  if ((searching && !ingredients.length && !checkedIngr.length) || isLoading) {
    return (
      <div className="flex items-center justify-center w-full min-h-[100px]">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {[...checkedIngr, ...ingredients].map((ingr: Ingredient) => {
        const { id, name, isChecked } = ingr;
        return (
          <DropdownItem
            key={id}
            value={name}
            isChecked={!!isChecked}
            onChange={() => handleCheck(ingr, !!isChecked)}
          />
        );
      })}
    </>
  );
};

export default IngredientsList;
