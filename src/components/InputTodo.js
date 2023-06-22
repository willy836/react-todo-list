import React from "react";

class InputTodo extends React.Component {
  state = {
    todos: [],
    todo: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.state;
    if (todo.trim()) {
      this.setState((prevState) => {
        return {
          todos: [
            ...prevState.todos,
            { id: new Date().getTime().toString(), text: todo },
          ],
          todo: "",
        };
      });
    }
  };

  //   handleChange = (e) => {
  //     this.setState({ todo: e.target.value });
  //   };

  handleChange = (e) => {
    this.setState((prevState) => ({ todo: e.target.value }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">add item</button>
        </form>
        <div>
          {this.state.todos.map((todo) => {
            return <p key={todo.id}>{todo.text}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default InputTodo;
