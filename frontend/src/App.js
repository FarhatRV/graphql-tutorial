import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";

import useBookFilters from "./graphql/useBookFilters";
import { GET_BOOK_BY_ID } from "./graphql/queries";

import "./App.css";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
var JSONPrettyMon = require("react-json-pretty/dist/monikai");

function App() {
  const { operations, models } = useBookFilters();

  const { data, loading, error, refetch } = useQuery(GET_BOOK_BY_ID);

  const handleChangeInInput = useCallback(
    event => {
      operations.updateFilter("bookid", parseInt(event.target.value, 10));
    },
    [operations]
  );

  const handleSearch = useCallback(() => {
    refetch({
      bookid: models.filters.bookid
    });
  }, [models, refetch]);

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div className="App">
      <h1>Book by Id</h1>

      <div>
        <label>Search</label>&nbsp;&nbsp;
        <input onChange={handleChangeInInput} type="string" />
      </div>

      <br />

      <JSONPretty
        id="json-pretty"
        theme={JSONPrettyMon}
        data={data.book}
      ></JSONPretty>
      {/* <div>{JSON.stringify(data.book)}</div> */}
      {/* <PrettyPrint data={data.book} /> */}

      <br />

      <button onClick={handleSearch}>Submit!</button>
    </div>
  );
}

export default App;
