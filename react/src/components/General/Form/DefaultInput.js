import React from 'react';
import Form from 'react-bootstrap/Form';
import { AvField } from 'availity-reactstrap-validation';

const DefaultInput = (props) => {
    return (
        <Form.Group>
            <AvField type={props.type ? props.type : 'text'} name={props.name ? props.name : 'name'} id={props.id ? props.id : props.name ? props.name : 'name'} label={props.label ? props.label : props.name ? props.name : 'label'} value={props.value ? props.value : '' } validate={props.validate ? props.validate : {minLength: {value: 3}, maxLength: {value: 30}}} placeholder={props.placeholder ? props.placeholder : '' } />
        {props.formErrors ? 
            <div className="input-error">{props.formErrors[props.name]}</div>
        : ''}
        </Form.Group>
    );
}

export default DefaultInput;

// input value should be determine by input type.