import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'To Do List'
        }
    }

    render() {
        return(
            <h1 className="p-3"> { this.state.name } </h1> 
        );
    }
}
export default Title