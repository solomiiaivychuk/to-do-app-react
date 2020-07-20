import { Fragment } from "react";
import React from 'react';
import ListItem from "./ListItem";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "ASD",
    };
  }

  handleValueChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`${this.state.todo}`);
  }

  render() {
    return (
      <Fragment>
          <div className="form-wrapper">
        <form
          
          onSubmit={(event) => {
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
            <button className="submit-button" type="submit">
              Add
            </button>
          </div>         
        </form>
        <div className="list-wrapper">
        <ListItem toDoName={this.state.todo}> </ListItem>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default FormInput;
