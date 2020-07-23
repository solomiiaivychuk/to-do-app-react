import React from 'react'

function ResetButton(props) {
    return(
        <button 
            className="reset-button"
            onClick={props.resetTodos}
        >
            &#8635;</button>
    )
}

export default ResetButton