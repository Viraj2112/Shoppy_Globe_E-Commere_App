import { useEffect, useState } from 'react';
import CartItem from './CartItem'
import { useSelector } from 'react-redux';
import OrderSummary from './OrderSummary';

function Cart() {
    const items = useSelector(state => state.cart.items); //Getting hold of all the items in Cart in App Store
    const [sum, setSum] = useState(0); //Initial subtotal of the item's prices in cart.

    // After the page is loaded scrolling to the top of the page and getting hold of the subtotal of the item's prices in cart.
    useEffect(() => {
        setSum(0);
        items.length!=0 ? 
        items.forEach(item => {
        setSum(prevSum => prevSum+(item.price*item.quantity))
    }) : 0;
    },[items]);

    // When the page is loaded Scroll to the top of the Page
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[]);

    return (
        <>
            {/* Cart Component */}
            <div>
                {/* Shopping Cart Title */}
                <h1 className='py-4 px-2 text-4xl '>Shopping Cart</h1>

                {/* List of Cart Items */}
                {items.length !=0 ? 
                (
                    <div className="bg-slate-100 p-10">
                        {items.map(item => {
                            return (<CartItem key={item.id} product={item} link={`/product-detail/${item.id}`}/>);
                        })}
                        {/* Order Summary will be loaded here at last */}
                        <OrderSummary sum={sum}  />
                    </div>
                    
                ):
                (
                    // Display when Cart is Empty
                    <div className='h-96 flex justify-center items-center text-3xl'>
                        Your Cart is Empty
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;