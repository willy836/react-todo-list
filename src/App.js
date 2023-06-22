import React from "react";
import "./App.css";
import TodosContainer from "./components/TodosContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodosContainer />
      </div>
    );
  }
}

export default App;
