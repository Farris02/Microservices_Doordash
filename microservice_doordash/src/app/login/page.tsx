import React from "react"
import Image from "next/image"

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-120 mx-auto flex">
        <Image
          src="/Login.png"
          alt=""
          width={250}
          height={250}
          className="w-4/5 h-auto"
        />
        <div className="w-1/5 pr-4">
        </div>
        <div className="w-4/5">
          <h2 className="text-2xl font-semibold mb-6">DoorDash Login</h2>
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md"
                placeholder="********"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





// const LoginPage = () => {
//   return (
//     <div>
//       {/* BOX */}
//       <div className="">
//       {/* IMAGE CONTAINER*/}
//       <div className="relative">
//       <Image src= "/Login.png" alt="" fill className="object-cover"/>

//       </div>
     
//       </div>
//     </div>
//   )
// };

// export default LoginPage;
