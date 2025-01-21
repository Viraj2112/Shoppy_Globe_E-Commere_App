import CartItem from './CartItem'
import { useSelector } from 'react-redux';

function Cart() {
    const items = useSelector(state => state.cart.items);

    return (
        <>
            <h1>Shopping Cart</h1>
            {items.length !=0 ? 
            (
                <div className="bg-slate-100 p-10">
                    {items.map(item => {
                        return (<CartItem key={item.id} product={item} link={`/product-detail/${item.id}`}/>);
                    })}
                </div>
            ):
            (
                <div className='h-96 flex justify-center items-center text-3xl'>
                    Your Cart is Empty
                </div>
            )}
            

        </>
    );
}

export default Cart;