import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, addItem, removeItem } from "../utils/cartSlice";

function CartItem(props) {
    const optionsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const link = props.link;
    const product = props.product; // This product is from Redux state
    const dispatch = useDispatch();

    function add() {
        product.quantity<10 ? 
        dispatch(addItem({...product, quantity:product.quantity+1})) : 
        alert("Max 10 products can be added");
    }

    function remove() {
        product.quantity>1 ? 
        dispatch(removeItem(product)) : 
        alert("Click on delete if you want to remove the Item from the Cart.")
    }

    function handleDelete() {
        dispatch(deleteItem(product));
    }

    function handleChange(value) {
        const quantity = parseInt(value, 10);
        if (quantity >= 1 && quantity <= 10) {
            dispatch(addItem({ ...product, quantity }));
        }
    }

    return (
        <>
            <div className="bg-white border-b flex flex-wrap items-center gap-5 p-4">
                <div className="flex flex-wrap w-full">
                    {/* Image Section */}
                    <div className="w-1/3 sm:w-1/4 flex justify-center items-center">
                        <Link to={link} className="h-40 sm:h-60 w-full">
                            <img
                                className="w-full h-full object-contain"
                                src={product.images[0]}
                                alt={product.title}
                            />
                        </Link>
                    </div>

                    {/* Details Section */}
                    <div className="w-2/3 sm:w-1/2 p-4">
                        <Link to={link}>
                            <h1 className="text-lg font-semibold">{product.title}</h1>
                        </Link>
                        <p
                            className={`font-medium ${
                                product.availabilityStatus === "In Stock"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {product.availabilityStatus === "In Stock"
                                ? "In Stock"
                                : "Out of Stock"}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-5 mt-4">
                            <div className="w-full sm:w-auto flex items-center gap-2 border rounded-md bg-slate-300">
                                <button className="px-2 py-1" onClick={remove}>
                                    <img
                                        className="w-5 h-5"
                                        src="/delete-icon.png"
                                        alt="delete icon"
                                    />
                                </button>
                                <select
                                    className="px-2 py-1 bg-white border-none"
                                    value={product.quantity}
                                    onChange={(e) => handleChange(e.target.value)}
                                >
                                    {optionsArray.map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                                <button className="px-2 py-1" onClick={add}>
                                    <img
                                        className="w-5 h-5"
                                        src="/add-icon.png"
                                        alt="Add icon"
                                    />
                                </button>
                            </div>
                            <button onClick={handleDelete} className="text-red-700">
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="w-full sm:w-1/4 mt-4 sm:mt-0 text-right">
                        <p className="text-lg font-semibold">Price: ${(product.price*product.quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CartItem;
