import { useState } from 'react';
import Brasil from '../assets/images/paises/brasil.jpeg';
import Italia from '../assets/images/paises/italia.jpeg';
import Grecia from '../assets/images/paises/grecia.jpeg';
import Tailandia from '../assets/images/paises/tailandia.jpeg';
import CostaRica from '../assets/images/paises/costa_rica.jpeg';
import Portugal from '../assets/images/paises/portugal.jpeg';
import Australia from '../assets/images/paises/australia.jpeg';
import Mexico from '../assets/images/paises/mexico.jpeg';
import { Link } from 'react-router-dom';

const Destination = () => {
    const [destinos] = useState([
        { id: '1', nome: 'Brasil', imagem: Brasil },
        { id: '2', nome: 'Itália', imagem: Italia },
        { id: '3', nome: 'Grécia', imagem: Grecia },
        { id: '4', nome: 'Tailândia', imagem: Tailandia },
        { id: '5', nome: 'Costa Rica', imagem: CostaRica },
        { id: '6', nome: 'Portugal', imagem: Portugal },
        { id: '7', nome: 'Austrália', imagem: Australia },
        { id: '8', nome: 'México', imagem: Mexico }
    ]);

    return (
        <div id="destinos" className="relative w-full h-fit pb-10 text-center bg-gray-100">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 p-10">Destinos</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center p-4">
                {destinos.map(destino => (
                    <div key={destino.id} className="max-w-[400px] w-full bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300">
                        <Link to={`/country/${destino.id}`}>
                            <img src={destino.imagem} className="sm:h-48 h-32 w-full object-cover rounded" alt={destino.nome} />
                            <h3 className="text-center sm:text-2xl text-xl p-2 font-bold text-gray-700">{destino.nome}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;
