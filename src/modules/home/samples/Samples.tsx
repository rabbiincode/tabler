// @ts-nocheck
import { Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import './_samples.scss'

ChartJS.register(ArcElement, Tooltip, Legend)

const Samples = () => {
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [47.25, 33.1, 10.5, 9.0], // percentages for each section
        backgroundColor: ['#1c3353', '#467fcf', '#c5cfde', '#5d8fd5'],
        borderWidth: 1,
      },
    ],
  }

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [63.0, 37.0],
        backgroundColor: ['#5dba2c', '#8ecf4d'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`, // Show percentage in tooltips
        },
      },
    },
  }

  // Adding percentage labels on the chart slices
  const plugins = [
    {
      afterDraw: (chart: any) => {
        const ctx = chart.ctx
        chart.data.datasets.forEach((dataset: any, i: number) => {
          const meta = chart.getDatasetMeta(i)
          meta.data.forEach((element: any, index: number) => {
            // Get the label and percentage value
            const data = dataset.data[index]
            const label = `${data}%`

            // Calculate positioning
            const position = element.tooltipPosition()
            ctx.fillStyle = 'white' // Text color
            ctx.font = 'bold 0.75rem Arial'
            ctx.textAlign = 'center'
            ctx.fillText(label, position.x, position.y)
          })
        })
      },
    },
  ]

  return (
    <div className='samples'>
      <h2>Read our documentation <span>with code samples.</span></h2>
      <div className='details'>
        <div className='detail'>
          <p>Chart Title</p>
          <div className='box'>
            <span>
            <Doughnut data={doughnutData} options={options} plugins={plugins} />
            </span>
          </div>
        </div>
        <div className='detail'>
        <p>Chart Title</p>
        <div className='box'>
          <span>
            <Pie data={pieData} options={options} plugins={plugins} />
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Samples