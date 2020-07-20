import { Fragment } from "react";
import React from "react";
import ListItem from "./ListItem";
import List from "./List"

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.addToDO = this.addToDO.bind(this);
  }
  isSubmitted = false;

  handleValueChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`${this.state.todo}`);
    this.addToDO(this.state.todo);
    event.target.reset();
  }
   
  addToDO(users_input) {
        let item = {
            name: users_input,
            id : Date.now()
        }
      this.state.todo.concat(item);
      console.log(item);
  }
  render() {
    return (
      <Fragment>
        <div className="form-wrapper">
          <form
            onSubmit={(event) => {
              this.isSubmitted = true;
              this.handleSubmit(event);
            }}
          >
            <div className="form">
              <input
                value={this.props.todo}
                onChange={(event) => {
                  this.handleValueChange(event);
                }}
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
          <div className="list-wrapper">
            {this.isSubmitted ? 
                (<ListItem toDoName={this.state.todo}></ListItem>)
                : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FormInput;
