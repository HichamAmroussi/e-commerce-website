import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="min-h-screen flex flex-col gap-7 items-center justify-center">
            <h1 className="text-3xl text-center sm:text-5xl">404, Page not found.</h1>
            <Link to="/" className="underline">return to homepage</Link>
        </div>
    );
}
 
export default NotFound;