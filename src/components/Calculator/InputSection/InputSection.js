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

        if (input.weight > 500) {
            setErrorMessage("Please enter a number less than 500lbs!")
            setResults({bmr: ""})
        } else {

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
                                    Weight:
                                    <input type="number" name="weight" value={input.weight} onChange={changeHandler}/>
                                    lbs.
                                </label>
                                <label>
                                    Height:
                                    <input type="number" name="height" value={input.height} onChange={changeHandler}/>
                                </label>
                                <label>
                                    Age:
                                    <input type="number" name="age" value={input.age} onChange={changeHandler}/>
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