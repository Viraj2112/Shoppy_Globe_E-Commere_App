function ProductItem(props) {
    const product = props.product;
    return (
        <>
            <div className="my-2 sm:mx-5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-80 border shadow-md rounded-lg flex flex-col">

                {/* Container for the image */}
                <div className="h-2/3 w-full flex justify-center items-center bg-gray-100">
                    <img className="max-h-full max-w-full object-contain" src={product.images[0]} alt="product Image"/>
                </div>

                {/* Content container */}
                <div className="h-1/3 p-2 flex flex-col justify-between">
                    <h1 className="text-sm font-medium truncate">{product.title}</h1>
                    <p className="text-xs">Rating: {product.rating.toFixed(1)}</p>
                    <span className="text-sm font-semibold">{product.price} $</span>
                    <div className="flex text-xs justify-between">
                        <span>
                            M.R.P: $<span className="line-through">{((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}</span>
                        </span>
                        <span>({Math.floor(product.discountPercentage)}% off)</span>
                    </div>
                    <p className="text-xs text-gray-500">{product.shippingInformation}</p>
                </div>
            </div>
            
        </>
    );
}

export default ProductItem;