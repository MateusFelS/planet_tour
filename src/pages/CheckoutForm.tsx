import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useParams } from 'react-router-dom';

const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
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
          preco: '€ 3.000,00',
          duracao: '10 dias',
        };
      case '3':
        return {
          preco: '€ 2.800,00',
          duracao: '8 dias',
        };
      case '4':
        return {
          preco: '$ 2.200,00',
          duracao: '12 dias',
        };
      case '5':
        return {
          preco: '$ 1.800,00',
          duracao: '9 dias',
        };
      case '6':
        return {
          preco: '€ 2.500,00',
          duracao: '7 dias',
        };
      case '7':
        return {
          preco: 'AUD 5.000,00',
          duracao: '15 dias',
        };
      case '8':
        return {
          preco: '$ 2.000,00',
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error(error);
      } else {
        console.log(paymentMethod);
        const response = await fetch('/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
        });

        const paymentIntent = await response.json();
        console.log(paymentIntent);
      }
    } else {
      console.error('Erro ao obter o elemento do cartão');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <Link to="/" className="sm:text-4x1 font-semibold hover:underline mb-4 inline-block">&larr; Voltar</Link>
        <h2 className="text-3xl font-bold mb-4 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardElement className="p-4 border border-gray-300 rounded-lg" />
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Preço:</p>
              <p className="text-gray-600">{countryDetails.preco}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Duração:</p>
              <p className="text-gray-600">{countryDetails.duracao}</p>
            </div>
          </div>
          <button type="submit" disabled={!stripe} className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
