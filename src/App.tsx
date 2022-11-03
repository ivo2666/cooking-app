import { useCallback, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IngredientsSearchbar from "./components/ingredients-searchbar";
import RecipesList from "./components/recipes-list";

function App() {
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);

  const handleChange = useCallback((name: string, isChecked: boolean | undefined) => {
    if (isChecked) {
      setSearchIngredients((s) => s.filter((str) => str !== name));
    } else {
      setSearchIngredients(s => [...s, name]);
    }
  }, [setSearchIngredients])
  
  
  
  return (
    <>
      <main className="container mx-auto">
        <Navbar>
          <IngredientsSearchbar onChange={handleChange} />
        </Navbar>
        <RecipesList {...{searchIngredients}}/>
      </main>
      <Footer />
    </>
  );
}
export default App;
