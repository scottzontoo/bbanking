'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

/*interface DoughnutChartProps {
  accounts: any[] // TODO: Define proper type for accounts
}
*/

const DoughunutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [{
      label: "Banks",
      data: [5020, 3950, 4993],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }

  return <Doughnut 
    data={data}
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
  />
}

export default DoughunutChart
