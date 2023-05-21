'use client';
import Image from "next/image";
import withAuth from '@/hoc/withAuth';
import { useState, useEffect } from "react";
import UserTable from './components/UserTable/UserTable';
import { getUserList } from '@/api/userList';

const Home = ({ user }) => {
  const [userList, setUserList] = useState([]);
  const [isError, setPageError] = useState(false);

  useEffect(() => {
    getUserList()
      .then(setUserList)
      .catch(() => setPageError(true))
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white w-full">
      <div className="bg-gray-800 px-10 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">Gyro Systems</h1>
          <p className="text-xl text-white capitalize">{`Hello, ${user?.displayName || user.email} !`}</p>
        </div>
      </div>
      <div className="flex flex-row flex-grow">
        <div className="bg-gray-900 w-12 flex flex-col items-center justify-between">
          <div className="mt-10 cursor-pointer">
            {/* {['M1', 'M2', 'M3', 'M4'].map((val) => (
              <p key={val} className="text-white mb-4">{val}</p>
            ))} */}
          </div>
          <div className="mb-10 cursor-pointer">
            <Image width={12} height={12} src="/settings-icon.svg" className="h-6 w-6 text-white" alt="Settings Icon" />
          </div>
        </div>
        <div className="flex-grow p-4">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">User Lists</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Create New
            </button>
          </div>
          {
            isError ? <div className="w-full h-1/2 flex justify-center items-center">API Error</div> : <UserTable userList={userList} />
          }
        </div>
      </div>
    </div>
  ); 
}

export default withAuth(Home);