import React from 'react';
import './Select.scss';

const Select = (props) => {
    const { options } = props;
    return (
        <select className="select" onChange={(event) => props.onChange(event.target.value)}>
            <option value="">Select country</option>
            {   options.map((option, index) => {
                    return (
                        <option value={option.value} key={index} >{option.name}</option>
                    )
                })
            }
        </select>
    )
}

export default Select;