import { useState } from 'react';
import { addUser } from '@/api/addUser';

const UserForm = ({ userInfo, router }) => {
  const [firstName, setFirstName] = useState(userInfo ? userInfo.name.first : '');
  const [lastName, setLastName] = useState(userInfo ? userInfo.name.last : '');
  const [age, setAge] = useState(userInfo ? userInfo.dob.age : '');
  const [address, setAddress] = useState(userInfo ? `${userInfo.location.street.name}, ${userInfo.location.city}, ${userInfo.location.state}, ${userInfo.location.country}` : '');

  const submitHandler = (ev) => {
    ev.preventDefault();
    const data = {
      firstName,
      lastName,
      age,
      address
    };
    addUser(data)
      .then(() => {
        router.push('/');
      });
  };

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <h2 className="text-xl font-bold">Add userInfo</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name:</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Age:</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address:</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>

      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
