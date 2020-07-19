import React from 'react';
import Title from './Title.jsx'
import FormInput from './Form-Input.jsx'
import TitleDone from './TitleDone.jsx'

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
                    <div className="col d-flex justify-content-center">
                        <Title></Title>
                        </div>
                </div>
                <div className="row input-form">
                    <div className="col d-inline">
                        <FormInput></FormInput>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <TitleDone></TitleDone>
                    </div>
                </div> 
                    
            </div>
            
        )
    }
}
export default Body