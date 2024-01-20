import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main className="w-full h-screen bg-[url('/header.jpg')] bg-cover">  
            <div className="w-full h-full flex justify-center items-center backdrop-brightness-75">
                <div className="absolute bottom-[29%] left-[50%] translate-x-[-50%] z-10 flex gap-5 flex-col items-center">
                    <h1 className=" text-white text-center font-bold text-4xl w-[14.2rem] 2xl:text-[3.5rem] 2xl:leading-[1.15] 2xl:w-[42rem] md:text-5xl md:w-[19rem]">START BUILDING YOUR OWN GYM TODAY</h1>
                    <Link to="/shop" className="text-black border-white bg-white text-sm font-medium border-2 py-4 px-10 hover:bg-transparent hover:text-white duration-300">SHOP NOW</Link>
                </div>
            </div>
        </main>
    );
}
 
export default Home;