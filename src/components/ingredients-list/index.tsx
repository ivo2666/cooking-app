import { Ingredient } from "../../data-types";
import Spinner from "../../svgs/loading";
import DropdownItem from "../dropdown-item";

interface IngredientsListsProps {
  ingredients: Ingredient[];
  hasData: boolean;
  handleCheck: (id: Ingredient["id"], name: string, isChecked: boolean | undefined) => void;
  isFetching: boolean;
  error: unknown;
  searching: boolean;
}

const IngredientsList: React.FC<IngredientsListsProps> = ({
  ingredients,
  hasData,
  handleCheck,
  isFetching,
  error,
  searching,
}) => {
  if (error) {
    return <div>Something wrong</div>;
  }

  if (
    searching &&
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
          <DropdownItem
            key={id}
            value={name}
            isChecked={!!isChecked}
            onChange={() => handleCheck(id, name, isChecked)}
          />
        );
      })}
      {searching && !hasData && !isFetching && (
        <div className="flex items-center justify-center w-full min-h-[100px]">
          No matching ingredients
        </div>
      )}
    </>
  );
};

export default IngredientsList;
