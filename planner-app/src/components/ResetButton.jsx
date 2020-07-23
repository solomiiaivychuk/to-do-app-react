import React from 'react'

class ResetButton extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <button 
                className="reset-button"
                onClick={this.props.resetTodos}
            >
                &#8635;</button>
        )
    }
}

export default ResetButton