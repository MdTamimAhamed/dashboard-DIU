import SearchBar from "../SearchBar/SearchBar"
import {GiHamburgerMenu}  from "react-icons/gi"
import {RiNotification3Line}  from "react-icons/ri"
import profilePic from '../../images/profile.jpg'
import Profile from "../Profile/Profile"
import { useState } from "react"

const TopBar = ({state, setState}) => {

    const [searchText, setSearchText] = useState('')

    const sideberHandler = ()=>{
        state === 'false'? setState('true') : setState('false')
    }
  return (
    <>
        <div className="flex justify-start items-center">
            <div className="flex justify-start items-center w-[320px]">
                    <span onClick={sideberHandler} className="text-2xl text-secondary cursor-pointer"><GiHamburgerMenu/></span>
                    <h1 className='pl-3 uppercase font-bold text-xl text-secondaryShade'>Dashboard</h1>
                </div>
            <div className="flex justify-between items-center w-full">
                <div className="w-1/2">
                    <h1 className="text-lg font-bold text-secondaryShade">Good Morning, User</h1>
                    <p className="text-sm text-lightGray">Lets check your stats today!</p>
                </div>
                <div className="flex justify-start items-center ">
                    <SearchBar
                     state={searchText}
                     setState={setSearchText}
                     placeholder='Search'
                    />
                    <span className="ml-8 text-xl bg-bodyBg p-[0.60rem] rounded-md text-secondary cursor-pointer">
                        <RiNotification3Line/>
                    </span>
                </div>
                <div >
                    <Profile 
                        imgUrl={profilePic}
                        profileTitle = 'User Name'
                        subtitle='Admin'
                        height='40px'
                        width = '40px'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default TopBar