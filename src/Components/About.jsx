function About() {
    return (
        <>
            <div className="p-5 text-justify">
                <h1 className="text-xl font-semibold md:font-bold md:text-3xl md:my-5">About ShoppyGlobe</h1>
                <p className="md:text-lg ">Welcome to <span className="font-semibold">ShoppyGlobe</span>, your ultimate shopping destination! This simple yet powerful e-commerce application provides a seamless shopping experience for users, offering a wide variety of products to explore and purchase.</p>
                <br/>
                <p className="md:text-lg ">With <span className="font-semibold">ShoppyGlobe</span>, you can:</p>
                <ul className="list-disc m-5 md:mx-10">
                    <li><span className="font-semibold md:text-lg">Browse Products:</span> Explore our extensive catalog of items right on the homepage.</li>
                    <li><span className="font-semibold md:text-lg">Product Details:</span>  Click on any product to view its detailed description, pricing, and features.</li>
                    <li><span className="font-semibold md:text-lg">Add to Cart:</span> Found something you like? Use the "Add to Cart" button on the product detail page to save your items for later.</li>
                    <li><span className="font-semibold md:text-lg">View Your Cart:</span> Navigate to the cart by clicking the "Cart" button on the homepage. See all the items you've added, manage quantities (increase or decrease), and get ready to proceed with your purchase.</li>
                    <li><span className="font-semibold md:text-lg">Seamless Checkout:</span> After finalizing your cart, proceed to the checkout page to complete your order effortlessly.</li>
                </ul>
                <br />
                <p className="md:text-lg ">Built with modern web technologies like React, Vite, and Tailwind CSS, ShoppyGlobe offers a responsive, user-friendly, and visually appealing interface. Whether you're shopping on a desktop or mobile device, our app ensures a smooth and intuitive experience.</p>
                <br/>
                <p className="md:text-lg ">Start shopping today and enjoy the simplicity and convenience of <span className="font-semibold">ShoppyGlobe!</span></p>

            </div>
        </>
    );
}

export default About;