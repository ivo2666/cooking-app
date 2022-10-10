import { useState } from "react";
import Dropdown from "./components/dropdown";
import DropdownItem from "./components/dropdown-item";
import Input from "./components/input";
import Navbar from "./components/navbar";

function App() {
  const [filter, setFilter] = useState("");
  return (
    <main className="container mx-auto">
      <Navbar>
        <Dropdown>
            <Dropdown.Header>
              <Input
                value={filter}
                setValue={setFilter}
                label="Filter Ingridients"
              />
            </Dropdown.Header>
            <Dropdown.Body>
              <DropdownItem
                value="pasta"
                isChecked={false}
                onChange={() => {}}
              />
            </Dropdown.Body>
        </Dropdown>
      </Navbar>
    </main>
  );
}
export default App;
