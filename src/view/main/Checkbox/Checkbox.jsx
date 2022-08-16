import React from 'react';
import Checkbox from '.';

const CheckboxDemonstration = () => {
    const change = e => console.log(e.target.checked)
    return (
        <div style={{margin: '20px auto'}}>
            <Checkbox onChange={change} >{'Checkbox'}</Checkbox>
        </div>
    );
}

export default CheckboxDemonstration;
