import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ProductItem(props) {
    const product = props.product;  //here we are getting hold of the inidividual product passed by the ProductList Component.
    const dispatch = useDispatch();
    // Below we are getting hold of the ProductDetail Link for each product
    let link = props.link;

    // Below is the Function to add the product to the appStore by the Redux library
    function addToCart() {
        dispatch(addItem({ ...product, quantity: 1 }));
        alert("Item Added to Cart");
    }

    return (
        <>
            {/* Product Card */}
            <div className="block my-2 w-1/2 sm:mx-2 md:mx-1 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-96 transition-transform ease-in-out duration-300 hover:scale-105">
                <div className="w-full h-full border shadow-md rounded-lg flex flex-col">

                    {/* Product Image */}
                    {/* Below Link Tag is used to link the detail of each product */}
                    <Link to={link} className="h-2/3 bg-gray-100 flex justify-center items-center">
                        <img 
                            className="max-h-full max-w-full object-contain" 
                            src={product.images[0]} 
                            alt="product Image" 
                        />
                    </Link>

                    {/* Product Basic Details */}
                    <div className="h-1/3 px-2 py-1 flex flex-col justify-between">
                        {/* Title */}
                        <Link to={link} className="block">
                            <h1 className="text-sm font-medium truncate">{product.title}</h1>
                        </Link>
                        {/* Rating */}
                        <p className="text-xs">Rating: ⭐ {product.rating.toFixed(1)}</p>
                        {/* Price */}
                        <span className="text-sm font-semibold">{product.price} $</span>
                        {/* M.R.P and Discount */}
                        <div className="flex text-xs justify-between">
                            <span>
                                M.R.P: $<span className="line-through">{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
                            </span>
                            <span>({Math.floor(product.discountPercentage)}% off)</span>
                        </div>
                        {/* Shipping Information */}
                        <p className="text-xs text-gray-500">{product.shippingInformation}</p>
                        {/* Availability and Add to Cart button */}
                        {product.availabilityStatus === "In Stock" ? 
                        (
                            <div className="flex justify-center">
                                <button onClick={addToCart} 
                                        type="button" 
                                        className="px-8 py-1 rounded-full bg-yellow-400 text-xs ">Add to Cart
                                </button>
                            </div>
                        ) : 
                        (   //If Product not available Out of Stock will be displayed
                            <p className="text-sm text-center text-red-600">
                                Out of Stock
                            </p>
                        )}
                        
                    </div>
                </div>

            </div>
            
            
        </>
    );
}

export default ProductItem;