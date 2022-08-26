import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MovieList from "./MovieList";

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
