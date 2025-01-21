import { useParams, Link } from "react-router-dom";
import useFetch from '../utils/fetchData'
import { useEffect, useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
    const [items, setItems] =  useState(1); //This is the options useState
    const params = useParams();
    const { data, error, loading } = useFetch('https://dummyjson.com/products');
    const products = !loading ? data.products : [];
    const product = !loading ? products.find(product => product.id == params.id) : []; //this is the product from the fetchData
    const allItems = useSelector(state => state.cart.items);
    const item = allItems.find(item => item.id === product?.id); //This is the item from the cart
    const dispatch = useDispatch();
    const optionArray = [1,2,3,4,5,6,7,8,9,10];

    useEffect(() => {
        (item?.quantity) && setItems(item.quantity);
    }, [item]);
    

    function handleChange(value) {
        setItems(value)
    }

    function addToCart() {
        dispatch(addItem({ ...product, quantity: items }));
        alert("Item Added to Cart");
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    return (
        <>
            {product.length!=0 ? (
                <div className="border-2 p-4 flex flex-col md:flex-row gap-6 shadow-lg rounded-md">
                    {/* Product Image Section */}
                    <div className="w-full h-full md:w-1/2 flex flex-col justify-between">
                        <div className="px-5 h-10 md:h-24 flex items-center">
                            {/* Wrapping the Link directly around the image */}
                            <Link to="/" className="inline-block">
                                <img 
                                    className="object-contain h-8 w-8 md:h-12 md:w-12" 
                                    src="/back-button.jpg" 
                                    alt="back-button image" 
                                />
                            </Link>
                        </div>
                        <img
                            className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                            src={product.images[0]}
                            alt="Product"
                        />
                        <div className="md:h-1/3"></div>
                    </div>



                    {/* Product Details Section */}
                    <aside className="w-full md:w-1/2 flex flex-col gap-4">
                        {/* Product Title */}
                        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
                
                        {/* Availability and Rating */}
                        <p className={`font-medium ${product.availabilityStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                            {product.availabilityStatus === "In Stock" ? "In Stock" : "Out of Stock"}
                        </p>
                        <p className="text-sm text-gray-600">Rating: ⭐ {product.rating.toFixed(1)}</p>
                
                        {/* Price and Discount */}
                        <div className="text-lg font-semibold text-gray-800">
                            <span>{product.price} $</span>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                                <span>
                                    M.R.P: $<span className="line-through">{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
                                </span>
                                <span className="text-red-500 font-medium">
                                    ({Math.floor(product.discountPercentage)}% off)
                                </span>
                            </div>
                        </div>

                        {/* Add to Cart button */}
                        {product.availabilityStatus === "In Stock" &&
                        (
                            <div className="flex justify-center gap-5">
                                <select value={items} className="px-2 rounded-full text-sm" onChange={(e) => handleChange(e.target.value)}>
                                    {optionArray.map(num => {
                                        return (<option key={num} value={num} >{num}</option>);
                                    })}
                                </select>
                                <button onClick={addToCart} type="button" className="px-10 py-1 rounded-full bg-yellow-400 text-sm ">Add to Cart</button>
                            </div>
                        )}
                        

                
                        {/* Return Policy */}
                        <p className="text-sm text-gray-700">
                            <strong>Return Policy:</strong> {product.returnPolicy}
                        </p>
                
                        {/* Description */}
                        <p className="text-sm text-gray-700">
                            <strong>Description:</strong> {product.description}
                        </p>
                
                        {/* Shipping Information */}
                        <p className="text-xs text-gray-500">{product.shippingInformation}</p>
                
                        {/* Reviews Section */}
                        <div className="mt-4">
                            <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
                            <ul className="mt-2 space-y-4">
                                {product.reviews.map((review, index) => (
                                    <li key={index} className="p-4 border rounded-lg bg-white shadow-md">
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium text-gray-800">{review.reviewerName}</p>
                                            <p className="text-sm text-gray-500">{review.date.split("T")[0]}</p>
                                        </div>
                                        <p className="text-sm text-yellow-500">⭐ {review.rating}</p>
                                        <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
            </div>
            
            ) : (
                <div className="h-screen flex justify-center my-32 text-3xl font-bold">Loading...</div>
            )}
        </>
    );
}

export default ProductDetail;