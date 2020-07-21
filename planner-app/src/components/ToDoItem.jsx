import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <button className="done-button" onClick={this.props.handleDoneClick} >&#10004;</button>
        <span className="todo-text">{this.props.todo.text}</span>
        <span className="buttons-block">
            <button className="delete-button" onClick={this.props.deleteItem}>&#10006;</button>
            <button 
                style={{color: this.props.todo.favourite ? 'red' : ''}} 
                className="favourite-button" 
                onClick={this.props.addToFavourite}
                >
                    &#9733;
            </button>
            <button className="edit-button">&#9998;</button>   
         </span>
      </div>
    );
  }
}

export default ToDoItem;
