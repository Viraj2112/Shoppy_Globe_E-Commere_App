import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    // useLocation() is used to get hold of the current url of the user's browser
    const location = useLocation();
    // Below we are getting hold of the items in Cart
    const items = useSelector(state => state.cart.items);
    return (
        <>
            <header className="flex justify-between mb-5">
                {/* Logo Image */}
                <img className="w-20 md:w-24" src="/ShoppyGlobe_Logo.jpg" alt="Logo"/>
                
                {/* Home and About Navigation Buttons */}
                <div className="w-1/2 flex justify-center">
                    <nav className="flex items-center gap-5 md:gap-10 font-semibold md:text-xl">
                        {location.pathname!='/' && (<Link className="block px-3 py-2 md:px-5 md:py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300" to='/'>
                                                        <span>Home</span>
                                                    </Link>)}
                        {location.pathname!='/about' && (<Link className="block px-3 py-2 md:px-5 md:py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300" to='/about'>
                                                        <span>About</span>
                                                    </Link>)}
                    </nav>
                </div>
                
                {/* Below here we created a function such that the cart will only show if the user 
                is not on ABOUT page */}
                {location.pathname!='/about' ? 
                (<Link className="h-10 self-center m-2 transition-transform ease-in-out duration-300 hover:scale-110" to='/cart'>
                    {items.length != 0 ? 
                    (<img className="max-w-full max-h-full object-contain" src="/filled_cart.png" alt="Cart Image"/>) : 
                    (<img className="max-w-full max-h-full object-contain" src="/cart.png" alt="Cart Image"/>)}
                </Link>) : 
                // Created blank div to adjust the tailwindCss Properties.
                (<div className="m-6"></div>)}
            </header>     
        </>
    );
}

export default Header;

