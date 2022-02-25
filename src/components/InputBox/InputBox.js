import React from 'react';
import './InputBox.css';

const InputBox = ({type,name,value,placeholder}) => {
    return (
        <div>
            <input className="allfield" type={type} name={name} value={value} placeholder={placeholder} id="" />
            
        </div>
    );
};

export default InputBox;