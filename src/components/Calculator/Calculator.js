import './Calculator.css'

import InputSection from './InputSection/InputSection'
import {Graph} from "./GraphSection/Graph";

function Calculator() {
    return (
        <div className="Calculator">
            <div className="grid-container">
                <div className="grid-item">
                    <Graph/>
                </div>
                <div className="grid-item">
                    <InputSection/>
                </div>
            </div>
        </div>
    );
}

export default Calculator;