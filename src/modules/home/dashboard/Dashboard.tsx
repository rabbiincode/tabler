import Slider from "../slider/Slider"
import Samples from "../samples/Samples"
import Development from "../development/Development"
import './_dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Slider/>
      <div className="charts">
        <div className="dev"><Development/></div>
        <div className="dev"><Samples/></div>
      </div>
    </div>
  )
}

export default Dashboard