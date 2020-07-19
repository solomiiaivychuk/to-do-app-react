import React from 'react';
import Title from './Title.jsx'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : ''
        }
    }
    render() {
        return (
            <div className="container-fluid main-wrapper">
                <div className="row">
                    <div className="col">
                        <Title></Title>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Body