import React, {useState} from "react";
import s from "./container.module.css"
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Control} from "./Control/Control";

type ContainerPropsType = {
    isSetting:boolean
    counter: number
    setCounter: (counter:number) => void
    maxValue: number
    startValue: number
    error: boolean
    setIsSetting: (IsSetting: boolean) => void
}


export const Container = (props: ContainerPropsType) => {


    return (
        <div className={s.container}>
            <Scoreboard
                counter={props.counter}
                isSetting={props.isSetting}
                maxValue={props.maxValue}
                error={props.error}
            />
            <Control
                counter={props.counter}
                setCounter={props.setCounter}
                maxValue={props.maxValue}
                startValue={props.startValue}
                isSetting={props.isSetting}
                setIsSetting={props.setIsSetting}
            />
        </div>
    );
};

