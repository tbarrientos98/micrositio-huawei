import Image from 'next/image';
import React from 'react';

const FlexStore = () => {
    return (
        <div className="container h-64 flex items-center justify-start">
            <div className="flex flex items-center justify-start gap-6">
                <div className="flex flex-col items-center">
                    <Image
                        src="/flexStore/SOHO.png"
                        alt="Imagen 1"
                        width={75}
                        height={150}
                        className="object-cover"
                    />
                    <h3 className="mt-2 text-center text-lg font-semibold text-gray-800 hover:underline hover:cursor-pointer">SME Network
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src="/flexStore/ideahub.png"
                        alt="Imagen 2"
                        width={75}
                        height={150}
                        className="object-cover"
                    />
                    <h3 className="mt-2 text-center text-lg font-semibold text-gray-800 hover:underline hover:cursor-pointer">IdeaHub</h3>
                </div>
            </div>
        </div>
    );
};

export default FlexStore;

