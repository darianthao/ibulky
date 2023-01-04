import './InputSection.css'

import {useState} from "react";

const initalResults = {
    bmr: ""
}

const initalInput = {
    weight: "",
    height: "",
    age: "",
    gender: ""
}

function InputSection() {

    const [results, setResults] = useState(initalResults);
    const [input, setInput] = useState(initalInput);

    const changeHandler = (e) => {
        e.persist();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const getBMR = (e) => {
        e.preventDefault();

        let convertedWeight = input.weight * 0.45359237;
        let convertedHeight = 0;

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
                    {...results,
                    bmr: BMRJson.info.bmr
                    }
                )
            })
            .catch(err => console.error(err));
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
                                    <input type="text" name="height" value={input.height} onChange={changeHandler}/>
                                </label>
                                <label>
                                    Age:
                                    <input type="text" name="age" value={input.age} onChange={changeHandler}/>
                                </label>
                                <label>
                                    Gender:
                                    <input type="text" name="gender" value={input.gender} onChange={changeHandler}/>
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                            <div className="getBMRButton">
                                <h1>Results:</h1>
                                <h1>{results.bmr}</h1>
                            </div>
                        </div>
                    </>
                );
}

export default InputSection;