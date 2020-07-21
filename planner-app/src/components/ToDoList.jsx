import React from "react";
import FormInput from "./Form-Input";
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    state = {
      todos: [] 
    }


  addTodo(todo) {
    if (todo.text != '') {
      this.setState({
        todos: [todo, ...this.state.todos]
      });
    }
  };

  moveToDone(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (<div className="form-wrapper">
       <FormInput onSubmit = {(todo) => this.addTodo(todo)}></FormInput>
       {this.state.todos.map(todo => (
          <ToDoItem 
            key={todo.id}
            id={todo.id} 
            moveToDone={() => this.moveToDone(todo.id)}
            text={todo.text}
          > 
          </ToDoItem>
       ))}
       </div>
    );
  }
}

export default ToDoList;
