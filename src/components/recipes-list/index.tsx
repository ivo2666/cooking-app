import { Recipe } from "../../data-types";
import RecepiCard from "../recipe-card";

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <div className=" min-h-screen flex flex-wrap justify-center sm:justify-start gap-5 pt-8">
      {recipes.map((recipe) => (
        <RecepiCard key={recipe.title} {...recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
