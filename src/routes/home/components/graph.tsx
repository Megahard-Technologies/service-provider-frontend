import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const LineGraph = () => {

    const getRandomValues = () => {
        const values = [];
        for (let i = 0; i < 9; i++) {
            values.push(Math.floor(Math.random() * 10));
        }
        for(let i = 9; i < 20; i++) {
            values.push(Math.floor(Math.random() * 55)+5);
        }
        for(let i = 20; i < 24; i++) {
            values.push(Math.floor(Math.random() * 20));
        }
        return values;
    }

    const data = {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [
            {
                label: 'Ilość studentów, która ma w danej godzinie wolne',
                data: getRandomValues(), // Replace these numbers with your actual data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Line options={options} data={data}/>;
}