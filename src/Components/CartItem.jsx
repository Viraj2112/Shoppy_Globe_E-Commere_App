import { useEffect, useState } from "react";
import { deleteItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function CartItem(props) {
    const optionsArray = [1,2,3,4,5,6,7,8,9,10];
    const link = props.link;
    const product = props.product
    const [selectedValue, setSelectedValue] = useState(product.quantity);
    const dispatch = useDispatch();
    // Implement Routing functionality like when you click on image or header you should get rediredted to the product details.
    // useEffect(() => {
    //     product?.quantity && setSelectedValue(product.quantity)
    // },[])

    function add() {
        if(product.quantity<10) {
            dispatch(addItem(product))
            setSelectedValue(prevValue => prevValue+1);
        } else {
            alert("Only 10 Products can be added at once")
        }
    }

    function remove() {
        // selectedValue > 1 ? setSelectedValue((prevValue) => prevValue - 1) : alert("Cannot Delete");
        if(product.quantity>1) {
            dispatch(removeItem(product));
            setSelectedValue(prevValue => prevValue-1);
        } else {
            alert("Cannot Delete");
        }

    }

    function handleDelete() {
        dispatch(deleteItem(product));
    }

    function handleChange(value) {
        setSelectedValue(value);
    }

    return (
        <>
            <div className="bg-white border-b flex gap-5">
                <Link to={link} className="h-60 w-1/4 flex justify-center"> 
                    <img className="max-w-full max-h-full object-contain" src={product.images[0]} alt="" />
                </Link>
                <div className="p-5">
                    {/* General Info */}
                    <Link to={link}><h1>{product.title}</h1></Link>
                    <p className={`font-medium ${product.availabilityStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                        {product.availabilityStatus === "In Stock" ? "In Stock" : "Out of Stock"}
                    </p>

                    {/* Adding and delete buttons */}
                    <div className="flex gap-5">
                        <div className="w-36 h-7 border flex justify-between rounded-md bg-slate-300">
                            <button className="block" onClick={remove}>
                                <img className="max-w-full max-h-full object-contain" src="/delete-icon.png" alt="delete icon" />
                            </button>
                            <select className="w-1/2 bg-white" value={selectedValue} onChange={(e) => handleChange(e.target.value)}>
                                {optionsArray.map(num => {
                                    return (<option key={num} className="text-center" value={num}>{num}</option>);
                                })}
                            </select>
                            <button className="block" onClick={add}>
                                <img className="max-h-full max-w-full object-contain" src="/add-icon.png" alt="Add icon" />
                            </button>
                        </div>
                        <button onClick={handleDelete} className="text-red-700">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;