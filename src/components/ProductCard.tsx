import { Link } from "react-router-dom";

interface ProductProps {
    product: {
        id: number;
        size: string;
        name: string;
        price: number;
        category: string;
        image_thumbnail: string;
        isSold: boolean;
        order_id: number | null;
    };
}

const ProductCard = ({ product }: ProductProps) => {
    const makeLink = () => {
        return "/products/" + product.id;
        //return "/products/" + product.title.toLocaleLowerCase().replace(/ /g, "-");
    }

    return ( 
        <Link to={makeLink()} className="shadow rounded-xl overflow-hidden">
            <figure className="relative pt-[100%]">
                <img src={"http://localhost:3000/images/product_images/" + product.image_thumbnail} alt={product.name} className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-contain" />
            </figure>
            <div className="text-center py-6 px-1 bg-white">
                <p className="font-medium">{product.name}</p>
                <p className="font-bold py-2">{product.price} DA</p>
            </div>
        </Link>
     );
}
 
export default ProductCard;