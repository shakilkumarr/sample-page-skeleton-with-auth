import Image from "next/image";
import { signInWithGoogle } from "../../auth/firebase";

const LoginForm = () => (
  <div className="bg-white shadow-lg rounded px-8 py-12 flex flex-col w-1/3 h-1/2 mx-auto">
    <div className="mb-6 text-center">
      <h1 className="text-xl mb-2">Welcome back to Gyro Systems!</h1>
    </div>

    <h2 className="text-lg my-4 text-center">Sign In With</h2>
    <div className="flex justify-between">
      {
        [{key: '/google-icon.svg', label: 'GOOGLE', handler: signInWithGoogle}, {key: '/meta-icon.svg',  label: 'META', handler: () => {}}].map(({ key, label, handler }) => (
          <button onClick={handler} key={key} className="border border-gray-300 text-gray-500 py-2 px-4 rounded flex items-center w-1/2 mx-auto h-8 mr-4">
              <Image width={22} height={22} src={key} className="mr-2" alt="Google Icon" />
              <div className="text-base pl-4 tracking-wide">{label}</div>
          </button>
        ))
      }
    </div>

    <div className="relative my-8">
      <div className="absolute left-0 right-0 flex items-center justify-center">
        <span className="bg-white px-3 text-sm text-gray-600">OR USING</span>
      </div>
      <div className="border-t border-gray-300 mt-2"></div>
    </div>

    <div className="mb-4">
      <input className="h-8 text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Email Address" />
    </div>
    <div className="mb-6">
      <input className="h-8 text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
    </div>

    <div className="mb-6">
      <button className="h-8 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full text-sm tracking-wider">
        LOG IN
      </button>
    </div>

    <div className="flex items-center justify-between">
      <a className="inline-block align-baseline font-semibold underline text-xs text-blue-500 hover:text-blue-800" href="#">
        FORGOT PASSWORD?
      </a>
      <a className="inline-block align-baseline font-semibold underline text-xs text-blue-500 hover:text-blue-800" href="#">
        CREATE ACCOUNT
      </a>
    </div>
  </div>
);

export default LoginForm;
