import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

ChartJS.register(...registerables)

const Chart = ({ displayTitle = true, displayLegend = true, legendPosition = 'right' }) => {
    const [chartData] = useState({
        labels: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Gujranwala', 'Peshawar'],
        datasets: [{
            label: 'Population',
            data: [14916456, 11126285, 3204726, 2098231, 2027001, 1970042],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ]
        }]
    })

    return (
        <div className='chart'>
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: displayTitle,
                        text: 'Largest Cities In Pakistan',
                        fontSize: 25,
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition
                    }
                }}
            />

            <Line
                data={chartData}
                options={{
                    title: {
                        display: displayTitle,
                        text: 'Largest Cities In Pakistan',
                        fontSize: 25,
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition
                    }
                }}
            />

            <Pie
                data={chartData}
                options={{
                    title: {
                        display: displayTitle,
                        text: 'Largest Cities In Pakistan',
                        fontSize: 25,
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition
                    }
                }}
            />
        </div>
    )
}

export default Chart