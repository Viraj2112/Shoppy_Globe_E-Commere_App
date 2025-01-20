import { useRouteError, useNavigate } from "react-router-dom";

function Error() {
    const err = useRouteError();
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center gap-2 lg:gap-5 font-serif ">
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-indigo-900">Oops!</h1>
                <h2 className="text-sm md:text-xl  lg:text-3xl font-semibold">{err.status} {err.statusText}</h2>
                <p className="text-base md:text-lg lg:text-xl text-slate-700">{err.data}</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-3xl text-sm font-semibold transition ease-in-out hover:scale-105" type="button" onClick={goToHome}>GO TO HOMEPAGE</button>
            </div>
        </>
    );
}

export default Error;