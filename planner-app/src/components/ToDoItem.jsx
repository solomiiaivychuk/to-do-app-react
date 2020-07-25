import React from "react";
import EditForm from "./EditForm"

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_text: '',
      old_text: this.props.todo.text,
      submitted : false
    }
  }

  changeFormState() {
    this.setState({
      submitted: !this.state.submitted
    })
    this.props.removeFromEdit();
  }

  changeTodoText(text) {
    this.setState({
      new_text: text,
    })
    this.props.changeTodoText(text);
  }

  render() {
    return (
      <div className="list">
        <button className="done-button" onClick={this.props.moveToDone} >&#10004;</button>
        <span 
          className="todo-text"
          >
            {!this.props.todo.toedit ? ( this.props.todo.text ): (
            <EditForm 
              changeTodoText={(text) => this.changeTodoText(text)}
              addToEdit={this.props.addToEdit}
              changeFormState={() => this.changeFormState()}
              onEscape={() => this.props.removeFromEdit()}
              ></EditForm>
            )
           } 
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
