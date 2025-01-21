import { Link } from "react-router-dom";
import useFetch from "../utils/fetchData";
import ProductItem from "./ProductItem";

function ProductList() {

    const {data, error, loading} = useFetch('https://dummyjson.com/products');
    const products = data.products;

    return (
        <>
            <div className="p-2 flex sm:justify-center md:justify-between flex-wrap">
                {!loading ? products.map(product => {
                    return (
                        <ProductItem key={product.id} link={`/product-detail/${product.id}`} product={product}/>
                    )
                }) : (<div className="text-3xl font-bold">Loading...</div>)}
            </div>
        </>
    );
}

export default ProductList;