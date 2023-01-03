import { useState } from 'react'
import TextInputStyled from '../reusables/TextInputStyled'
import ButtonTypeSubmitNew from '../reusables/ButtonTypeSubmitNew'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom"

const Signup = () => {
    const [userName, setUserName] = useState('')
    const [userId, setUserId] = useState('')
    const [section, setSection] = useState('')
    const [batch, setBatch] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>
        <div className="w-full flex justify-center bg-bodyBg">
            <div className="max-[662px]:px-10 container flex justify-between items-center py-5 transition-all duration-300">
                <h1 className="font-bold text-[20px] uppercase text-secondaryShade">Dashboard</h1>
                <p className=' text-gray'>
                    Already a member?
                  <span className='text-optional font-bold cursor-pointer hover:underline pl-2'>
                    <Link to='/'>Login</Link>
                  </span>
                </p>
            </div>
        </div>
        <div className='h-[88vh] w-full flex justify-center items-center flex-col'>
            <form className='min-w-[452px] max-[450px]:min-w-fit shadow-[0px_3px_25px_rgba(0,0,0,0.1)] rounded-md p-10'>
                <div>
                    <h1 className='text-[30px] font-bold text-headerBlack '>Sign up</h1>
                    <p className='text-sm text-lightGray pb-3 pt-2'>Student's sign up only</p>
                </div>
                <TextInputStyled
                value={userName}
                onChange={setUserName}
                type='text'
                placeholder='User name'
                />
                <TextInputStyled
                value={userId}
                onChange={setUserId}
                type='text'
                placeholder='Student ID (xxx-xx-xxxxx)'
                />
                <TextInputStyled
                value={section}
                onChange={setSection}
                type='text'
                placeholder='Section'
                />
                <TextInputStyled
                value={batch}
                onChange={setBatch}
                type='text'
                placeholder='Batch'
                />
                <TextInputStyled
                value={password}
                onChange={setPassword}
                type='password'
                placeholder='Password'
                />
                <ButtonTypeSubmitNew
                type='submit'
                btn = 'Sign up'
                />
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Signup