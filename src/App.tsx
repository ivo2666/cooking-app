import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IngredientsSearchbar from "./components/ingredients-searchbar";
import RecipesList from "./components/recipes-list";

function App() {
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  
  return (
    <>
      <main className="container mx-auto">
        <Navbar>
          <IngredientsSearchbar {...{setSearchIngredients}} />
        </Navbar>
        <RecipesList {...{searchIngredients}}/>
      </main>
      <Footer />
    </>
  );
}
export default App;
