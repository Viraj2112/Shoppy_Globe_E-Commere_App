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
                        <Link to={`/product-detail/${product.id}`} key={product.id} className="block my-2 w-1/2 sm:mx-2 md:mx-1 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-96">
                            <ProductItem product={product}/>
                        </Link>
                    )
                }) : (<div className="text-3xl font-bold">Loading...</div>)}
            </div>
        </>
    );
}

export default ProductList;