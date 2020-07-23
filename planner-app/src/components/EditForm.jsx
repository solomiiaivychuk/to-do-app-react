import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todoText : '',
        submitted : false,
        old_text : this.props.text
    }
  }

  handleValueChange(event) {
    this.setState({
      todoText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.todoText);
    this.props.changeTodoText(this.state.todoText);
    this.setState({
      
      submitted : !this.state.submitted
    })
    this.props.addToEdit();
  }

  handleEscape(event) {
    if (event.key == "Escape") {
      // this.setState({
      //   submitted: !this.state.submitted
      // })
      this.props.onEscape({
        todoText: this.state.old_text,
      })
    }
  }

  render() {
    return ( this.state.submitted ? this.state.todoText :
      <form
        className="edit-form"
        onSubmit={(event) => this.handleSubmit(event)}
        onKeyUp={(event) => this.handleEscape(event)}
      >
        <input
            name="text"
            value={this.state.todoText}
            onChange={(event) => this.handleValueChange(event)}
            className="edit-field"
            type="text"
            placeholder="edit todo..."
        ></input>
        <button 
          className="edit-form-button"
        >
          ok
        </button>
      </form>
    );
  }
}
export default EditForm;
