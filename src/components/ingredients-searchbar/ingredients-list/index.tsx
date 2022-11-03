import { Ingredient } from "../../../data-types";
import Spinner from "../../../svgs/loading";
import IngredientItem from "./ingredient-item";

interface IngredientsListsProps {
  ingredients: Ingredient[];
  hasData: boolean;
  onChange: (id: Ingredient["id"], name: string, isChecked: boolean | undefined) => void;
  isFetching: boolean;
  error: unknown;
  isSearching: boolean;
}

const IngredientsList: React.FC<IngredientsListsProps> = ({
  ingredients,
  hasData,
  onChange,
  isFetching,
  error,
  isSearching,
}) => {
  if (error) {
    return <div>Something wrong</div>;
  }

  if (
    isSearching &&
    isFetching
  ) {
    return (
      <div className="flex items-center justify-center w-full min-h-[100px]">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {ingredients.map((ingr: Ingredient) => {
        const { id, name, isChecked } = ingr;
        return (
          <IngredientItem
            key={id}
            value={name}
            isChecked={!!isChecked}
            onChange={() => onChange(id, name, isChecked)}
          />
        );
      })}
      {isSearching && !hasData && !isFetching && (
        <div className="flex items-center justify-center w-full min-h-[100px]">
          No matching ingredients
        </div>
      )}
    </>
  );
};

export default IngredientsList;
