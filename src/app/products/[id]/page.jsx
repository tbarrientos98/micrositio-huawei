"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import products from '@/constants/products.json';

const ProductDetail = ({ params }) => {
    const { id } = params;
    const product = findProductById(id);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedSection, setSelectedSection] = useState('Overview');

    if (!product) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div className="text-center">
                    <Image
                        src="/brand/logo-huawei.png"
                        alt="Product not found"
                        width={500}
                        height={300}
                    />
                    <br />
                    <h1 className="text-3xl font-bold">Product not found</h1>
                    <br />
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 container mx-auto">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                    <Image
                        src={product.src}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="object-cover max-w-xl h-auto"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        {product.title} {selectedModel ? ` ${selectedModel.name}` : ''}
                    </h1>
                    <p className="text-lg mb-4 text-gray-500 font-bold">{product.description}</p>

                    <div className="my-6 flex justify-center">
                        <hr className="w-9/12 border-t-2 border-gray-300" />
                    </div>

                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <h1 className="text-xl font-bold text-gray-800">Select model</h1>
                        {product.models && product.models.map((model, index) => (
                            <button
                                key={index}
                                className={`py-6 px-4 border border-gray-500 rounded-xl w-full transition-colors duration-300 ${selectedModel === model ? 'border-slate-900 border-2' : 'bg-transparent text-black'}`}
                                onClick={() => setSelectedModel(model)}
                            >
                                {model.name}
                            </button>
                        ))}

                        <button
                            className="bg-red-600 text-xl w-full border border-white text-white px-8 py-4 rounded-full mt-2 mb-2 transition duration-300 ease-in-out hover:bg-rose-600"
                        >
                            Consult a Nearby Distribution Partner
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <hr className="w-full border-t-2 border-gray-300 mb-4" />

                <div className="flex justify-around text-center">
                    {['Overview', 'Specifications', 'Documentation'].map(section => (
                        <div
                            key={section}
                            className={`cursor-pointer text-lg font-bold transition-all duration-300 ${selectedSection === section ? 'text-red-600 underline decoration-red-600' : 'text-gray-600'}`}
                            onClick={() => setSelectedSection(section)}
                        >
                            {section}
                        </div>
                    ))}
                </div>

                <hr className="w-full border-t-2 border-gray-300 mt-4" />

                <div className="mt-6">
                    {selectedSection === 'Overview' && (
                        <div>
                            <h2 className="text-2xl font-bold">Product Overview</h2>
                            <br />
                            <div className="flex justify-center">
                                {product.overview ? (
                                    <Image
                                        width={1200}
                                        height={400}
                                        src={product.overview}
                                        alt="Product Overview"
                                    />
                                ) : (
                                    <p className="text-gray-500">No overview available</p>
                                )}
                            </div>
                        </div>
                    )}
                
                {selectedSection === 'Specifications' && (
                    <div className="bg-gray-100 p-6">
                        <h2 className="text-2xl font-bold">Product Specifications</h2>
                        <div className="p-4">
                            {product.specifications && Object.entries(product.specifications).length > 0 ? (
                                Object.entries(product.specifications).map(([key, value], index) => (
                                    <>
                                        <div key={index} className="mb-2">
                                            <span className="font-bold">{key}:</span> {value}
                                        </div>
                                        <div className="my-6 flex justify-center">
                                            <hr className="w-full border-t-2 border-gray-300" />
                                        </div>
                                    </>
                                ))
                            ) : (
                                <p>No specification for this product</p>
                            )}
                        </div>
                    </div>
                )}
                {selectedSection === 'Documentation' && (
                    <div>
                        <h2 className="text-2xl font-bold">Product Documentation</h2>
                        {/* Aca voy a colocar pdfs */}
                    </div>
                )}
            </div>
        </div>
        </div >
    );
};

const findProductById = (id) => {
    for (const [brand, productList] of Object.entries(products)) {
        const product = productList.find(p => p.alias === id);
        if (product) return product;
    }
    return null;
};

export default ProductDetail;
