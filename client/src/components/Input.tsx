import React, { useState } from 'react';
import '../index.css'

export enum InputType {
    Text = "text",
    Email = "email",
    Password = "password"
}
interface IInputProps{
    type : InputType;
    label?: string;
}
const ColorInput = ({type, label} : IInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`input-wrapper ${isFocused ? 'input-focused' : ''}`}>
            <label htmlFor="color-input">{label}</label>
            <input
                id="color-input"
                type={type}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default ColorInput;
