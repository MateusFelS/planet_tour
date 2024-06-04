import { useState } from 'react';
import { Link } from 'react-router-dom';
import Brasil from '../assets/images/paises/brasil.jpeg';
import Italia from '../assets/images/paises/italia.jpeg';
import Grecia from '../assets/images/paises/grecia.jpeg';
import Tailandia from '../assets/images/paises/tailandia.jpeg';
import CostaRica from '../assets/images/paises/costa_rica.jpeg';
import Portugal from '../assets/images/paises/portugal.jpeg';
import Australia from '../assets/images/paises/australia.jpeg';
import Mexico from '../assets/images/paises/mexico.jpeg';

const destinos = [
  { id: 1, nome: 'Brasil', imagem: Brasil },
  { id: 2, nome: 'Itália', imagem: Italia },
  { id: 3, nome: 'Grécia', imagem: Grecia },
  { id: 4, nome: 'Tailândia', imagem: Tailandia },
  { id: 5, nome: 'Costa Rica', imagem: CostaRica },
  { id: 6, nome: 'Portugal', imagem: Portugal },
  { id: 7, nome: 'Austrália', imagem: Australia },
  { id: 8, nome: 'México', imagem: Mexico }
];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinos.length) % destinos.length);
  };

  return (
    <div className="w-full bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Destinos</h2>
      <div className="relative w-full max-w-[1200px] mx-auto">
         <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinos.map((destino) => (
            <div key={destino.id} className="max-w-[400px] w-full bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
              <Link to={`/country/${destino.id}`}>
                <img src={destino.imagem} className="sm:h-48 h-32 w-full object-cover rounded" alt={destino.nome} />
                <h3 className="text-center sm:text-2xl text-xl p-2 font-bold text-gray-700">{destino.nome}</h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="sm:hidden relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinos.map((destino) => (
              <div key={destino.id} className="min-w-full flex-shrink-0 p-4">
                <div className="max-w-[400px] w-full bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300 mx-auto">
                  <Link to={`/country/${destino.id}`}>
                    <img src={destino.imagem} className="sm:h-48 h-32 w-full object-cover rounded" alt={destino.nome} />
                    <h3 className="text-center sm:text-2xl text-xl p-2 font-bold text-gray-700">{destino.nome}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
