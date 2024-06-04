import { FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm">&copy; 2024 - Planet Tour. Todos os direitos reservados.</p>
          <div className="ml-4 flex space-x-4">
            <FaInstagram className="cursor-pointer hover:scale-125 ease-in duration-300" color="#E1306C" size={30} />
            <FaEnvelope className="cursor-pointer hover:scale-125 ease-in duration-300" color="gray" size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
