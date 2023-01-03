import { useState } from 'react'
import TextInputStyled from '../reusables/TextInputStyled'
import ButtonTypeSubmitNew from '../reusables/ButtonTypeSubmitNew'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom"

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>  
        <div className="w-full flex justify-center bg-bodyBg">
            <div className="max-[662px]:px-10 container flex justify-between items-center py-5 transition-all duration-300">
                <h1 className="text-headerBlack font-bold text-[20px] uppercase text-secondaryShade">Dashboard</h1>
                <p className=' text-gray'>
                    New here?
                  <span className='text-optional font-bold cursor-pointer hover:underline pl-2'>
                    <Link to='/sign-up'>Sign up</Link>
                  </span>
                </p>
            </div>
        </div>
        <div className='h-[88vh] w-full flex justify-center items-center flex-col'>
            <form className='min-w-[452px] max-[450px]:min-w-fit shadow-[0px_3px_25px_rgba(0,0,0,0.1)] rounded-md p-10'>
                <div>
                    <h1 className='text-[30px] font-bold text-headerBlack '>Login</h1>
                    <h1 className='text-2xl pt-3 text-headerBlack'>Welcome Back!</h1>
                    <p className='text-sm text-lightGray pb-3 pt-2'>Please login to continue...</p>
                </div>
                <TextInputStyled
                value={userName}
                onChange={setUserName}
                type='text'
                placeholder='User name'
                />
                <TextInputStyled
                value={password}
                onChange={setPassword}
                type='password'
                placeholder='Password'
                />

                <div className='flex justify-between items-center mt-3 pb-5 px-1 '>
                    <div>
                        <input type="checkbox" />
                        <label className='text-gray'> Remember me</label>
                    </div>
                    <p className='text-gray cursor-pointer  text-secondary hover:underline'>Forgot Password?</p>
                </div>

                <ButtonTypeSubmitNew
                type='submit'
                btn = 'Login'
                />
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Login