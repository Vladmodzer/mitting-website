import { useState } from "react";

export const PrevButton = () => {
    const [isPrevButton, setPrevButton] = useState(false);

    const togglePrevButton = () => {
        setPrevButton((prevValue) => !prevValue)
    };
 
    return {
        isPrevButton,
        togglePrevButton
    }
}
