import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
    const cartItems = useSelector(state => state.cart.items);   //Getting hold of the Items in Cart
    // Getting hold of the total price of the Items in Cart in App Store
    const totalPrice = cartItems.length!=0 ? 
                        (cartItems.reduce((total, item) => total + item.price * item.quantity, 0)+13) : 
                        0;
    const navigate = useNavigate();

    // When the Page is loaded scroll to the top
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'})
    },[])    

    // When Form is submitted Order Placed message is popped and user is navigated to home page
    function submitForm() {
        alert("Order Placed.")
        navigate('/');
    }


    return (
        <>
            {/* Checkout Page */}
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10">
                {/* Back Button */}
                <div className="w-full px-36">
                    <Link to="/cart" className="inline-block rounded-full overflow-hidden">
                        <img 
                            className="object-contain h-8 w-8 md:h-12 md:w-12" 
                            src="/back-button.jpg" 
                            alt="back-button image" 
                        />
                    </Link>
                </div>
                {/* Checkout Section */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h2>

                    {/* User Information Form */}
                    <form onSubmit={() => submitForm()}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Address */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
                            <textarea
                                id="address"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Cart Summary</h3>

                        {/* Cart Items */}
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b py-2">
                                <p className="text-gray-700">{item.title}</p>
                                <p className="text-gray-800">${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                        ))}
                        {/* Shipping Charge */}
                        <div className="flex justify-between items-center border-b py-2">
                            <p className=" text-gray-700">Shipping</p>
                            <p className="text-gray-700">${cartItems.length!=0 ? 5 : 0}</p>
                        </div>
                        {/* Taxes Charge */}
                        <div className="flex justify-between items-center border-b py-2">
                            <p className=" text-gray-700">Taxes</p>
                            <p className="text-gray-700">${cartItems.length!=0 ? 8 : 0}</p>
                        </div>
                        {/* Total */}
                        <div className="flex justify-between mt-4">
                            <p className="text-lg font-medium text-gray-800">Total</p>
                            <p className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
                            
                        </div>

                        {/* Checkout Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-2 mt-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Checkout;