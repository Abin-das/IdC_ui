import React, { Component }  from 'react';
export default function Input ({id,label,placeholder,type,register ,errorMessage}){
    return(<div >
        <label  htmlFor={id}>{label}</label>
        <input  className="textinput" type={type} id={id} placeholder={placeholder}{...register} ></input>
        <span className='error-message'>{errorMessage}</span>
    </div>)
}
