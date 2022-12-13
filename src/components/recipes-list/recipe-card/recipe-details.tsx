import { useQuery } from "react-query";
import service from "../../../service";
import Spinner from "../../../svgs/loading";

const RecipeDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data: recipe, isLoading: isRecipesLoading } = useQuery(
    ["recipe", id],
    () => service.getRecipe(id)
  );

  if (!recipe) {
    return <Spinner />;
  }

  return (
    <div className="p-5 prose lg:prose-xl ">
      {isRecipesLoading ? (
        <div className="flex items-center justify-center w-full min-h-[300px]"><Spinner /></div>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      )}
    </div>
  );
};

export default RecipeDetails;
