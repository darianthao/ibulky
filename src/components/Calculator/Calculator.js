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
        <div className="calculator-container">
                <div className="graph-component">
                    <Graph results={results} input={input} setResults={setResults} setInput={setInput} macro={macro} setMacro={setMacro}/>
                </div>
                <div className="input-component">
                    <InputSection results={results} input={input} setResults={setResults} setInput={setInput} macro={macro} setMacro={setMacro}/>
                </div>
        </div>
    );
}

export default Calculator;