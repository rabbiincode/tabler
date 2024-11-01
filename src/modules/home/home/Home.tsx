import Dashboard from "../dashboard/Dashboard"
import Navbar from "../../utilities/nav/Navbar"
import Header from "../../utilities/header/Header"

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default Home