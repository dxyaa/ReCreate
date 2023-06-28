import Head from 'next/head';
import Link from 'next/link';
import about from '../pages/about';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div>
      <nav className="w-full bg-gray-900">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <span>
                <h2 className="text-2xl text-white font-bold">ReCreate</h2>
              </span>
            </Link>
          </div>
          <div>
            <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link href="/">
                    <span className="text-m text-white hover:bg-gray-800 font-bold py-2 px-4 rounded">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-m text-white hover:bg-gray-800 font-bold py-2 px-4 rounded">About Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-row justify-between py-20">
      <div className="flex flex-col px-10">
          <div className="text-8xl font-bold text-indigo-700 ">
            Sustainability, the pathway to a brighter future!
          </div>
          <div className="text-xl font-bold text-gray-700 mt-6 ml-24  ">
            Recycle smart, save the planet.
          </div>
          <div >
            <Link href="/craft">
              <button className="ml-24 bg-indigo-700 item-center hover:bg-indigo-800 text-gray-300 mt-10 font-bold py-4 rounded w-1/2">
                Get Started!
              </button>
            </Link>
          </div>
        </div>
        <div >
          <img src="https://wallpaperaccess.com/full/1240059.jpg" className="object-scale-down h-110 w-120"></img>
        </div>
      </div>
    </div>
  );
};
