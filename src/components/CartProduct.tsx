// Interfaces
interface Props {
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
    }
}

const CartProduct = ({ product }: Props) => {

    return ( 
        <div className="flex w-full py-5 border-b">
            <img src={product.image_thumbnail} alt={product.name} />
            <p>{product.name}</p>
        </div>
    );
}
 
export default CartProduct;