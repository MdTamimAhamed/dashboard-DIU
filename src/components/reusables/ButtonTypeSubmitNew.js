const ButtonTypeSubmit = ({ type, btn }) => {
  return (
    <div>
      <button
        type={type || 'submit'}
        className='w-full text-center bg-secondaryLight text-headerBlack py-[10px]
        px-4 font-bold rounded-md hover:bg-secondary ease-in duration-150 mt-6 text-white'>
        {btn}
      </button>
    </div>
  );
};

export default ButtonTypeSubmit;
