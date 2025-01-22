function Footer() {
    // Getting hold of the Current year to display in Footer section To make our Footer Dynamic
    const currentYear = new Date().getFullYear();
    return (
        <>
            {/* Created a Simple Footer Below */}
            <footer className="text-center py-4">
                &copy; <span id="year">{currentYear}</span> Viraj Inc. All rights reserved.
            </footer>    
        </>
    );
}

export default Footer;