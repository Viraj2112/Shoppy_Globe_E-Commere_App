import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ProductItem(props) {
    const product = props.product;
    const dispatch = useDispatch();
    let link = props.link;

    function addToCart() {
        dispatch(addItem({ ...product, quantity: 1 }));
        alert("Item Added to Cart");
    }

    return (
        <>
            <div className="block my-2 w-1/2 sm:mx-2 md:mx-1 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-96">
                <div className="w-full h-full border shadow-md rounded-lg flex flex-col">
                    <Link to={link} className="h-2/3 bg-gray-100 flex justify-center items-center">
                        <img 
                            className="max-h-full max-w-full object-contain" 
                            src={product.images[0]} 
                            alt="product Image" 
                        />
                    </Link>
                    <div className="h-1/3 px-2 py-1 flex flex-col justify-between">
                        <Link to={link} className="block">
                            <h1 className="text-sm font-medium truncate">{product.title}</h1>
                        </Link>
                        <p className="text-xs">Rating: ⭐ {product.rating.toFixed(1)}</p>
                        <span className="text-sm font-semibold">{product.price} $</span>
                        <div className="flex text-xs justify-between">
                            <span>
                                M.R.P: $<span className="line-through">{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
                            </span>
                            <span>({Math.floor(product.discountPercentage)}% off)</span>
                        </div>
                        <p className="text-xs text-gray-500">{product.shippingInformation}</p>
                        {product.availabilityStatus === "In Stock" ? 
                        (
                            <div className="flex justify-center">
                                <button onClick={addToCart} type="button" className="px-8 py-1 rounded-full bg-yellow-400 text-xs ">Add to Cart</button>
                            </div>
                        ) : 
                        (
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