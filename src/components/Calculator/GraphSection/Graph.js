import React, {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import FoodData from "../../../data/food.json";

ChartJS.register(ArcElement, Tooltip, Legend);


function Graph(props) {

    const {results, setResults, input, setInput, macro, setMacro} = props

    const data = {
        labels: ['Protein', 'Carbohydrates', 'Fats'],
        datasets: [
            {
                label: '# of Votes',
                data: [macro.carbohydrates, macro.proteins, macro.fats],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{height: "60vh",
            width: "60vh",
            position: "relative",
            marginBottom: "1%",
            padding: "1%"}}>
            <Pie data={data}/>
        </div>
    );
}

export default Graph;
