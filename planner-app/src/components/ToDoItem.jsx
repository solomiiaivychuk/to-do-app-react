import React from "react";
import EditForm from "./EditForm"

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      old_text : this.props.todo.text
    }
  }

// !!!!!!! TO CHANGE!!!

  changeTodoText(new_text) {
    this.props.todo.toedit = !this.props.todo.toedit;
    this.props.todo.text = new_text.todoText;
  }

  onEscapePress() {
    this.props.todo.text = this.old_text;
  }
  
  render() {
    return (
      <div className="list">
        <button className="done-button" onClick={this.props.moveToDone} >&#10004;</button>
        <span 
          className="todo-text"
          >
            {this.props.todo.toedit ? (
            <EditForm 
              text={this.props.todo.text}
              onSubmit={(new_text) => this.changeTodoText(new_text)}
              onEscapePress={() => this.onEscapePress()}
            ></EditForm>
            )
            : (
            this.props.todo.text 
            ) } 
        </span>
        <span className="buttons-block">
            <button 
                style={{color: this.props.todo.favorite ? 'red' : ''}} 
                className="favorite-button" 
                onClick={this.props.addToFavorite}
                >
                    &#9733;
            </button>
            <button 
              className="edit-button"
              onClick={this.props.addToEdit}
              >
                &#9998;
            </button>  
            <button className="delete-button" onClick={this.props.deleteItem}>&#10006;</button> 
         </span>
      </div>
    );
  }
}

export default ToDoItem;
