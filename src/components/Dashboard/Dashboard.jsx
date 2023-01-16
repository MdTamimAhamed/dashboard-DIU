import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Store';

const Dashboard = () => {
  const { token, role, retrieveDataFromLocalStorage } = useContext(AuthContext);

  useEffect(() => {
    retrieveDataFromLocalStorage();
  }, []);

  return (
    <div className='ml-8 text-gray '>
      <h1 className=' bg-white w-1/2 h-[300px] p-5'>This is Dashboard</h1>
      <pre>{JSON.stringify({ token, role }, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
