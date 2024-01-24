import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Interfaces
interface MyProps {
    ProductCart: {
        product: {
            id: number;
            size: string;
            name: string;
            description: string;
            price: number;
            category: string;
            image_thumbnail: string;
            Product_image: {
                id: number;
                image_path: string;
                product_id: number;
                createdAt: string;
                updatedAt: string;
            }[];
            order_id: number | null;
            stock: number;
        };
        stock: number;
    }[];
    Product: {
        id: number;
        size: string;
        name: string;
        description: string;
        price: number;
        category: string;
        image_thumbnail: string;
        Product_image: {
            id: number;
            image_path: string;
            product_id: number;
            createdAt: string;
            updatedAt: string;
        }[];
        order_id: number | null;
        stock: number;
    };
};

interface Props {
    setCurrentPage: (page: string) => void;
    cart: {
        product: {
            id: number;
            size: string;
            name: string;
            description: string;
            price: number;
            category: string;
            image_thumbnail: string;
            Product_image: {
                id: number;
                image_path: string;
                product_id: number;
                createdAt: string;
                updatedAt: string;
            }[];
            order_id: number | null;
            stock: number;
        };
        stock: number;
    }[];
    setCart: (cart: {
        product: {
            id: number;
            size: string;
            name: string;
            description: string;
            price: number;
            category: string;
            image_thumbnail: string;
            Product_image: {
                id: number;
                image_path: string;
                product_id: number;
                createdAt: string;
                updatedAt: string;
            }[];
            order_id: number | null;
            stock: number;
        };
        stock: number;
    }[]) => void;
}

const Cart = ({ setCurrentPage, cart }: Props) => {
    const [productData] = useState<MyProps["ProductCart"]>(cart);

    useEffect(() => {
        // Page Title
        setCurrentPage("Cart");
    }, [])

    return ( 
        <main className="min-h-screen py-40 max-w-9xl container mx-auto">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <div className="flex flex-col">
                { productData.length !== 0 && (
                    <div className="py-10 px-8 w-full flex flex-col items-center gap-10 bg-gray-100 rounded-lg mt-8 shadow-md">
                        <div className="flex w-full py-1 gap-5 items-center border-b">
                            <p>Item</p>

                            <p className="ml-[40.3vw]">Price</p>
                            <p className="ml-[4.5vw]">Qty</p>
                            <p className="ml-[3.5vw]">Subtotal</p>
                        </div>
                        <div className="flex w-full border-b gap-5 items-center">
                            <img src={"http://localhost:3000/images/product_images/" + productData[0].product.image_thumbnail} alt={productData[0].product.name} className="h-36" />
                            <div className="flex flex-col gap-2">
                                <p>{productData[0].product.name}</p>
                                <p><span className="font-bold">Size :</span> {productData[0].product.size} Kg</p>
                            </div>

                            <p className="ml-[20vw]">{productData[0].product.price} DA</p>
                            <p className="ml-[4vw]">{productData[0].stock}</p>
                            <p className="ml-[4vw]">{productData[0].product.price * productData[0].stock} DA</p>
                        </div>
                        {productData[1] && <div className="flex w-full border-b gap-5 items-center">
                            <img src={"http://localhost:3000/images/product_images/" + productData[1].product.image_thumbnail} alt={productData[1].product.name} className="h-36" />
                            <div className="flex flex-col gap-2">
                                <p>{productData[1].product.name}</p>
                                <p><span className="font-bold">Size :</span> {productData[0].product.size} Kg</p>
                            </div>

                            <p className="ml-[20vw]">{productData[1].product.price} DA</p>
                            <p className="ml-[4vw]">{productData[1].stock}</p>
                            <p className="ml-[4vw]">{productData[1].product.price * productData[0].stock} DA</p>
                        </div>}

                        <Link to="/checkout" className="font-bold text-white text-sm bg-[#b88476] px-12 py-4 duration-100 hover:bg-[#d6a395]">Checkout</Link>
                    </div>
                )}
                { productData.length === 0 && (
                    <div className="h-[500px] w-full flex flex-col items-center justify-center gap-10 bg-gray-100 rounded-lg mt-8 shadow-md">
                        <p className="text-xl">Your cart is empty.</p>
                        <Link to="/shop" className="font-bold text-white text-sm bg-[#b88476] px-12 py-4 duration-100 hover:bg-[#d6a395]">Continue Shopping</Link>
                    </div>
                )}
            </div>
        </main>
    );
}
 
export default Cart;