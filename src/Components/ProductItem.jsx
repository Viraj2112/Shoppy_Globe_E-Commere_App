import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ProductItem(props) {
    const product = props.product;
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items, shallowEqual);

    function dosomething() {
       dispatch(addItem(product))
    }


    return (
        <>
            <div className="w-full h-full border shadow-md rounded-lg flex flex-col">
                <div className="h-2/3 bg-gray-100 flex justify-center items-center">
                    <img 
                        className="max-h-full max-w-full object-contain" 
                        src={product.images[0]} 
                        alt="product Image" 
                    />
                </div>
                <div className="h-1/3 px-2 py-1 flex flex-col justify-between">
                    <h1 className="text-sm font-medium truncate">{product.title}</h1>
                    <p className="text-xs">Rating: ⭐ {product.rating.toFixed(1)}</p>
                    <span className="text-sm font-semibold">{product.price} $</span>
                    <div className="flex text-xs justify-between">
                        <span>
                            M.R.P: $<span className="line-through">{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
                        </span>
                        <span>({Math.floor(product.discountPercentage)}% off)</span>
                    </div>
                    <p className="text-xs text-gray-500">{product.shippingInformation}</p>
                    <div className=" flex justify-center">
                        <button onClick={dosomething} className="px-5 rounded-full bg-yellow-300 text-xs" type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default ProductItem;