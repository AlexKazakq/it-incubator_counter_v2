import React, {useEffect} from "react";
import {Button} from "../../Button/Button";
import s from "./SetButton.module.css"

type SetButtonPropsType = {
    counter: number
    startValue: number
    maxValue: number
    setCounter: (counter: number) => void
    setIsSetting: (isSetting: boolean) => void
    isSetting: boolean
}


export const SetButton = (props: SetButtonPropsType) => {

    const onClickHandler = () => {
        props.setCounter(props.startValue);
        props.setIsSetting(false);
    }
    return (
        <div className={s.control}>
            <Button name={"set"} callBack={onClickHandler} disabled={!props.isSetting || props.maxValue <= props.startValue} className={s.button}/>
        </div>
    );
};

