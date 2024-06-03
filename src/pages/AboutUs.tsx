const AboutUs = () => {
    return (
        <div id="sobre-nos" className="relative w-full h-fit text-center md:text-start pb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 p-10">Sobre Nós</h1>
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    Bem-vindo à Planet Tour! Somos uma agência de turismo dedicada a proporcionar experiências de viagem inesquecíveis. Desde nossa fundação, temos a missão de conectar pessoas a destinos incríveis, oferecendo pacotes personalizados que atendem às necessidades e desejos de cada viajante.
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    Nossa missão é tornar cada viagem uma experiência única e memorável, proporcionando serviços de alta qualidade e atendimento personalizado. Queremos inspirar e capacitar nossos clientes a explorar o mundo de forma segura e agradável.
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Nossa Visão</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    Ser reconhecida como a agência de turismo líder no mercado, conhecida pela excelência em atendimento e inovação em serviços de viagem. Almejamos ser a primeira escolha de quem deseja explorar novos destinos com conforto e segurança.
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-6 flex flex-col items-start">
                    <li>Compromisso com a qualidade e satisfação do cliente</li>
                    <li>Integridade e transparência em todas as nossas ações</li>
                    <li>Inovação e criatividade na criação de pacotes de viagem</li>
                    <li>Responsabilidade social e ambiental</li>
                    <li>Trabalho em equipe e desenvolvimento contínuo</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;


