import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// React Icons
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
// Interfaces
interface Props {
    setCurrentPage: (page: string) => void;
}

const Navbar = ({ setCurrentPage }: Props) => {
    const [hamburgerClick, setHamburgerClick] = useState(false);

    const CustomLink = ({ to, children, ...props }: any) => {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <li className={isActive ? "text-[#b88476] my-6 md:my-0:" : "my-6 md:my-0"}>
                <Link to ={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    const handleClick = () => {
        setHamburgerClick(!hamburgerClick);
    }

    const handleButtonClick = (label: string) => {
        setCurrentPage(label);
    };

    return ( 
        <header className="bg-white fixed z-20 shadow-sm w-full">
            <nav 
                className="py-4 max-w-9xl container mx-auto md:flex md:items-center md:justify-between">
                    
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-3xl block cursor-pointer mx-0 md:mx-2 md:hidden" onClick={handleClick}>
                        {hamburgerClick? <IoClose /> : <GiHamburgerMenu />}
                    </span>

                    <Link to="/">
                        <img className="h-20 inline" src="/logo.png" alt="Website Logo" />
                    </Link>
                </div>

                {/* Middle Menu */}
                <ul className={
                    hamburgerClick 
                    ? "bg-white md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[80px] transition-all ease-in duration-300" : "bg-transparent md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300"
                }>
                    <CustomLink to="/" className="mx-7 hover:text-[#b88476] duration-500" onClick={() => handleButtonClick("Home")}>Home</CustomLink>
                    <CustomLink to="/shop" className="mx-7 hover:text-[#b88476] duration-500" onClick={() => handleButtonClick("Shop")}>Shop</CustomLink>
                    <CustomLink to="/contact-us" className="mx-7 hover:text-[#b88476] duration-500" onClick={() => handleButtonClick("Contact us")}>Contact us</CustomLink>
                </ul>

                {/* Cart */}
                <Link to="/cart" className="gap-1.5 flex absolute top-[38px] right-6 md:static md:mx-10">
                    <FiShoppingCart className="text-2xl" />
                    <div className="bg-black text-white rounded-full px-2">0</div>
                </Link>
            </nav>
        </header>
     );
}
 
export default Navbar;