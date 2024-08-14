"use client";
import React, { useState } from 'react';
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import products from '@/constants/products.json';
import Image from 'next/image';

const Page = () => {
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([
        ...(products["SME NETWORK"] || []),
        ...(products["Data Storage"] || []),
        ...(products["IdeaHub"] || []),
    ]);

    // Filtrar productos por marca seleccionada
    const handleFilter = (brand) => {
        setSelectedBrand(brand);
        setSelectedCategory('all');
        if (brand === 'all') {
            setFilteredProducts([
                ...(products["SME NETWORK"] || []),
                ...(products["Data Storage"] || []),
                ...(products["IdeaHub"] || []),
            ]);
        } else {
            setFilteredProducts(products[brand] || []);
        }
    };

    // Filtra los productos por categoria
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredProducts(products[selectedBrand] || []);
        } else {
            const filtered = (products[selectedBrand] || []).filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    // Obtener categorias en funcion de la amrca que se elija
    const getCategoriesForBrand = () => {
        if (selectedBrand === 'all') {
            return [];
        }
        const uniqueCategories = new Set(products[selectedBrand]?.map(product => product.category));
        return Array.from(uniqueCategories);
    };

    const categories = getCategoriesForBrand();

    return (
        <>
            <div className="container h-64 flex flex-col items-start mt-6 p-6">
                <div className="flex items-center justify-start gap-6">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/flexStore/datastorageflex.png"
                            alt="Data Storage"
                            width={75}
                            height={150}
                            className="object-cover"
                        />
                        <h3
                            className={`mt-2 text-center text-lg font-semibold hover:underline hover:cursor-pointer ${selectedBrand === 'Data Storage' ? 'text-red-600 underline' : 'text-gray-800'} hover:text-red-600`}
                            onClick={() => handleFilter("Data Storage")}
                        >
                            Data Storage
                        </h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/flexStore/SOHO.png"
                            alt="SME Network"
                            width={75}
                            height={150}
                            className="object-cover"
                        />
                        <h3
                            className={`mt-2 text-center text-lg font-semibold hover:underline hover:cursor-pointer ${selectedBrand === 'SME NETWORK' ? 'text-red-600 underline' : 'text-gray-800'} hover:text-red-600`}
                            onClick={() => handleFilter("SME NETWORK")}
                        >
                            SME Network
                        </h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/flexStore/ideahub.png"
                            alt="IdeaHub"
                            width={75}
                            height={150}
                            className="object-cover"
                        />
                        <h3
                            className={`mt-2 text-center text-lg font-semibold hover:underline hover:cursor-pointer ${selectedBrand === 'IdeaHub' ? 'text-red-600 underline' : 'text-gray-800'} hover:text-red-600`}
                            onClick={() => handleFilter("IdeaHub")}
                        >
                            IdeaHub
                        </h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            className={`mt-2 px-6 py-3 border border-red-600 ${selectedBrand === 'all' ? 'bg-red-600 text-white' : 'text-red-600 bg-transparent'} rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors`}
                            onClick={() => handleFilter("all")}
                        >
                            All Products
                        </button>
                    </div>
                </div>

                {/* Flex de categorias */}
                <div className="flex items-center justify-start gap-6 mt-6">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div className="flex flex-col items-center" key={category}>
                                <p
                                    className={`mt-2 text-lg cursor-pointer hover:underline transition-colors ${selectedCategory === category ? 'text-red-600' : 'text-gray-500'} hover:text-red-600`}
                                    onClick={() => handleCategoryFilter(category)}
                                >
                                    {category}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-lg text-gray-600">Select a brand to see categories.</p>
                    )}
                    {selectedBrand !== 'all' && (
                        <div className="flex flex-col items-center">
                            <p
                                className={`mt-2 cursor-pointer hover:underline transition-colors ${selectedCategory === 'all' ? 'text-red-500' : 'text-gray-600'} hover:text-gray-800`}
                                onClick={() => handleCategoryFilter("all")}
                            >
                                All
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mx-auto p-6 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.alias}
                            src={product.src}
                            title={product.title}
                            description={product.description}
                            alias={product.alias}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Page;
