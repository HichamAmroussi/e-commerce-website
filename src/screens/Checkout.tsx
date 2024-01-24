import { useEffect, useState } from "react";

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
}
interface FormData {
    first_name: string;
    last_name: string;
    address: string;
    wilaya: string;
    phone_number: string;
}
const defaultFormData: FormData = {
    first_name: "",
    last_name: "",
    address: "",
    wilaya: "",
    phone_number: "",
};

const Checkout = ({ setCurrentPage }: Props) => {
    const [formData, setFormData] = useState(defaultFormData);
    const {first_name, last_name, address, wilaya, phone_number } = formData;
    const [isPending, setIsPending] = useState(false);

    const wilayas: string[] = ["01-Adrar", "02-Chlef", "03-Laghouat", "04-Oum El Bouaghi", "05-Batna", "06-Béjaïa", "07-Biskra", "08-Béchar", "09-Blida", "10-Bouïra", "11-Tamanrasset", "12-Tébessa", "13-Tlemcen", "14-Tiaret", "15-Tizi Ouzou", "16-Alger", "17-Djelfa", "18-Jijel", "19-Sétif", "20-Saïda", "21-Skikda", "22-Sidi Bel Abbès", "23-Annaba", "24-Guelma", "25-Constantine", "26-Médéa", "27-Mostaganem", "28-M'Sila", "29-Mascara", "30-Ouargla", "31-Oran", "32-El Bayadh", "33-Illizi", "34-Bordj Bou Arréridj", "35-Boumerdès", "36-El Tarf", "37-Tindouf", "38-Tissemsilt", "39-El Oued", "40-Khenchela", "41-Souk Ahras", "42-Tipaza", "43-Mila", "44-Aïn Defla", "45-Naâma", "46-Aïn Témouchent", "47-Ghardaïa", "48-Relizane", "49-El M'Ghair", "50-El Menia", "51-Ouled Djellal", "52-Bordj Baji Mokhtar", "53-Béni Abbès", "54-Timimoun", "55-Touggourt", "56-Djanet", "57-In Salah", "58-In Guezzam"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFormData = new FormData();

        newFormData.append('first_name', first_name);
        newFormData.append('last_name', last_name);
        newFormData.append('address', address);
        newFormData.append('wilaya', wilaya);
        newFormData.append('phone_number', phone_number);

        setIsPending(true);
        
        await fetch("https://e-commerce-api-3m42.onrender.com/dashboard/orders", { 
            method: "POST",
            body: newFormData
        });

        setIsPending(false);
    }

    useEffect(() => {
        // Page Title
        setCurrentPage("Checkout");
    }, [])

    return ( 
        <main className="min-h-screen py-40 max-w-2xl container mx-auto">
            <h1 className="text-2xl font-bold">Checkout</h1>

            <form onSubmit={handleSubmit}>
                <div className="rounded-xl border border-gray-200 px-14 py-8 my-8 bg-gray-100 shadow-md">
                    <div className="text-gray-600 flex flex-col">
                        <label className="my-2 text-[15px]" htmlFor="first_name">First Name</label>
                        <input 
                            type="text" 
                            id="first_name"
                            className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                            placeholder="First Name"
                            required
                            value={first_name}
                            onChange={handleInputChange}
                        />

                        <label className="my-2 text-[15px]" htmlFor="last_name">Last Name</label>
                        <input 
                            type="text" 
                            id="last_name"
                            className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                            placeholder="Last Name"
                            required
                            value={last_name}
                            onChange={handleInputChange}
                        />

                        <label className="my-2 text-[15px]" htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address"
                            className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={handleInputChange}
                        />

                        <label className="my-2 text-[15px]" htmlFor="wilaya">Category</label>
                        <select 
                            id="wilaya"
                            className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                            required
                            value={wilaya}
                            onChange={handleInputChange}
                        >  
                            <option>Wilaya</option>
                            {wilayas.map((wilaya) => (
                                <option value={wilaya.replace(/ /g, "-")}>{wilaya}</option>
                            ))}
                        </select>

                        <label className="my-2 text-[15px]" htmlFor="phone_number">Phone Number</label>
                        <input 
                            type="text" 
                            id="phone_number"
                            className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                            placeholder="Phone Number"
                            required
                            value={phone_number}
                            onChange={handleInputChange}
                        />
                    </div>
                    { !isPending && <button className="bg-[#C7896A] px-7 py-3 rounded-md justify-self-end text-white hover:bg-[#d8a38d] duration-500 col-start-2 w-full my-4">Confirm</button> }
                    { isPending && <button className="bg-[#C7896A] px-7 py-3 rounded-md justify-self-end text-white col-start-2 w-full my-4" disabled>Sending Request...</button> }
                </div>
            </form>
        </main>
    );
}
 
export default Checkout;