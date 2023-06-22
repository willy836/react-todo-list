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

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((item) => item.id !== id),
    }));
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
            return (
              <ul>
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => this.handleDelete(todo.id)}>
                    delete
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InputTodo;
