const ContactUs = () => {
    return (
        <div id="contatos" className="relative w-full h-fit bg-gray-800 pb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center p-10">Contato</h1>
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-8 md:text-start text-center text-white">
                    <p className="text-base sm:text-lg mb-4">
                        Entre em contato conosco para mais informações sobre nossos pacotes de viagem e serviços. Estamos aqui para ajudar você a planejar a viagem dos seus sonhos!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold  mb-2">Endereço</h2>
                            <p className="text-base">Rua Serra de Bragança, 823</p>
                            <p className="text-base">São Paulo-SP, CEP: 03318000</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold  mb-2">Celular</h2>
                            <p className="text-base">(12) 99563-3227</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold  mb-2">Email</h2>
                            <p className="text-base">contato@planettour.com</p>
                        </div>
                    </div>
                </div>
                <form className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
                                Nome
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="text"
                                id="name"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="email"
                                id="email"
                                placeholder="Seu email"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 font-bold mb-2" htmlFor="message">
                            Mensagem
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            id="message"
                            rows={4}
                            placeholder="Sua mensagem"
                        ></textarea>
                    </div>
                    <button className="w-full bg-gray-500 text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-300" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
