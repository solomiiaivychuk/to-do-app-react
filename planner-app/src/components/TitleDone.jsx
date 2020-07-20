import React from 'react';

class TitleDone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'Done'
        }
    }

    render() {
        return(
        <h1 className="p-3"> { this.state.name } </h1> 
        );
    }
}
export default TitleDone