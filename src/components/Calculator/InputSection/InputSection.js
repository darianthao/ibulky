import './InputSection.css'

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
        if(input.weight == "" || input.height == "" || input.age == "" || input.gender == ""){
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

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3003482a04msh1f5f62e281cc75cp159084jsn979b928ab4c9',
                'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
            }
        };

        fetch(`https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${convertedWeight}&height=${input.height}&age=${input.age}&gender=${input.gender}`, options)
            .then(response => response.json())
            .then(BMRJson => {
                console.log(BMRJson)
                setResults(
                    {
                        ...results,
                        bmr: BMRJson.info.bmr
                    }
                )
                setErrorMessage("")
                setMacro(
                    {
                        ...macro,
                        proteins: results.bmr * .3 / 4,
                        carbohydrates: results.bmr * .4 / 4,
                        fats: results.bmr * .3 / 9
                    }
                )
            })
            .catch(err => console.error(err));
    }
    };

                return (
                    <>
                        <div className="input-container">
                            <form className="input-form" onSubmit={getBMR}>
                                <label>
                                    Weight In Pounds:
                                    <input type="number" name="weight" value={input.weight} onChange={changeHandler} placeholder="Weight"/>
                                </label>
                                <label>
                                    Height In Centimeters:
                                    <input type="number" name="height" value={input.height} onChange={changeHandler} placeholder="Height"/>
                                </label>
                                <label>
                                    Age:
                                    <input type="number" name="age" value={input.age} onChange={changeHandler} placeholder="Age"/>
                                </label>
                                <label>
                                    Gender:
                                    <input type="text" name="gender" value={input.gender} onChange={changeHandler}/>
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                            <p>{errorMessage}</p>
                            <div className="getBMRButton">
                                <h1>Results:</h1>
                                <h1>{results.bmr}</h1>
                            </div>
                        </div>
                    </>
                );
}

export default InputSection;