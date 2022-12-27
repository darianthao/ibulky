import './Calculator.css'

import InputSection from './InputSection/InputSection'
import {Graph} from "./GraphSection/Graph";

function Calculator() {
    return (
        <>
        <div className="Calculator">
            <Graph/>
            <InputSection/>
        </div>
        <div className="Description">
        This is where my output will be
        </div>
        </>
    );
}

export default Calculator;