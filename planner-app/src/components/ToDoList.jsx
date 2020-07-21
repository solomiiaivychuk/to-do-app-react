import React from "react";
import FormInput from "./Form-Input";
import ToDoItem from "./ToDoItem";
import DoneTitle from "./DoneTitle";

class ToDoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo(todo) {
    if (todo.text != "") {
      this.setState({
        todos: [todo, ...this.state.todos],
      });
    }
  }

  handleDoneClick(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
            favourite: todo.favourite,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  deleteItem(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  addToFavourite(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: todo.complete,
            favourite: !todo.favourite,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <FormInput onSubmit={(todo) => this.addTodo(todo)}></FormInput>
        {this.state.todos.map((todo) =>
          todo.complete ? (
            ""
          ) : (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              handleDoneClick={() => this.handleDoneClick(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
              addToFavourite={() => this.addToFavourite(todo.id)}
            ></ToDoItem>
          )
        )}
        <DoneTitle></DoneTitle>
        {this.state.todos.map((todo) =>
          todo.complete ? (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              handleDoneClick={() => this.handleDoneClick(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
              addToFavourite={() => this.addToFavourite(todo.id)}
            ></ToDoItem>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default ToDoList;
