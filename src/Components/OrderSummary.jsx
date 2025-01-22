import { useNavigate } from "react-router-dom";

function OrderSummary(props) {
    const sum = props.sum   //getting hold of the Cart Total
    const navigate = useNavigate();
    
    // Function to Navigate to Checkout Page
    function toCheckout() {
        navigate('/checkout');
    }

    return (
        <>
            {/* Order Summary Component */}
            <div className="bg-white my-5 p-6 rounded-lg shadow-md w-full md:w-1/3 mx-auto">
                <h2 className="text-lg font-bold mb-4 text-gray-700">Order Summary</h2>
                {/* SubTotal */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium text-gray-800">${sum.toFixed(2)}</p>
                </div>
                {/* Shipping Charges */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium text-gray-800">$5.00</p>
                </div>
                {/* Taxes */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-600">Taxes</p>
                    <p className="font-medium text-gray-800">$8.00</p>
                </div>
                {/* Total = Subtotal + shipping charges + Taxes */}
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between items-center mb-6">
                    <p className="text-lg font-semibold text-gray-800">Total</p>
                    <p className="text-xl font-bold text-gray-900">${(sum+13).toFixed(2)}</p>
                </div>
                {/* CheckOut page button */}
                <button
                    onClick={toCheckout}
                    className="w-full py-3 bg-blue-600 text-white font-bold text-center rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                >
                    Proceed to Checkout
                </button>
            </div>
        </>
    );
}

export default OrderSummary;