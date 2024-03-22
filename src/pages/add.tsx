"use client";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
const Add = () => {
  const index = 1;
  return (
    <div className="h-screen bg-black text-white  flex justify-center items-center flex-col space-y-5">
      <h1 className="font-bold text-4xl text-indigo-600">Add Your Own Idea</h1>
      <div className="flex flex-row pt-5">
        <p>Title : </p>
        <input className="p-1 rounded ml-2 text-black"></input>
      </div>
      <h2 className="font-bold">Enter steps on how to make it : </h2>
      <div className=" w-full flex justify-center text-center flex-row">
        <div>Step {index} :</div>
        <input className="w-1/2 p-1 text-black ml-2 rounded"></input>
      </div>
      <button className="p-2 bg-indigo-700 rounded hover:bg-indigo-600 ">
        Add steps +
      </button>
    </div>
  );
};

export default Add;
