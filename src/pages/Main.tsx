import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import BackgroundImage from '../assets/images/background_image.jpg';

const Main = () => {
    return (
        <div id="main" className="relative w-full h-screen">
            <img src={BackgroundImage} className="w-full h-full object-cover" alt="Background"/>
            <div className="w-full h-full absolute top-0 left-0 bg-white/30 flex items-center justify-center">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Planet Tour</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 font-bold text-gray-800 text-center lg:text-left">Viajar não é despesa, é investimento!</h2>
                    <div className='flex justify-between pt-4 pl-2 max-w-[100px] w-full'>
                        <FaInstagram className="cursor-pointer hover:scale-125 ease-in duration-300" color={"#E1306C"} size={40} />
                        <FaEnvelope className="cursor-pointer hover:scale-125 ease-in duration-300 " color={"white"} size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
