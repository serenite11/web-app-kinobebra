import React, {ForwardedRef, forwardRef, useState} from 'react';
import '../index.css'

export enum InputType {
    Text = "text",
    Email = "email",
    Password = "password",
    Checkbox = "checkbox"
}
interface IInputProps {
    type: InputType;
    label?: string;
    id: string,

}
const ColorInput = forwardRef((props: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        console.log('произошел Фокус')
        setIsFocused(true);
    };
    const handleBlur = () => {
        console.log("Blur event fired");
        setIsFocused(false);
    };


    return (
        <div className={`input-wrapper ${isFocused ? 'input-focused' : ''} ${props.type === 'checkbox' ? 'flex-wrapper' : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
                ref={ref}
            />
        </div>
    )
})

export default ColorInput;
