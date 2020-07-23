import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todoText : '',
        submitted : false
    }
  }

  handleValueChange(event) {
    this.setState({
      todoText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
     this.props.onSubmit({
      todoText: this.state.todoText,
    });
    this.setState({
        submitted : !this.state.submitted
    })
  }

  render() {
    return ( this.state.submitted ? this.state.todoText :
      <form
        className="edit-form"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <input
            name="text"
            value={this.state.todoText}
            onChange={(event) => this.handleValueChange(event)}
            className="edit-field"
            type="text"
            placeholder="edit todo..."
        ></input>
        <button className="edit-form-button">ok</button>
      </form>
    );
  }
}
export default EditForm;
