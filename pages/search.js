import React from "react";
import Search from "../components/Search";

const SearchPage = props => (
  <div>
    <Search q={props.query.q} />
  </div>
);

export default SearchPage;
