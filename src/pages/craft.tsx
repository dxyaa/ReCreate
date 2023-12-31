
"use client";
import 'tailwindcss/tailwind.css';
import { useState } from 'react';

export default function Craft() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);


    const data1 = ['Step 1: Clean an empty tin can. Wash it thoroughly with soap and water, and remove any labels or residue.',
        'Step 2: Measure the height of the tin can and cut a piece of decorative paper or fabric that is slightly longer than the height and wide enough to wrap around the can.',
        'Step 3: Apply glue to the backside of the decorative paper or fabric. ',
        'Step 4: Carefully wrap the decorative paper or fabric around the tin can, starting from the bottom and aligning the edges.',
        'Step 5: Smooth out any wrinkles or bubbles and trim any excess paper or fabric at the top or bottom of the can.',
        'Step 6: Paint the can with acrylic paint, use markers to draw designs, or attach stickers, ribbons, or buttons.',
        'Step 7: Once the pencil holder is dry, place your pens, pencils, markers, or other stationery items inside the can.'];
    const data2 = ['Step 1: Cut a wooden frame or a cardboard to the desired size and shape for your jewelry organizer.',
        'Step 2: Cut a piece of fabric or decorative paper that is slightly larger than the size of the base. Apply craft glue or use a hot glue gun to attach the fabric or paper to the front surface of the base. ',
        'Step 3: Smooth out any wrinkles or bubbles and trim any excess paper or fabric around the edges of the base.',
        'Step 4: Cut pieces of ribbon, strings, or attach hooks to the top or sides of the base. These will be used to hang your necklaces, bracelets, or earrings.',
        'Step 5: Use craft glue or hot glue gun to secure the ribbons, strings, or hooks to the back of the base.',
        'Step 6: Paint the wooden frame or cardboard, use markers to add designs or patterns, or attach stickers, ribbons, or other embellishments.',
        'Step 7: Once the jewelry organizer is dry, hang your necklaces, bracelets, or earrings on the ribbons, strings, or hooks. '];
    const data3 = ['Step 1: Choose a suitable material for the coaster base, such as cardboard, old tiles, or cork. Cut it into desired shapes and sizes for your coasters.',
        'Step 2: Use decorative paper,fabric scraps or paint to make the coaster more attractive.',
        'Step 3: To protect your coasters and make them more durable, you can apply a clear varnish or Mod Podge over the decorated surface. This will seal the design and make the coasters water-resistant.',
        'Step 4: Trim any excess material or make any necessary touch-ups to ensure a neat and polished appearance.',
        'Step 5: Allow the coasters to fully cure and dry according to the instructions provided by the adhesive, paint, or sealant you used.',
        'Step 6: Place your homemade coasters on your coffee table, dining table, or any other surface where you would like to protect against drink rings.'
    ]
    const data4 = ['Step 1: Cut a piece of cardboard into a rectangular shape, typically measuring around 2 inches by 6 inches.',
        'Step 2: Use decorative paper,fabric scraps or paint to decorate the base.',
        'Step 3: Once the glue or paint has dried, trim any excess paper, fabric, or cardboard to ensure a clean and uniform shape for your bookmark.',
        'Step 4: Near the top of the bookmark, use a hole punch or a sharp object like a needle to create a hole.',
        'Step 5: Cut a piece of ribbon, yarn, or string. Thread one end through the hole from the front to the back, and then bring it back through the hole from the back to the front and tie the ends together in a knot or bow.',
        'Step 6: Allow the glue to dry completely.Your homemade bookmark is now ready to use!'];
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
    ]

    const toggle1Dropdown = () => {
        setIsOpen1(!isOpen1);
    };
    const toggle2Dropdown = () => {
        setIsOpen2(!isOpen2);
    };
    const toggle3Dropdown = () => {
        setIsOpen3(!isOpen3);
    };
    const toggle4Dropdown = () => {
        setIsOpen4(!isOpen4);
    };
    const toggle5Dropdown = () => {
        setIsOpen5(!isOpen5);
    };
    const toggle6Dropdown = () => {
        setIsOpen6(!isOpen6);
    };
    const toggle7Dropdown = () => {
        setIsOpen7(!isOpen7);
    };
    const toggle8Dropdown = () => {
        setIsOpen8(!isOpen8);
    };

    return (
        <div className="h-screen bg-black">
            <div className="">
                <div className="text-center text-7xl font-bold ">
                    <div className="pt-20 text-indigo-600">
                    Ideas For Sustainability
                    </div>
                </div>
                <div className="flex flex-col  mt-20 items-center justify-around bg-black">
                    <div className="w-3/4">
                        <button id="dropdown1"
                            className="py-5 px-4 bg-indigo-800 text-l w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle1Dropdown}
                        >
                            PENCIL HOLDER
                        </button>
                        {isOpen1 && (
                            <div className="w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data1.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 ">
                        <button id="dropdown2"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600 "
                            onClick={toggle2Dropdown}
                        >
                            JEWELLERY ORGANIZER
                        </button>
                        {isOpen2 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data2.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 ">
                        <button id="dropdown3"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle3Dropdown}
                        >
                            COASTER
                        </button>
                        {isOpen3 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data3.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 ">
                        <button id="dropdown4"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle4Dropdown}
                        >
                            BOOKMARK
                        </button>
                        {isOpen4 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data4.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 ">
                        <button id="dropdown5"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle5Dropdown}
                        >
                            TOTE BAG
                        </button>
                        {isOpen5 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data5.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 ">
                        <button id="dropdown6"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle6Dropdown}
                        >
                            NEWSPAPER BASKET
                        </button>
                        {isOpen6 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data6.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4">
                        <button id="dropdown7"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle7Dropdown}
                        >
                            SWEATER PILLOW COVERS
                        </button>
                        {isOpen7 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data7.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 w-3/4 mb-10">
                        <button id="dropdown8"
                            className="py-5 px-4 bg-indigo-800 w-full text-white font-bold rounded-md hover:bg-white hover:text-indigo-600"
                            onClick={toggle8Dropdown}
                        >
                            CD MOSAIC
                        </button>
                        {isOpen8 && (
                            <div className=" w-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg pl-2">
                                {data8.map((item, index) => (
                                    <p key={index} className="py-2 pt-4 hover:bg-gray-100 cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

