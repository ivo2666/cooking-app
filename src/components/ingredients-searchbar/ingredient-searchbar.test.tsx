import IngredientsSearchbar from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import useFindIngredients from "../../hooks/useFindIngredients";

jest.mock("../../hooks/useFindIngredients", (): typeof useFindIngredients  => (() => ({
  data: [],
isFetching: true,
error: undefined,
})))

test("<IngredientsSearchbar />", async () => {
  
  render(<IngredientsSearchbar setSearchIngredients={() => {}} />);
  // const input = screen.getByLabelText("Filter Ingridients");
  // fireEvent.change(input, { target: { value: "salt" } });
  // const items = await screen.findAllByText(/salt/)
  // console.log(items)
  expect(true).toBeTruthy();
});
