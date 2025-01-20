import useFetch from "../utils/fetchData";
import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList() {

    const {data, error, loading} = useFetch('https://dummyjson.com/products');
    const products = data.products;
    console.log(products)

    return (
        <>
            <div className="p-2 flex sm:justify-center md:justify-between flex-wrap">
                {!loading ? products.map(product => {
                    return <ProductItem key={product.id} product={product}/>
                }) : (<div>Loading...</div>)}
            </div>
        </>
    );
}

export default ProductList;