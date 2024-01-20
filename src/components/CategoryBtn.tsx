import { Link } from "react-router-dom";

interface Props {
    label: string;
    buttonID: number;
    activeButton: number;
    setActiveButton: ( key: number ) => void;
}

const CategoryBtn = ({ label, buttonID, activeButton, setActiveButton }: Props) => {
    const handleButtonClick = () => {
        setActiveButton(buttonID);
    };

    return ( 
        <li>
            <Link to={label === "All" ? "/shop" : `/shop?category=${label.replace(/ /g, "-")}`} className={buttonID === activeButton? "text-white font-medium text-lg bg-black py-2.5 px-5 rounded-2xl" : "font-medium text-lg bg-[#dddddd] text-black py-2.5 px-5 rounded-2xl hover:bg-[#cecece] duration-300"} onClick={() => handleButtonClick()}>
                {label}
            </Link>
        </li>
    );
}
 
export default CategoryBtn;