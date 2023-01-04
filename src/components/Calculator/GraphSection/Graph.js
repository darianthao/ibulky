import React, {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import FoodData from "../../../data/food.json";
import './Graph.css'

ChartJS.register(ArcElement, Tooltip, Legend);


function Graph(props) {

    const {results, setResults, input, setInput, macro, setMacro} = props

    const data = {
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
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
        ]
    };

    const redraw = {
        boolean: true
    };

    return (
        <div className="graph-container">
            <Doughnut data={data} redraw={redraw} options={{
                plugins: {
                    legend: {
                        labels: {
                            color: "blue",
                            font: {
                                size: 18,
                                family: 'Exo'
                            }
                        }
                    }
                }
            }}/>
        </div>
    );
}

export default Graph;
