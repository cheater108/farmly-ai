import { useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function InsightsPage() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "yield of crops (prediction)",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
}

export default InsightsPage;
