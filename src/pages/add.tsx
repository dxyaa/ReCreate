"use client";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import { ChangeEvent } from "react";

const Add = () => {
  const [stepIndex, setStepIndex] = useState<number>(1);
  const [steps, setSteps] = useState<string[]>([""]);

  const addStep = () => {
    setStepIndex((prevIndex) => prevIndex + 1);
    setSteps((prevSteps) => [...prevSteps, ""]);
  };

  const handleStepChange = (index: number, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };
  return (
    <form className="h-screen bg-black text-white flex justify-center items-center flex-col space-y-5">
      <h1 className="font-bold text-4xl text-indigo-600">Add Your Own Idea</h1>
      <div className="flex flex-row pt-5">
        <p>Title : </p>
        <input className="p-1 rounded ml-2 text-black"></input>
      </div>
      <h2 className="font-bold">Enter steps on how to make it : </h2>
      {steps.map((step, index) => (
        <div
          key={index}
          className="w-full flex justify-center text-center flex-row"
        >
          <div>Step {index + 1} :</div>
          <input
            className="w-1/2 p-1 text-black ml-2 rounded"
            value={step}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleStepChange(index, e.target.value)
            }
          />
        </div>
      ))}
      <button
        className="p-2 bg-indigo-700 rounded hover:bg-indigo-600"
        onClick={addStep}
      >
        Add steps +
      </button>
      <button className="w-1/4 p-2 bg-indigo-700 hover:bg-indigo-600  rounded uppercase font-bold">
        Submit
      </button>
    </form>
  );
};

export default Add;
