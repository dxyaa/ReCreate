
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Link from 'next/link';

export default function about() {
  return (
    <div className="h-screen bg-black">
      
      <div className="pt-20 text-center text-8xl font-bold text-indigo-700 mb-20">
        ReCreate
      </div>

      <div className=" mx-auto flex justify-center ml-10 mr-10 text-center text-xl text-white font-bold ">
        ReCreate is a web application designed to inspire and guide individuals in creating innovative products using waste materials. With a mission to promote sustainability and encourage the reuse of resources,ReCreate provides a lot of ideas and step-by-step guides on transforming discarded materials into unique and practical items.Whether you have leftover fabric scraps, plastic bottles, or old furniture,ReCreate offers a diverse range of project suggestions, ranging from fashion accessories and home decor to practical gadgets and eco-friendly solutions.By harnessing the power of creativity and environmental consciousness,ReCreate empowers users to embrace a greener lifestyle while unlocking endless possibilities for turning waste into valuable creations. Join the community of like-minded individuals, unleash your imagination, and make a positive impact on the planet, one upcycled masterpiece at a time.
      </div>

    </div>
  );

};



