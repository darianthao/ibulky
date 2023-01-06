import './InputSection.css'
import {fetchBMR} from '../../../fetchCalls/index'

import {useState} from "react";


function InputSection(props) {

    const {results, setResults, input, setInput, macro, setMacro} = props
    const [errorMessage, setErrorMessage] = useState("");


    const changeHandler = (e) => {
        e.persist();

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

    };

    const getBMR = (e) => {
        e.preventDefault();

        // Check to see if any empty input fields
        if(input.weight === "" || input.height === "" || input.age === "" || input.gender === ""){
            setErrorMessage("Please fill in all the fields.")
            setResults({bmr: ""})
            setMacro({carbohydrates: "", proteins: "", fats: ""})
        }
        // check to see if weight is over 500 lbs.
        else if (input.weight > 500) {
            setErrorMessage("Please enter a number less than 500lbs!")
            setResults({bmr: ""})
        }
        // fetch to api to grab BMR data
        else {

        let convertedWeight = input.weight * 0.45359237;

            fetchBMR(convertedWeight, input.height, input.age, input.gender)
            .then(BMRJson => {
                console.log(Math.floor(BMRJson.info.bmr));
                setResults(
                    {
                        ...results,
                        bmr: Math.floor(BMRJson.info.bmr)
                    }
                )
                setErrorMessage("")
                setMacro(
                    {
                        ...macro,
                        proteins: Math.floor(BMRJson.info.bmr * .3 / 4),
                        carbohydrates: Math.floor(BMRJson.info.bmr * .4 / 4),
                        fats: Math.floor(BMRJson.info.bmr * .3 / 9)
                    }
                )
            })
            .catch(err => console.error(err));
    }
    };

                return (
                    <>
                        <div className="input-container">
                            <h2>Calculate Your Macros</h2>
                            <form onSubmit={getBMR}>
                                <div className="entry-box">
                                    <label>
                                        Weight In Pounds:
                                        <input type="number" name="weight" value={input.weight} onChange={changeHandler} placeholder="Weight"/>
                                    </label>
                                </div>
                                <div className="entry-box">
                                <label>
                                    Height In Centimeters:
                                    <input type="number" name="height" value={input.height} onChange={changeHandler} placeholder="Height"/>
                                </label>
                                </div>
                                <div className="entry-box">
                                <label>
                                    Age:
                                    <input type="number" name="age" value={input.age} onChange={changeHandler} placeholder="Age"/>
                                </label>
                                    </div>
                                <div className="radio-entry-box">
                                        <input type="radio" id="maleButton" name="gender" value="male" onChange={changeHandler}/>
                                            <label htmlFor="maleButton">Male</label>
                                        <input type="radio" id="femaleButton" name="gender" value="female" onChange={changeHandler}/>
                                            <label htmlFor="femaleButton">Female</label>
                                    </div>

                                <input type="submit" value="Submit" className="submit-button"/>
                            </form>


                            <p>{errorMessage}</p>
                            <div className="getBMRButton">
                                <h1>Results:</h1>
                                {results.bmr === "" ? <h1></h1> : <h1>{results.bmr} Calories</h1>}
                            </div>
                        </div>
                    </>
                );
}

export default InputSection;