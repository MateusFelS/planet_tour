import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
  preco: string;
  duracao: string;
  image: string;
}

const CountryDetails: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();

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
          preco: 'R$ 4.500,00',
          duracao: '7 dias',
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
          preco: '€ 3.000,00',
          duracao: '10 dias',
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
          preco: '€ 2.800,00',
          duracao: '8 dias',
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
          preco: '$ 2.200,00',
          duracao: '12 dias',
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
          preco: '$ 1.800,00',
          duracao: '9 dias',
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
          preco: '€ 2.500,00',
          duracao: '7 dias',
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
          preco: 'AUD 5.000,00',
          duracao: '15 dias',
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
          preco: '$ 2.000,00',
          duracao: '10 dias',
          image: Mexico
        };
      default:
        return null;
    }
  };

  const countryDetails = loadCountryDetails(countryId!);

  if (!countryDetails) {
    return <div className="text-center text-2xl mt-20">País não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <Link to="/" className="sm:text-2xl text-1xl font-bold hover:underline mb-4 inline-block">&larr;Voltar</Link>
        <h2 className="text-4xl font-bold mb-4 text-center">{countryDetails.name}</h2>
        <div className="flex justify-center mb-8">
          <img className="h-64 sm:h-80 w-full object-cover rounded-lg border-solid border-gray-800 border-2" src={countryDetails.image} alt={countryDetails.name} />
        </div>
        <div className="grid sm:grid-cols-2 pb-4">
          <div>
            <h3 className="text-2xl mt-6 mb-2 font-bold">Principais Pontos Turísticos:</h3>
            <ul className="list-disc pl-6 sm:text-xl text-lg space-y-2">
              <li><strong>Capital:</strong> {countryDetails.capital}</li>
              <li><strong>População:</strong> {countryDetails.population}</li>
              <li><strong>Língua:</strong> {countryDetails.language}</li>
              <li><strong>Moeda:</strong> {countryDetails.currency}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-6 mb-2 font-bold">Informações do Pacote:</h3>
            <ul className="list-disc pl-6 sm:text-xl text-lg space-y-2">
              <li><strong className="font-bold">Preço:</strong> {countryDetails.preco}</li>
              <li><strong className="font-bold">Duração:</strong> {countryDetails.duracao}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-6 mb-2 font-bold">Principais Pontos Turísticos:</h3>
            <ul className="list-disc pl-6 sm:text-xl text-lg space-y-2">
              {countryDetails.landmarks.map((landmark, index) => (
                <li key={`landmark-${index}`}>{landmark}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mt-6 mb-2 font-bold">Culinária Típica:</h3>
            <ul className="list-disc pl-6 sm:text-xl text-lg space-y-2">
              {countryDetails.cuisine.map((dish, index) => (
                <li key={`dish-${index}`}>{dish}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link to={`/checkout/${countryId}`}>
            <button className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-300" type="submit">
              Avançar
            </button>
          </Link>
      </div>
    </div>
  );
};

export default CountryDetails;
