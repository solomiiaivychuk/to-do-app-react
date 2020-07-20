import React from "react";
import FormInput from "./Form-Input";

class ListItem extends React.Component {
    state = {
      todos: [] 
    }


  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  render() {
    return (<div className="form-wrapper">
       <FormInput onSubmit = {this.addTodo}></FormInput>
       {this.state.todos.map(todo => (
         <div className="list" key={todo.id}>{todo.text}</div>
       ))}
       </div>
    );
  }
}

export default ListItem;
