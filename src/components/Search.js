import React from "react";

let Search = props => (
  <div>
    <form onSubmit={e => props.search(e)} className="form-input">
      <input type="text" placeholder="Track Name" />
      <input type="submit" value="search" />
    </form>
  </div>
);

export default Search;
