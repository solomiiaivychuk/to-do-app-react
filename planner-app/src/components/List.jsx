import React from 'react'
import ListItem from './ListItem.jsx'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
    }

    render() {
        return(
            <ul className="to-do-list p-0 m-2">
            </ul>
        )
    }
}

export default List