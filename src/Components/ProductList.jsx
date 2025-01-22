import useFetch from "../utils/fetchData";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

function ProductList() {

    // Fetching the Data from the url.
    const {data, error, loading} = useFetch('https://dummyjson.com/products');
    // FilteredProducts is used to filter out the products according to the user's Search Preference.
    const [filteredProducts, setFilteredProducts] = useState([])

    // When The Data Changes we set the FilteredProducts to the products we got from the Fetched Data.
    useEffect(() => {
        data?.products && setFilteredProducts(data.products);
    },[data])

    // Below is the Functiion Created to get the Items which User Searched.
    function searchProduct(value) {
        if (data?.products) {
            const searchedProduct = data.products.filter(product => product.title.toLowerCase().includes(value.trim().toLowerCase()) || product.category.toLowerCase().includes(value.trim().toLowerCase()));
            setFilteredProducts(searchedProduct);
        }
    }

    return (
        <>
            {/* Search Section */}
            <div className="md:px-24 lg:px-16 xl:px-8 flex justify-center md:justify-end">
                {/* Below is the Input Element which is used to Search the List of Products */}
                <input onChange={(e) => searchProduct(e.target.value)}
                    placeholder="Search for products..."
                    className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition duration-200 text-gray-700" 
                    type="text" 
                />
            </div>
            {/* All Products Display Section */}
            <div className="p-5 flex justify-center md:justify-start md:gap-x-10  flex-wrap">
                {/* Below is the map function which is called on filteredProducts. */}
                {/* When Products in data is fetched it will load all the Products in below section */}
                {/* The .map will render the ProductItem component for Each Product */}
                {!loading ? filteredProducts.map(product => {
                    return (
                        // Below here we are providing the unique key to each component for the browser to understand each item 
                        <ProductItem key={product.id} 
                                    link={`/product-detail/${product.id}`} 
                                    product={product}
                        />
                    )
                }) : ( //When the data is not fetched yet, the loading text will appear.
                    <div className="text-3xl font-bold">Loading...</div>
                )}
            </div>
        </>
    );
}

export default ProductList;