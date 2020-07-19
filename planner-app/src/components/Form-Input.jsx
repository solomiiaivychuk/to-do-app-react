import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function FormInput() {
    return(
        <Form>
        <Form.Group className="d-flex">
            <Form.Control type="text" placeholder="What should I do?" />
            <Button variant="primary" type="submit" >
            ok
        </Button>
        </Form.Group>
        
        </Form>
    )
}

export default FormInput
