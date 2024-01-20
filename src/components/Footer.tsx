import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="text-sm text-center border-t-[1px] border-solid border-gray-200 mx-5 py-8 md:flex md:justify-between md:mx-12">
            <div className="mb-7 flex gap-5 flex-col md:mb-0 md:flex-row md:gap-10">
                <div>Copyright, Website© 2023</div>
                <Link to="/shop" className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Shop</Link>
                <Link to="/contact-us" className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300">Contact us</Link>
            </div>
            <div className="flex gap-10 items-center justify-center">
                <a href="https://www.instagram.com/hichamamroussi/" target="_blank" className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaInstagram /></a>
                <a href="https://www.facebook.com/Hicham.Amroussi1/" target="_blank" className="text-gray-400 hover:text-gray-600 cursor-pointer duration-300"><FaFacebookF /></a>
                <a href="https://hichamamroussi.online/" target="_blank">By Ephwo Dev</a>
            </div>
        </footer>
     );
}
 
export default Footer;