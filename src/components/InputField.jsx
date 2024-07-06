// eslint-disable-next-line react/prop-types
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function InputField({inputType, placeHolder, width, height, inputState}){

    // list of default values
    const type = inputType ? inputType : 'text';
    const wordingInput = placeHolder ? placeHolder : 'Input some text...';
    const widthInput = width ? width : 10;
    const heightInput = height ? height : 8;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text,setText] = inputState || useState("");

    const styles = {
        padding: `${heightInput} ${widthInput}`
    }

    function handleOnChange(event){
        setText(event.target.value);
    }

    // console.log(text);

    return (
        <>
            <input
                type={type}
                placeholder={wordingInput}
                style={styles}
                value={text}
                onChange={handleOnChange}
            />
        </>
    );
}

export default InputField;