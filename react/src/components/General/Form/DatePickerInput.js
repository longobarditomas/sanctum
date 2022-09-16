import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addMonths } from "date-fns";

import { FormGroup, Label } from 'reactstrap';

const DatePickerInput = (props) => {
    var today = new Date();
    return (
        <FormGroup>
            <Label>{props.label ? props.label : 'Date'}</Label>
            <DatePicker
                onChange={date => props.handleDate(date)} 
                selected={props.value ? (new Date(props.value)) : today}
                showTimeSelect 
                minDate={subDays(today, 0)} 
                maxDate={addMonths(today, 2)} 
                /* minTime={setHours(setMinutes(new Date(), 0), 17)} 
                maxTime={setHours(setMinutes(new Date(), 30), 22)}  */
                dateFormat="MMMM d, yyyy h:mm aa" 
                placeholderText="Select a date"
                className="date-picker"
                withPortal
            />
        </FormGroup>
    );
}

export default DatePickerInput;