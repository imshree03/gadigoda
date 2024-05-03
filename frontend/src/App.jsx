import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductTable from "./components/ProductTable";
import SearchInput from "./components/SearchInput";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <>
      <SearchInput handleSearch={handleSearch} />
      <ProductTable searchTerm={searchTerm} />
    </>
  );
}

export default App;
