const UserTable = ({ userList }) => {
  return (
    <div className="overflow-auto max-h-[75vh]">
      <div className="align-middle inline-block min-w-full">
        <div className="overflow-hidden border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userList.map((user, userIndex) => (
                <tr key={userIndex}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name.first} {user.name.last}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.dob.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
