import React from 'react';
import Form from 'react-bootstrap/Form';
import { AvField } from 'availity-reactstrap-validation';

const SelectInput = (props) => {
    return (
        <Form.Group>
            <AvField type="select" name={props.name ? props.name : 'name'} label={props.label ? props.label : props.name ? props.name : 'label'} helpMessage={props.helpMessage ? props.helpMessage : ''} validate={{min: {value: 1}}} value={props.value ? props.value : 0} onChange={props.onChange ? props.onChange : ''}>
            {props.hideSelect !== true ? 
                <option value="0">Select</option>
            : ''}
            {props.values.map((value) => {
                return <option key={`${props.name}-${value.id}`} value={value.id}>{value.name}</option>
            })}
            </AvField>
            {props.formErrors ? 
                <div className="input-error">{props.formErrors[props.name]}</div>
            : ''}
        </Form.Group>
    );
}

export default SelectInput;