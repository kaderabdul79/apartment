import React from 'react';

const InputBox = ({type,name,value,placeholder}) => {
    return (
        <div>
            <input type={type} name={name} value={value} placeholder={placeholder} id="" />
        </div>
    );
};

export default InputBox;