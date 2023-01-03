const TextInput = ({
  value,
  onChange,
  placeholder,
  type,
  disabled,
  required,
}) => {
  return (
    <div className='mt-6'>
      <span className='text-red-500 text-xs font-semibold'>
        {required ? 'Required *' : null}
      </span>
      <div className="relative">
        <input
          required={required}
          className='max-h-max w-full py-[10px] rounded-md px-4 border border-lightGray disabled:cursor-not-allowed
          outline-secondary peer placeholder-transparent'
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
        />
        <div  className=" peer-focus:-top-3 peer-focus:text-[13px] peer-focus:font-medium peer-focus:text-secondary
         text-[rgba(0,0,0,0.6)] absolute left-4 -top-3 text-[13px] pointer-events-none bg-white px-2 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-[16px] ease-in duration-100">
          {placeholder}</div>
      </div>
    </div>
  );
};

export default TextInput;
