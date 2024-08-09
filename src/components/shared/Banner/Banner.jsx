import React from 'react';
import Image from 'next/image';

const Banner = ({
    imageUrl,
    leftTitle,
    leftSubtitle,
    leftButtonText,
    leftButtonText2,
    rightTitle,
    rightSubtitle,
}) => {
    return (
        <div className="container mx-auto p-4">
            <div className="relative w-full h-72 md:h-72 lg:h-72 overflow-hidden rounded-xl shadow-xl">
                <Image
                    src={imageUrl}
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-between p-6 bg-black bg-opacity-40 rounded-xl">
                    <div className="flex flex-col items-start text-left w-1/2">
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{leftTitle}</h1>
                        <h3 className="text-white text-md md:text-md lg:text-md mt-2 font-semibold">{leftSubtitle}</h3>
                        <div className="flex space-x-4 mt-8">
                            <button
                                className="text-md text-white px-6 py-2 rounded-full transition duration-300 hover:bg-gray-700 ease-in-out bg-black cursor-pointer"
                            >
                                {leftButtonText}
                            </button>
                            <button
                                className="border-2 border-gray-800 text-md text-white py-2 px-6 rounded-full transition duration-300 ease-in-out cursor-pointer"
                            >
                                {leftButtonText2}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start text-left w-1/2">
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{rightTitle}</h1>
                        <h3 className="text-white text-md md:text-md lg:text-md mt-2 font-semibold">{rightSubtitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
