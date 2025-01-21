import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const location = useLocation();
    const items = useSelector(state => state.cart.items);
    return (
        <>
            <header className="flex justify-between mb-5">
                <img className="w-20" src="/ShoppyGlobe_Logo.jpg" alt="Logo"/>

                <div className="w-1/2 flex justify-center">
                    <nav className="flex items-center gap-2 font-semibold md:text-xl">
                        {location.pathname!='/' && (<Link to='/'><span>Home</span></Link>)}
                        {location.pathname!='/about' && (<Link to='/about'><span>About</span></Link>)}
                    </nav>
                </div>

                {location.pathname!='/about' ? 
                (<Link className="h-10 self-center m-2" to='/cart'>
                    {items.length != 0 ? 
                    (<img className="max-w-full max-h-full object-contain" src="/filled_cart.png" alt="Cart Image"/>) : 
                    (<img className="max-w-full max-h-full object-contain" src="/cart.png" alt="Cart Image"/>)}
                </Link>) : 
                (<div className="m-6"></div>)}
            </header>     
        </>
    );
}

export default Header;

