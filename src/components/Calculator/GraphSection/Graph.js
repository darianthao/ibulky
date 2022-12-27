import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Protein', 'Carbohydrates', 'Fats'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
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

export function Graph() {
    return <div style={{height: "60vh",
        width: "60vh",
        position: "relative",
        marginBottom: "1%",
        padding: "1%"}}>

        <Pie data={data}/>
    </div>;
}
