
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
  const router = useRouter()
  const { loginWithRedirect } = useAuth0()

  // const socket = io("http://localhost:4000");

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log('socket data here ===> ', socket)
  //   })

  // return (
  //   socket.on('disconnect',()=>{
  //     console.log('disconnect id',socket.id)
  //   })
  // )
  // }, [])

  const handleOnsubmit = () => {
    router.push('/chat')
  }
  return (
    <div className="Main p-5">

      <div className="flex justify-center ">
        <span className="font-bold text-center text-3xl ">Login</span>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="inputContainer bg-slate-600 p-6 rounded-lg">
          <div className="inputfield my-2">
            <input
              type="text"
              className="h-10 w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your UserName"
              name="username"
            />
          </div>

          <div className="inputfield my-2">
            <input
              type="number"
              className="h-10 w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your Mobile Number"
              name="username"
            />
          </div>

          <div className="inputfield my-2 -center">
            <button
              type="button"
              className="cursor-pointer rounded bg-slate-200 text-stone-950 text-center font-bold w-28 py-2"
              onClick={() => handleOnsubmit()}
              // onClick={loginWithRedirect}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
