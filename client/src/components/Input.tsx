import React, {ForwardedRef, forwardRef, useState} from 'react';
import '../index.css'

export enum InputType {
    Text = "text",
    Email = "email",
    Password = "password",
    Checkbox = "checkbox",
    Date="date",
    File="file",
}
interface IInputProps {
    type: InputType;
    label?: string;
    id: string,
    value? : string
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
                value={props.value || ''}
                accept={props.type === "file" && 'image/png, image/gif, image/jpeg' || ''}
            />
        </div>
    )
})

export default ColorInput;