import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineEnvironment, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

const Slidenav = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} size={20} className="absolute top-4 right-4 z-[99] md:hidden"/>
            { nav && 
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#destinos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineEnvironment size={20}/>
                        <span className="pl-4">Destinos</span>
                    </a>
                    <a onClick={handleNav} href="#sobre-nos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineUser size={20}/>
                        <span className="pl-4">Sobre Nós</span>
                    </a>
                    <a onClick={handleNav} href="#contatos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlinePhone size={20}/>
                        <span className="pl-4">Contatos</span>
                    </a>
                </div> 
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={30}/>
                    </a>
                    <a href="#destinos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineEnvironment size={30}/>
                    </a>
                    <a href="#sobre-nos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineUser size={30}/>
                    </a>
                    <a href="#contatos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlinePhone size={30}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Slidenav;
