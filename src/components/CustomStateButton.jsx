// eslint-disable-next-line react/prop-types
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function CustomStateButton({placeHolder, widthButton, heightButton, buttonState, actionButton}){

    const wordingButton = placeHolder ? placeHolder : 'Click Me';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state] = buttonState || useState();
    const width = widthButton ? widthButton : '10px';
    const height = heightButton ? heightButton : '5px';

    const styles = {
        backgroundColor: '#10ac84',
        borderRadius: '5px',
        borderWidth: '1px',
        padding: `${height} ${width}`
    }

    return (
        <>
            <button
                type={"button"}
                onClick={()=>actionButton(state)}
                style={styles}
            >{wordingButton}</button>
        </>
    );
}

export default CustomStateButton;