import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <>
            <header className="flex justify-between mb-5">
                <img className="w-20" src="/ShoppyGlobe_Logo.jpg" alt="Logo"/>
                <nav className="flex items-center gap-2 font-bold md:text-xl">
                    {location.pathname!='/' && (<Link to='/'><span>Home</span></Link>)}
                    {location.pathname!='/about' && (<Link to='/about'><span>About</span></Link>)}
                </nav>
                {location.pathname!='/about' ? (<Link to='/cart'><img className="h-10 self-center m-2" src="/cart.png" alt="Cart Image"/></Link>) : (<div className="m-6"></div>)}
            </header>     
        </>
    );
}

export default Header;

