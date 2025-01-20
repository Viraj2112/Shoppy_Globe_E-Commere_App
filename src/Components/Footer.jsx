function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="text-center py-4">
                &copy; <span id="year">{currentYear}</span> Viraj Inc. All rights reserved.
            </footer>    
        </>
    );
}

export default Footer;