import React from "react";
import InputTodo from "./InputTodo";

class TodosContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List Container</h2>
        <InputTodo />
      </div>
    );
  }
}

export default TodosContainer;
