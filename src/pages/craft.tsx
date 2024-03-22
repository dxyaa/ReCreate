/*
  
  
    
    const data5 = ['Step 1: Choose an old t-shirt or pair of jeans to make the tote bag from.',
        'Step 2: Lay the t-shirt or jeans flat on a surface. Cut off the sleeves and neckline of the t-shirt, or if using jeans, cut off the legs.',
        'Step 3: Cut two long strips from the excess fabric of the sleeves or legs for the handles. ',
        'Step 4: Attach the Handles:',
        'For the t-shirt: Position the ends of each handle on the inside of the t-shirt, slightly below the neckline. Pin them in place. Sew the handles securely using a sewing machine or hand stitch with a needle and thread.',
        'For jeans: Attach the handles by sewing them to the top edges of the bag, ensuring they are securely attached.',
        'Step 5: Turn the t-shirt or jeans inside out. If using a sewing machine, sew the sides and bottom of the bag, leaving the top open. If hand sewing, use a strong stitch like a backstitch or whipstitch.',
        'Step 6: Trim any excess fabric and threads. If desired, add decorative elements like buttons, fabric paint, or patches to personalize your tote bag.',
        'Step 7: Flip the tote bag right side out, ensuring the handles are on the outside. Your upcycled tote bag is now complete! '
    ]
    const data6 = ['Step 1: Collect old newspapers and ensure you have enough pages to create the size of basket you desire. ',
    'Step 2: Take a full sheet of newspaper and fold it in half horizontally. Cut the folded sheet into thin strips using scissors. Repeat this process for all the newspaper sheets you have.',
    'Step 3: If you want a sturdier base for your basket, cut a circular or square piece of cardboard and set it aside.',
    'Step 4: Take one strip of newspaper and fold it in half lengthwise. Open it up, apply a small amount of glue along the length, and fold it back in half along the glue line. Repeat this process with a few more strips.',
    'Step 5: Take three or four folded newspaper strips and align them horizontally. Take another strip and weave it vertically through the horizontal strips, going under one strip and over the next. Keep the strips close together to form a tight weave. Repeat this process on the opposite side, going under and over the remaining strips. ',
    'Step 6: Once the base is complete, fold the vertical strips upward to form the sides of the basket. Take a new strip of newspaper, apply glue along one end, and attach it to the inside of the basket, overlapping the base and one of the vertical strips. This strip will become the first row of the side. Continue weaving the strips over and under the vertical strips, adding more strips as needed, until you reach the desired height for your basket.',
    'Step 7: When you have reached the desired height, trim any excess newspaper strips. To secure the last row, tuck the ends of the strips inside the basket and glue them down.',
    'Step 8: Allow the basket to dry completely. Once dry, your newspaper basket is ready to use! '
    ]
    const data7 = ['Step 1: Collect old sweaters that you no longer wear or that are destined for disposal. ',
    'Step 2: Measure the dimensions of your pillow insert or pillow. Add an extra inch to each side for seam allowance. ',
    'Step 3: Fold the sweater fabric in half, with the right sides together. Pin the edges together, leaving one side open for inserting the pillow. If you are using a sewing machine, sew along the pinned edges using a straight stitch, removing the pins as you go. Leave a small opening on one side, around 6-8 inches, to insert the pillow.',
    'Step 4: Turn the sweater cover right side out through the opening you left. Gently push the corners out to make them sharp and crisp. Insert the pillow or pillow insert through the opening until it fills the cover completely.',
    'Step 5: Fold the raw edges of the opening inward and pin them together. Use a needle and thread to hand-sew the opening closed using a slip stitch or a ladder stitch. If you are using a sewing machine, carefully stitch the opening closed.',
    'Step 6: Once the opening is securely closed, fluff the pillow inside the cover to distribute the filling evenly.And there you have it! Your sweater pillow cover is complete.'
    ]
    const data8 = ['Step 1: Collect old CDs or DVDs that you no longer need or want.Choose a base object that you would like to decorate, such as a picture frame, mirror frame, or wooden box.',
    'Step 2: Cover your work surface with a protective surface or lay down newspaper to catch any glue or small cuttings.',
    'Step 3: Using a craft knife or scissors, carefully cut the CDs or DVDs into smaller pieces.You can cut them into various shapes and sizes, such as squares, rectangles, triangles, or random abstract shapes. Aim for a mix of sizes to create an interesting mosaic pattern.',
    'Step 4: Experiment with different layouts and patterns to achieve the desired look. You can create geometric patterns, abstract designs, or even depict recognizable shapes or images.',
    'Step 5: Once you are satisfied with the design, begin gluing the CD pieces onto the base object one by one. Apply a small amount of clear-drying glue onto the back of each piece and press it firmly onto the base.',
    'Step 6: After the glue has dried, you can use a soft cloth or sponge to gently clean the surface of the CD mosaic, removing any fingerprints or smudges. Once the CD mosaic is dry and cleaned, it is ready to be displayed.'
    ]*/
"use client";
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import app from "../firebase/firebaseConfig";
import Link from "next/link";
import { useEffect } from "react";
interface DropdownProps {
  title: string;
  data: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3 w-1/2">
      <button
        className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && data && data.length > 0 && (
        <div className=" w-full top-0 mt-2  bg-white border border-gray-300 rounded-md shadow-lg pl-2">
          {data.map((item, index) => (
            <p
              key={index}
              className="py-2 pt-4 hover:bg-gray-100 cursor-pointer"
            >
              <h1 className="font-bold">Step {index + 1}:</h1> {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Craft: React.FC = () => {
  const [ideas, setIdeas] = useState<DropdownProps[]>([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      const db = getFirestore(app);
      const ideasCollection = collection(db, "Ideas");
      const ideasDoc = await getDocs(ideasCollection);
      const ideasData = ideasDoc.docs.map((doc) => {
        const docData = doc.data();
        console.log("name: ", docData.Name);
        console.log("steps: ", docData.Steps);
        return {
          title: docData.Name,
          data: docData.Steps,
        };
      });

      setIdeas(ideasData);
    };

    fetchIdeas();
  }, []);
  return (
    <div className="h-screen bg-black">
      <div className="">
        <div className="text-center text-7xl font-bold ">
          <div className="pt-20 text-indigo-600">Ideas For Sustainability</div>
        </div>
        <div className="w-full flex justify-center pt-20">
          <Link
            href="/add"
            className="w-1/3 p-3 bg-indigo-800 flex justify-center items-center rounded text-white font-bold hover:bg-indigo-700"
          >
            Add Your Own +
          </Link>
        </div>
        <div className="flex flex-col  mt-20 items-center justify-around bg-black">
          {ideas.map((craft, index) => (
            <Dropdown key={index} title={craft.title} data={craft.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Craft;
