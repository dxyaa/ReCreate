"use client";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import { ChangeEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../firebase/firebaseConfig";

const Add = () => {
  const [stepIndex, setStepIndex] = useState<number>(1);
  const [steps, setSteps] = useState<string[]>([""]);
  const [title, setTitle] = useState<string>("");

  const db = getFirestore(app);
  const ideasCollection = collection(db, "Ideas");

  const addStep = () => {
    if (steps.length < 8) {
      setStepIndex((prevIndex) => prevIndex + 1);
      setSteps((prevSteps) => [...prevSteps, ""]);
    }
  };

  const handleStepChange = (index: number, value: string) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };
  const handleSubmit = async () => {
    if (title.trim() === "" || steps.some((step) => step.trim() === "")) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const docRef = await addDoc(ideasCollection, {
        Name: title,
        Steps: steps.filter((step) => step.trim() !== ""),
      });
      console.log("Document written with ID: ", docRef.id);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <form className="h-screen bg-black text-white flex justify-center items-center flex-col space-y-5">
      <h1 className="font-bold text-4xl text-indigo-600">Add Your Own Idea</h1>
      <div className="flex flex-row pt-5">
        <p>Title : </p>
        <input
          className="p-1 rounded ml-2 text-black"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
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
        type="button"
        className={`p-2 bg-indigo-700 rounded hover:bg-indigo-600 ${
          steps.length >= 8 && "cursor-not-allowed opacity-50"
        }`}
        onClick={addStep}
        disabled={steps.length >= 10}
      >
        Add steps +
      </button>
      {steps.length >= 8 && (
        <p className="text-red-400">Maximum number of steps is 8</p>
      )}
      <button
        onClick={handleSubmit}
        type="button"
        className="w-1/6 p-2 border-4 text-indigo-400  hover:text-white border-indigo-800 hover:bg-indigo-800  rounded-full uppercase font-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default Add;
