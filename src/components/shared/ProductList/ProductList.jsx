import React from 'react';
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import products from '@/constants/products.json';

const ProductList = () => {
    // Desestructuro aca los productos y las marcas del json
    const { "SME NETWORK": smeNetwork, "Data Storage": dataStorage, "IdeaHub": ideaHub } = products;

    // Creo funcion con params para pasarle los productos y marca que quiero recorrer
    const renderProductsPorMarca = (brandName, productList) => (
        <div className="my-8 container">
            <div className="flex items-start mb-4">
                <h1 className="text-2xl font-bold text-left flex-1">{brandName}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        src={product.src}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="mx-auto p-6">
            {/* Llamo a la funcion para recorrer pasandole como params el nombre de la marca en el json */}
            {renderProductsPorMarca("SME NETWORK", smeNetwork)}
            {renderProductsPorMarca("Data Storage", dataStorage)}
            {renderProductsPorMarca("IdeaHub", ideaHub)}
        </div>
    );
};

export default ProductList;
