import { useState } from "react";

export const NextButton = () => {
    const [isNextButton, setNextButton] = useState(false);

    const toggleNextButton = () => {
        setNextButton((prevValue) => !prevValue)
    };
 
    return {
        isNextButton,
        toggleNextButton
    }
}
