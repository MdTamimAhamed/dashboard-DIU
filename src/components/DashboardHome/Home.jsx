import Sidebar from "../Sidebar/Sidebar"
import TopBar from "../TopBar/TopBar"
import { useState } from "react"
import { Outlet } from "react-router-dom";

const Home = () => {
  const [sideber, setSideBer] = useState('true');

  return (
    <>
        <div className="w-full bg-bodyBg flex flex-col">
            <div className=" bg-white">
              <div className="py-2 mx-8">
                <TopBar
                 state = {sideber}
                 setState = {setSideBer}
                />
              </div>
            </div>
            <div className="flex  mt-4">
              <Sidebar
                state={sideber}
              />
              <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Home