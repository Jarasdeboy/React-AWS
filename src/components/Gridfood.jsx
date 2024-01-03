import { Foodcard } from "./Foodcard";
const Gridfood = () => {

    const imageUrls = [
        'https://img.freepik.com/foto-gratis/surtido-arepas-relleno-plato_23-2148742392.jpg?size=626&ext=jpg&ga=GA1.1.58449625.1699456218&semt=sph',
        'https://img.freepik.com/foto-gratis/vista-superior-olla-relleno-arepas-salsa_23-2148742408.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.58449625.1699456218&amp;semt=sph',
        'https://img.freepik.com/fotos-premium/barbacoa-tradicional-desmenuzada-cerdo-paleta-desmenuzada-cerdo-cocinada-fuego-lento-jugosa-carne-cerdo-cocinada-ahumador-lento_147620-3337.jpg',
    ];
    return (
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 bg-yellow-400 h-screen place-content-start">
            {imageUrls.map((imageUrl, index) => (
                <Foodcard key={index} imageUrl={imageUrl} />
            ))}
        </div>
    );
}

export { Gridfood };