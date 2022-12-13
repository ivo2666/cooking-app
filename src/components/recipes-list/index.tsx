import { useQuery } from "react-query";
import service from "../../service";
import RecepiCard from "./recipe-card";
import RecipesLoading from "./recipes-loading";

interface RecipesListProps {
  searchIngredients: string[];
}

const RecipesList: React.FC<RecipesListProps> = ({ searchIngredients }) => {
  const { data: recipes, isLoading: isRecipesLoading } = useQuery(
    ["recipes", searchIngredients],
    () => service.findRecipes(searchIngredients),
    {
      enabled: !!searchIngredients.length,
    }
  );

  if (isRecipesLoading) {
    return <RecipesLoading />
  }
  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-5 pt-8 sm:justify-start">
      {(recipes || []).map((recipe) => (
        <RecepiCard key={recipe.title} {...recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
