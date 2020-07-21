import React from "react";
import FormInput from "./Form-Input";
import ToDoItem from './ToDoItem'
import DoneTitle from './DoneTitle'

class ToDoList extends React.Component {
    state = {
      todos: [],
      dones: [] 
    }

  addTodo(todo) {
    if (todo.text != ''){
      this.setState({
        todos: [todo, ...this.state.todos]
      });
    }
  };

  handleDoneClick(id) {
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
          todo.complete? '' :
          <ToDoItem 
            key={todo.id}
            id={todo.id} 
            handleDoneClick={() => this.handleDoneClick(todo.id)}
            todo={todo}
          > 
          </ToDoItem>
       ))}
       <DoneTitle></DoneTitle>
       {this.state.todos.filter(todo => todo.complete === true).map(todo => (
         todo.complete? 
         <ToDoItem
            key={todo.id}
            id={todo.id} 
            todo={todo}
            > 
          </ToDoItem> : ''
       ))}
       </div>
    );
  }
}

export default ToDoList;
