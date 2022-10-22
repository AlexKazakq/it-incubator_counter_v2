import React from "react";

type ButtonType = {
    name: string,
    callBack: () => void
    disabled: boolean
    className: string
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
            <button className={props.className} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    );
};
