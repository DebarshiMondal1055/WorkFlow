import React, { useState } from "react";


export default function Login({loginHandler}){
    const [email,setEmail]=useState('');
    const [password,seetPassword]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        loginHandler(email,password)
        console.log("Form Submitted")
    }
    return(
        <div className="w-screen h-screen bg-[#212121] flex justify-center items-center">
            <div className="border-zinc-400 border-2 rounded-2xl  min-w-md  text-white flex flex-col p-8 gap-10 backdrop-blur-sm bg-white/10">
                    <h2 className="mx-auto text-4xl">Login</h2>
                    <form action="" className="flex flex-col gap-8 "
                        onSubmit={(e)=>{submitHandler(e)}}
                    >
                        <input required type="email" placeholder="email" 
                        className=" border-2 border-amber-50 px-3 py-2.5 rounded-4xl"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <input required type="password" name="" id="" placeholder="password" 
                        className="border-2 border-amber-50 px-3 py-2.5 rounded-4xl"
                        value={password}
                        onChange={(e)=>{seetPassword(e.target.value)}}
                        />
                        <button  className=" border-2 border-green-400 px-3 py-2.5 rounded-4xl min-w-1/3 mx-auto"
                            
                        >LOG IN</button>
                    </form>

            </div>

        </div>
    )
}
