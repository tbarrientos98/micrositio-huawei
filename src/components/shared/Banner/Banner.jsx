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
            <div className="w-full h-64 md:h-64 lg:h-81 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={imageUrl}
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-between p-6 bg-black bg-opacity-40">
                    <div className="flex flex-col items-start text-left w-1/2">
                        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl">{leftTitle}</h1>
                        <h3 className="text-white text-md md:text-md lg:text-md mt-2 font-bold">{leftSubtitle}</h3>
                        <div className="flex space-x-4 mt-8">
                            <button
                                className="mt-2 text-md text-white px-6 rounded-full py-1 transition duration-300 hover:bg-gray-800 ease-in-out bg-black cursor-pointer"
                            >
                                {leftButtonText}
                            </button>
                            <button
                                className="border b-2 border-gray-800 mt-2 text-md text-white py-1 px-6 rounded-full transition duration-300 ease-in-out cursor-pointer"
                            >
                                {leftButtonText2}
                            </button>
                        </div>
                    </div>
                   
                    <div className="flex flex-col items-start text-left w-1/2">
                        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl">{rightTitle}</h1>
                        <h3 className="text-white text-md md:text-md lg:text-md mt-2 font-bold">{rightSubtitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
