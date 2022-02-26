import React from 'react';
import './InputBox.css';

const InputBox = (props) => {
    const {type,name,value,placeholder} = props
    // console.log(eventListener)
    return (
        <div>
            <input onBlur={props.eventListener} className="allfield" type={type} name={name} value={value} placeholder={placeholder} id="" />
        </div>
    );
};

export default InputBox;