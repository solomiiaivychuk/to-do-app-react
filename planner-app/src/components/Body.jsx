import React from "react";
import ToDoTitle from "./ToDoTitle.jsx";
import DoneTitle from "./DoneTitle.jsx";
import "./styles.css";
import ToDoList from "./ToDoList.jsx";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div className="container-fluid main-wrapper">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <ToDoTitle></ToDoTitle>
          </div>
        </div>
        <div className="row input-form">
          <div className="col">
            <ToDoList></ToDoList>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <DoneTitle></DoneTitle>
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
