import React from "react";

export default function NewTask({data}){
    return(
        <div className="flex-shrink-0 border-2 w-[350px] h-100 bg-red-500 rounded-xl px-4 py-2 flex flex-col gap-5 items-start">
                <div className="w-full flex justify-between">
                <h2 className="text-xl ">{data.task_date}</h2>
                {/* <button className="bg-gray-500 px-2.5 py-0.8 rounded-[50%]">X</button> */}
                </div>
                <h1 className="text-4xl font-medium">{data.title}</h1>
                <p>{data.description}</p>
                <button  className="border-2 border-black bg-green-500 rounded-2xl text-black py-2 px-2.5 mt-20" >Accept Task</button>
        </div>
    )
}