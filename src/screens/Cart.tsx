import { useEffect } from "react";

// Interfaces
interface Props {
    setCurrentPage: (page: string) => void;
}

const Cart = ({ setCurrentPage }: Props) => {
    useEffect(() => {
        setCurrentPage("Cart");
    }, [])

    return ( 
        <div className="text-5xl min-h-screen flex items-center justify-center">Cart</div>
    );
}
 
export default Cart;