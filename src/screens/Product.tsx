import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Custom Hooks
import useFetch from "../hooks/useFetch";
// Interfaces
interface Product {
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
    isSold: boolean;
    order_id: number | null;
    stock: number;
};
interface Props {
    setCurrentPage: (page: string) => void;
}

const Product = ({ setCurrentPage }: Props) => {
    const productID = window.location.pathname.slice(10);
    const [product, isPending] = useFetch<Product>(`http://localhost:3000/shop/product/${productID}`, {} as Product);
    const [stock, setStock] = useState("1");

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStock(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
    }
    
    useEffect(() => {
        setCurrentPage(product.name);
    }, [product])

    return ( 
        <main className="min-h-screen py-40 max-w-9xl container mx-auto">
            {isPending && (
                <div className="min-h-full w-full flex justify-center col-span-2">
                    <div className="loading-animation"></div>
                </div>
            )}

            {!isPending && product &&
                (
                    <div className="grid grid-cols-2 gap-8">
                        <Swiper
                            loop={true}
                            centeredSlides={true}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[ Navigation, Pagination]}
                            className="mySwiper"
                        >
                            {/* product.Product_image.forEach((item) => {

                            }) */}
                            <SwiperSlide>
                                <img src={"http://localhost:3000/images/product_images/" + product.Product_image[0].image_path} alt={product.name} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={"http://localhost:3000/images/product_images/" + product.Product_image[1].image_path} alt={product.name} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={"http://localhost:3000/images/product_images/" + product.Product_image[2].image_path} alt={product.name} />
                            </SwiperSlide>
                        </Swiper>

                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">{product.name}</h1>
                            <p>{product.description}</p>
                            <hr className="w-[300px] h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700" />
                            <p>Size: <span className="text-xl font-medium">{product.size} Kg</span></p>
                            <div className="flex items-center gap-36">
                                <p className="text-md">Price: <span className="text-xl text-[#b88476] font-medium">{product.price} DA</span></p>
                                {product.stock ? <p className="text-sm text-gray-500">IN STOCK</p> : ""}
                            </div>

                            <form className="flex items-stretch gap-36 h-14 mt-8" onSubmit={handleSubmit}>
                                <button className="font-bold text-white text-sm bg-[#b88476] px-12 py-4 duration-100 hover:bg-[#d6a395]">ADD TO CART</button>
                                <div className="flex gap-4 items-center">
                                    <label htmlFor="qty" className="font-bold text-sm text-gray-600">QTY</label>
                                    <input 
                                        type="number" 
                                        min="1" 
                                        max="999"
                                        id="qty" 
                                        className="border w-12 h-10 text-center" 
                                        value={stock} 
                                        onChange={handleStockChange} 
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </main>
    );
}
 
export default Product;