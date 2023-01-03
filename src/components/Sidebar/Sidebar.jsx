import { Link, } from "react-router-dom"
import { FaChalkboardTeacher} from "react-icons/fa"
import { AiFillProject} from "react-icons/ai"
import { MdDashboard,MdAdminPanelSettings,MdSupervisorAccount, 
    MdRoomPreferences, MdDescription, MdSettings, MdHelp} from "react-icons/md"

const Sidebar = ({state}) => {
    const navs = [
        {id:1, title:'Dashboard', path:'dashboard', icon : <MdDashboard/>},
        {id:2, title:'Admins', path:'admin', icon : <MdAdminPanelSettings/>},
        {id:3, title:'Supervisors', path:'supervisors', icon : <FaChalkboardTeacher/>},
        {id:4, title:'Students ', path:'students', icon : <MdSupervisorAccount/>},
        {id:5, title:'Projects ', path:'projects', icon : <AiFillProject/>},
        {id:6, title:'Preference List', path:'preference-list', icon: <MdRoomPreferences/>},
        {id:7, title:'Preference Description', path:'preference-description', icon: <MdDescription/>}
    ]

    const prefs = [
        {id:1, title:'Settings', path:'settings', icon : <MdSettings/>},
        {id:2, title:'Support', path: 'support', icon : <MdHelp/>}
    ]

  return (
    <>
        <div className={`w-[320px] h-screen bg-secondary transition-all ease-in-out duration-300 ${state==='true'? '': 'w-[110px]'} `}>
            <div className={`mx-4 ${state==='true'? '': 'mx-2'}`}>
                <div>
                    <ul className="mt-4">
                        {
                            navs.map((item) =>(
                                <li key={item.id}
                                    className={`group mt-2 rounded-md px-3 py-3 font-sm hover:bg-white hover:text-white ease-in duration-100 cursor-pointer`}>
                                    <Link className={`flex justify-start items-centerfont-medium group-hover:text-secondary text-bodyBg
                                    ${state==='true'? '': 'flex-col items-center'}`} to={`${item.path}`} >
                                        <span className="text-xl pr-2">{item.icon}</span><span className={`text-bodyBg group-hover:text-secondary font-medium ${state==='true'? '': 'text-[13px] font-medium'}`}>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="border-b-2 border-[rgba(255,255,255,0.2)] px-3 mt-5"></div>
                <p className={` mt-3  text-[rgba(255,255,255,0.5)]  font-medium ${state==='true'? 'px-3': 'text-[12px] px-1 text-center'}`}>Preferences</p>
                <ul>
                    {
                         prefs.map((item) =>(
                            <li key={item.id}
                                className={`group mt-2 rounded-md py-2 font-sm hover:bg-white hover:text-white ease-in duration-100 cursor-pointer`}>
                                <Link className={`flex justify-start items-center px-3 font-medium group-hover:text-secondary text-bodyBg
                                ${state==='true'? '': 'flex-col items-center'}`} to={`${item.path}`} ><span className="text-xl pr-2">{item.icon}</span>
                                <span className={`text-bodyBg group-hover:text-secondary font-medium ${state==='true'? '': 'text-[13px] font-medium'}`}>{item.title}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar