import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchInput({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <TextField
      label="Search Products"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
