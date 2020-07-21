import React from 'react'
import DoneItem from './DoneItem'

class DoneList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            doneToDos: []
        }
    }

    render() {
        return (
            <DoneItem></DoneItem>
        )
    }
}
export default DoneList