import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
  }

  handleValueChange(event) {
      this.setState({
      todoText: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    this.setState({
      todoText: ''
    })
    this.props.onSubmit({
      id: Date.now(),
      text: this.state.todoText,
      complete: false,
    });
  };

  render() {
    return (
        <div>
          <form
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <div className="form">
              <input
                name="text"
                value={this.state.todoText}
                onChange={(event) => this.handleValueChange(event)}
                className="input-field"
                type="text"
                placeholder="What should I do?"
              />
              <button
                className="submit-button"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default FormInput;
