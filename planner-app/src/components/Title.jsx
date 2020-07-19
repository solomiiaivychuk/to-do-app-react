import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : ''
        }
    }

    render() {
        return(
            <h1 className="d-flex justify-content-center p-3">To Do List</h1> 
        );
    }
}
export default Title