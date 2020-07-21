import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list" onClick={this.props.moveToDone}>
        {this.props.text}
      </div>
    );
  }
}

export default ToDoItem;
