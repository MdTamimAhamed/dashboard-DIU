import { FiSearch } from "react-icons/fi"

const SearchBar = ({state,setState,placeholder}) => {
  return (
    <div className="relative">
        <input 
         className='w-[400px] py-2 pl-3 pr-10 rounded-md bg-bodyBg outline-[rgba(0,0,0,0.1)]'
         type="text"
         value={state}
         onChange={(e)=>{setState(e.target.value)}}
         placeholder= {placeholder}
         />
         <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray">
            <FiSearch/>
        </span>
    </div>
  )
}

export default SearchBar