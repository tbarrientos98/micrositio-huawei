import React from 'react';
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import products from '@/constants/products.json';

const ProductList = () => {
    // Desestructuro los productos y las marcas del JSON
    const { "SME NETWORK": smeNetwork, "Data Storage": dataStorage, "IdeaHub": ideaHub } = products;

    // Funcion para renderizar los productos por marca
    const renderProductsPorMarca = (brandName, productList) => (
        <div className="my-8 container">
            <div className="flex items-start mb-4">
                <h1 className="text-2xl font-bold text-left flex-1">{brandName}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {productList.map((product) => (
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
    );

    return (
        <div className="mx-auto p-6">
            {renderProductsPorMarca("SME NETWORK", smeNetwork)}
            {renderProductsPorMarca("Data Storage", dataStorage)}
            {renderProductsPorMarca("IdeaHub", ideaHub)}
        </div>
    );
};

export default ProductList;
