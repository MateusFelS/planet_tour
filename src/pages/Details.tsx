import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Brasil from '../assets/images/paises/brasil.jpeg';
import Italia from '../assets/images/paises/italia.jpeg';
import Grecia from '../assets/images/paises/grecia.jpeg';
import Tailandia from '../assets/images/paises/tailandia.jpeg';
import CostaRica from '../assets/images/paises/costa_rica.jpeg';
import Portugal from '../assets/images/paises/portugal.jpeg';
import Australia from '../assets/images/paises/australia.jpeg';
import Mexico from '../assets/images/paises/mexico.jpeg';

interface CountryDetails {
  name: string;
  capital: string;
  population: string;
  language: string;
  currency: string;
  landmarks: string[];
  cuisine: string[];
  image: string;
}

const CountryDetails: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [modalOpen, setModalOpen] = useState(true);

  const loadCountryDetails = (id: string): CountryDetails | null => {
    switch (id) {
      case '1':
        return {
          name: 'Brasil',
          capital: 'Brasília',
          population: '213.5 milhões',
          language: 'Português',
          currency: 'Real (BRL)',
          landmarks: ['Cristo Redentor', 'Pão de Açúcar', 'Cataratas do Iguaçu'],
          cuisine: ['Feijoada', 'Churrasco', 'Açaí'],
          image: Brasil,
        };
      case '2':
        return {
          name: 'Itália',
          capital: 'Roma',
          population: '60.4 milhões',
          language: 'Italiano',
          currency: 'Euro (EUR)',
          landmarks: ['Coliseu', 'Torre de Pisa', 'Canais de Veneza'],
          cuisine: ['Pizza', 'Pasta', 'Gelato'],
          image: Italia
        };
      case '3':
        return {
          name: 'Grécia',
          capital: 'Atenas',
          population: '10.4 milhões',
          language: 'Grego',
          currency: 'Euro (EUR)',
          landmarks: ['Acrópole de Atenas', 'Santorini', 'Meteora'],
          cuisine: ['Moussaka', 'Souvlaki', 'Gyro'],
          image: Grecia
        };
      case '4':
        return {
          name: 'Tailândia',
          capital: 'Bangkok',
          population: '69.8 milhões',
          language: 'Tailandês',
          currency: 'Baht tailandês (THB)',
          landmarks: ['Bangkok', 'Chiang Mai', 'Phuket'],
          cuisine: ['Pad Thai', 'Tom Yum Goong', 'Green Curry'],
          image: Tailandia
        };
      case '5':
        return {
          name: 'Costa Rica',
          capital: 'San José',
          population: '5.1 milhões',
          language: 'Espanhol',
          currency: 'Colón (CRC)',
          landmarks: ['Parque Nacional Manuel Antonio', 'Vulcão Arenal', 'Reserva Biológica Bosque Nuboso Monteverde'],
          cuisine: ['Gallo Pinto', 'Casado', 'Ceviche'],
          image: CostaRica
        };
      case '6':
        return {
          name: 'Portugal',
          capital: 'Lisboa',
          population: '10.3 milhões',
          language: 'Português',
          currency: 'Euro (EUR)',
          landmarks: ['Torre de Belém', 'Mosteiro dos Jerónimos', 'Castelo de São Jorge'],
          cuisine: ['Bacalhau', 'Pastel de Nata', 'Vinho do Porto'],
          image: Portugal
        };
      case '7':
          return {
            name: 'Austrália',
            capital: 'Camberra',
            population: '25.4 milhões',
            language: 'Inglês',
            currency: 'Dólar australiano (AUD)',
            landmarks: ['Opera House', 'Grande Barreira de Coral', 'Uluru'],
            cuisine: ['Vegemite', 'Meat Pie', 'Fish and Chips'],
            image: Australia
          };
      case '8':
          return {
            name: 'México',
            capital: 'Cidade do México',
            population: '126.2 milhões',
            language: 'Espanhol',
            currency: 'Peso mexicano (MXN)',
            landmarks: ['Chichén Itzá', 'Cancún', 'Cidade do México'],
            cuisine: ['Tacos', 'Chilaquiles', 'Guacamole'],
            image: Mexico
          };
      default:
          return null;
      }
    }
  

  const countryDetails = loadCountryDetails(countryId!);

  if (!countryDetails) {
    return <div>País não encontrado</div>;
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  
  return (
    modalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="max-w-lg p-8 bg-white rounded shadow-md">
          <button className="relative left-full text-2xl font-bold text-red-600" onClick={closeModal}>x</button>
          <h2 className="text-3xl font-bold mb-4">Detalhes de {countryDetails.name}</h2>
          <img className="h-48 w-full object-cover rounded border-solid border-black border-4" src={countryDetails.image} />
          <p className="pt-4 font-bold">Capital: {countryDetails.capital}</p>
          <p className="font-bold">População: {countryDetails.population}</p>
          <p className="font-bold">Língua: {countryDetails.language}</p>
          <p className="font-bold">Moeda: {countryDetails.currency}</p>
          <h3 className="mt-4 mb-2 font-bold">Principais Pontos Turísticos:</h3>
          <ul className="list-disc pl-6">
            {countryDetails.landmarks.map((landmark, index) => (
              <li key={`landmark-${index}`}>{landmark}</li>
            ))}
          </ul>
          <h3 className="mt-4 mb-2 font-bold">Culinária Típica:</h3>
          <ul className="list-disc pl-6">
            {countryDetails.cuisine.map((dish, index) => (
              <li key={`dish-${index}`}>{dish}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default CountryDetails;
