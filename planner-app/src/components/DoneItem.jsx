import React from "react";

class DoneItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <button className="done-button" >&#10004;</button>
        <span className="todo-text"></span>    
      </div>
    );
  }
}

export default DoneItem;