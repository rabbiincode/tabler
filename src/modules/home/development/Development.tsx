// @ts-nocheck
import { Avatar } from '@mui/material'
import { Line } from 'react-chartjs-2'
import { development } from './developmentData'
import { DeleteOutline } from '@mui/icons-material'
import { DevelopmentData } from '../../../interface/development'
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js'
import './_development.scss'

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement)

const Development = () => {
  const lineData = {
    labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        data: [24, 40, 35, 45, 64, 74, 64, 70, 84, 50],
        borderColor: '#5589d3',
        backgroundColor: 'transparent',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    scales: {
      x: {
        display: false, // hide x-axis lines and labels
      },
      y: {
        display: false, // hide y-axis lines and labels
      },
    },
  }

  return (
    <div className='development'>
      <h2>Development Activity</h2>
      <div className='chart'>
        <p><span></span>Purchases</p>
        <Line data={lineData} options={options} />
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Commit</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              development.map((data: DevelopmentData, i: number) => (
                <tr key={i}>
                  <td className='avatar'><Avatar className='icon'/> {data.name}</td>
                  <td>{data.commit}</td>
                  <td>{data.date}</td>
                  <td><DeleteOutline cursor='pointer'/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Development