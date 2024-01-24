// Libraries
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Components
import ProductCard from "../components/ProductCard";
import CategoryBtn from "../components/CategoryBtn";
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
    isSold: boolean;
    order_id: number | null;
    stock: number;
};
interface ButtonProps {
    id: number;
    label: string;
}
interface Props {
    setCurrentPage: (page: string) => void;
}

const Shop = ({ setCurrentPage }: Props) => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("category"));
    const [products, isPending] = useFetch<Product[]>(!query ? `https://e-commerce-api-3m42.onrender.com/shop` : query !== "All" ? `https://e-commerce-api-3m42.onrender.com/shop/products/${query.replace(/ /g, "-")}` : "https://e-commerce-api-3m42.onrender.com/shop", []);
    const [activeButton, setActiveButton] = useState<number>(1);

    const buttons: ButtonProps[] = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Weights and Bars' },
        { id: 3, label: 'Dumbbells' },
    ];

    useEffect(() => {
        buttons.forEach((btn) => {
            if(query) {
                if(btn.label === query.replace(/-/g, " ")) setActiveButton(btn.id);
            }
        })
    }, [])

    useEffect(() => {
        buttons.forEach((btn) => {
            if(btn.id === activeButton) {
                setQuery(btn.label.replace(/ /g, "-"));
                setCurrentPage("Shop - " + btn.label);
            }
        })
    }, [activeButton])


    return ( 
        <main className="min-h-screen py-28 mx-2 bg-gray-50 xl:py-36 md:py-30 md:mx-0">
            <div className="max-w-9xl container mx-auto">
                <h2 className="text-3xl font-bold my-[31px]">Product category</h2>
                <ul className="flex gap-1 md:gap-1.5">
                    {buttons.map((button) => (
                        <CategoryBtn
                            key={button.id}
                            buttonID={button.id}
                            label={button.label}
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                        />
                    ))}
                </ul>

                <main className="my-8 grid grid-cols-2 gap-x-2.5 gap-y-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-3 md:grid-cols-3 md:my-14">
                    {isPending && (
                        <div className="min-h-full w-full flex justify-center col-span-4">
                            <div className="loading-animation"></div>
                        </div>
                    )}

                    {!isPending && products.length !== 0 &&
                        products.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                        ))
                    }

                    {!isPending && products.length === 0 && (
                        <div>No Products are available.</div>
                    )}
                </main>
            </div>
        </main>
    );
}
 
export default Shop;