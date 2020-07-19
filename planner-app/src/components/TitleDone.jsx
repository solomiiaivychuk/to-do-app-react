import React from 'react';

class TitleDone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : ''
        }
    }

    render() {
        return(
            <h1 className="p-3">Done</h1> 
        );
    }
}
export default TitleDone