import React from 'react';

function Signup() {
    return (
        <div>
           <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
               <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md sm:max-w-lg sm:rounded-lg">
                   <div className="mt-2 text-center">
                       <h1 className="block text-3xl font-bold text-indigo-600 undefined">Sign Up</h1>
                   </div>
                   <form className="mt-8 space-y-6" action="#" method="POST">
                       {/*Email*/}
                       <div className="mt-4">
                           <label
                               htmlFor="email"
                               className="block text-sm font-medium text-gray-700 undefined"
                           >
                               Email
                           </label>
                           <div className="flex flex-col items-start">
                               <input
                                   type="email"
                                   name="email"
                                   className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               />
                           </div>
                       </div>
                   {/* Password */}
                       <div className="mt-4">
                           <label
                               htmlFor="password"
                               className="block text-sm font-medium text-gray-700 undefined"
                           >
                               Password
                           </label>
                           <div className="flex flex-col items-start">
                               <input
                                   type="password"
                                   name="password"
                                   className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               />
                           </div>
                       </div>
                       <div className="mt-4">
                           <label
                               htmlFor="password_confirmation"
                               className="block text-sm font-medium text-gray-700 undefined"
                           >
                               Confirm Password
                           </label>
                           <div className="flex flex-col items-start">
                               <input
                                   type="password"
                                   name="password_confirmation"
                                   className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               />
                           </div>
                       </div>

                   </form>
                   <button
                       type="submit"
                       className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                   >
                       Sign Up
                   </button>
               {/*Already have an account Sign In*/}
                   <div className="mt-4 text-grey-600 text-center">
                       Already have an account?{" "}
                       <span>
                            <a className="text-purple-600 hover:underline" href="#">
                                Log in
                            </a>
                        </span>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Signup;