import React, {useEffect, useState} from "react";
import "./App.css";
import {Container} from "./components/Container/Container";
import {Setting} from "./components/Setting/Setting";

function App() {

    // const [maxValue, setMaxValue] = useState(0);
    // const [startValue, setStartValue] = useState(0);
    // const [counter, setCounter] = useState(0);
    // const [isSetting,setIsSetting] = useState(false);

    // const getParams = () => {
    //     const max = localStorage.getItem('maxValue')
    //     if (max){
    //         setMaxValue(JSON.parse(max));
    //     }
    //     const start = localStorage.getItem('startValue')
    //     if (start) {
    //         setStartValue(JSON.parse(start))
    //     }
    //     const count = localStorage.getItem('counter')
    //     if (count) {
    //         setCounter(JSON.parse(count))
    //     }
    // }

    // useEffect(() => {
    // //     getParams()
    // // },[])

    const [maxValue, setMaxValue] = useState(JSON.parse(localStorage.getItem('maxValue') || '0'));
    const [startValue, setStartValue] = useState(JSON.parse(localStorage.getItem('startValue') || '0'));
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('counter') || '0'));
    const [isSetting,setIsSetting] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        localStorage.setItem('counter', JSON.stringify(counter))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [counter, maxValue, startValue])


    return (
        <div className="App">
            {isSetting ? <Setting
                isSetting={isSetting}
                setMaxValue={setMaxValue}
                setIsSetting={setIsSetting}
                setStartValue={setStartValue}
                counter={counter}
                startValue={startValue}
                maxValue={maxValue}
                setCounter={setCounter}
                setError={setError}
            /> : <Container
                counter={counter}
                isSetting={isSetting}
                setCounter={setCounter}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
                setIsSetting={setIsSetting}
            />}


        </div>
    );
}

export default App;
