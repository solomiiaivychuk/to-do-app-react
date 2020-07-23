import React from "react";
import FormInput from "./Form-Input";
import ToDoItem from "./ToDoItem";
import DoneTitle from "./DoneTitle";
import ResetButton from "./ResetButton";

class ToDoList extends React.Component {
  state = {
    todos: [],
  };


  /* if text of todo item is not empty, add it to the array of todos */

  addTodo(todo) {
    if (todo.text != "") {
      this.setState({
        todos: [todo, ...this.state.todos],
      });
    }
  }

  /* reverse 'complete' state of item */
  moveToDone(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
            favorite: todo.favorite,
            toedit: todo.toedit
          };
        } else {
          return todo;
        }
      }),
    });
  }

  /* delete item by id */ 

  deleteItem(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  /* reverse 'favorite' state of item */

  addToFavorite(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: todo.complete,
            favorite: !todo.favorite,
            toedit: todo.toedit,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  /* edit todo after clicking the button "edit" */

  addToEdit(id) {
    const item = this.state.todos.filter((todo) => todo.id == id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: todo.complete,
            favorite: todo.favorite,
            toedit: !todo.toedit,
          };
        } else {
          return todo;
        }
      }),
    });
  }

/* TO REWRITE */

  changeText(id, new_text) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: new_text,
            complete: todo.complete,
            favorite: todo.favorite,
            toedit: !todo.toedit,
          };
        } else {
          return todo;
        }
      }),
    })
  }

  /* clear all todos list after clicking the button "reset" */

  resetTodos() {
    this.setState({
      todos: []
    })
  }

  render() {
    return (
      <div className="form-wrapper">
        <FormInput onSubmit={(todo) => this.addTodo(todo)}></FormInput>
        {this.state.todos.length > 0 ? (
          <ResetButton resetTodos={() => this.resetTodos()}></ResetButton>
        ) : ""
      }
      
        {/* render favorites and uncomplete items */}

        {this.state.todos.map((todo) =>
          !todo.complete && todo.favorite ? (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              moveToDone={() => this.moveToDone(todo.id)}
              addToFavorite={() => this.addToFavorite(todo.id)}
              addToEdit={() => this.addToEdit(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
            ></ToDoItem>
          ) : (
            ""
          )
        )}

        {/* render non-favorites and uncomplete items */}

        {this.state.todos.map((todo) =>
          !todo.complete && !todo.favorite ? (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              moveToDone={() => this.moveToDone(todo.id)}
              addToFavorite={() => this.addToFavorite(todo.id)}
              addToEdit={() => this.addToEdit(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
            ></ToDoItem>
          ) : (
            ""
          )
        )}
        <DoneTitle></DoneTitle>

        {/* render favorites and complete items */}

        {this.state.todos.map((todo) =>
          todo.complete && todo.favorite ? (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              moveToDone={() => this.moveToDone(todo.id)}
              addToFavorite={() => this.addToFavorite(todo.id)}
              addToEdit={() => this.addToEdit(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
            ></ToDoItem>
          ) : (
            ""
          )
        )}

        {/* render non-favorites and complete items */}

        {this.state.todos.map((todo) =>
          todo.complete && !todo.favorite ? (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              moveToDone={() => this.moveToDone(todo.id)}
              addToFavorite={() => this.addToFavorite(todo.id)}
              addToEdit={() => this.addToEdit(todo.id)}
              deleteItem={() => this.deleteItem(todo.id)}
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
