import './Calculator.css'

import InputSection from './InputSection/InputSection'
import Graph from "./GraphSection/Graph";
import {useState} from "react";

const initialResults = {
    bmr: ""
}

const initalInput = {
    weight: "",
    height: "",
    age: "",
    gender: ""
}

const macroCount = {
    proteins: "",
    carbohydrates: "",
    fats: ""
}

function Calculator() {
    
    const [results, setResults] = useState(initialResults);
    const [input, setInput] = useState(initalInput);
    const [macro, setMacro] = useState(macroCount);
    
    return (
        <div className="Calculator">
            <div className="grid-container">
                <div className="grid-item">
                    <Graph results={results} input={input} setResults={setResults} setInput={setInput} macro={macro} setMacro={setMacro}/>
                </div>
                <div className="grid-item">
                    <InputSection results={results} input={input} setResults={setResults} setInput={setInput} macro={macro} setMacro={setMacro}/>
                </div>
            </div>
        </div>
    );
}

export default Calculator;