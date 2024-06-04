import { Link, useParams } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();

  interface CountryDetails {
    preco: string;
    duracao: string;
  }

  const loadCountryDetails = (id: string): CountryDetails | null => {
    switch (id) {
      case '1':
        return {
          preco: 'R$ 4.500,00',
          duracao: '7 dias',
        };
      case '2':
        return {
          preco: 'R$ 17.258,69',
          duracao: '10 dias',
        };
      case '3':
        return {
          preco: 'R$ 16.108,11',
          duracao: '8 dias',
        };
      case '4':
        return {
          preco: 'R$ 11.632,72',
          duracao: '12 dias',
        };
      case '5':
        return {
          preco: 'R$ 9.517,68',
          duracao: '9 dias',
        };
      case '6':
        return {
          preco: 'R$ 14.382,78',
          duracao: '7 dias',
        };
      case '7':
        return {
          preco: 'R$ 17.574,69',
          duracao: '15 dias',
        };
      case '8':
        return {
          preco: 'R$ 10.575,20',
          duracao: '10 dias',
        };
      default:
        return null;
    }
  }  

const countryDetails = loadCountryDetails(countryId!);

if (!countryDetails) {
  return <div className="text-center text-2xl mt-20">País não encontrado</div>;
}

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Pagamento via PIX</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-1xl font-semibold pt-4"><strong>Preço:</strong> {countryDetails.preco}</p>
          </div>
          <div>
            <p className="text-1xl font-semibold pt-4"><strong>Chave PIX:</strong> 123.456.789-00</p>
          </div>
        </div>
        <h3 className="text-gray-800 text-center p-4">(Obs: Após o pagamento, <strong>entre em contato</strong> para confirmar a reserva.)</h3>
        <Link to="/">
          <button type="submit" className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
