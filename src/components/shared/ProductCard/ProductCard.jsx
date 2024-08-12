import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ src, title, description, alias }) => {
    return (
        <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden aspect-[3/5]">
            <Link href={`/products/${alias}`}>
                <div className="h-1/2 flex items-center justify-center bg-gray-100">
                    <Image
                        src={src}
                        alt={title}
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
                    <h4 className="text-md font-medium text-gray-600 text-center mt-2">{description}</h4>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
