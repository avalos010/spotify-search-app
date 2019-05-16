import React, { useContext } from "react";
import { DataContext } from "./App";

let Search = props => {
  const { handleSearchSubmit } = useContext(DataContext);
  return (
    <div>
      <form onSubmit={e => handleSearchSubmit(e)} className="form-input">
        <input type="text" placeholder="Track Name" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Search;
