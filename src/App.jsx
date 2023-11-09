import React from 'react';


function App() {
  return (
    <>
      <div className="grid grid-cols-5 bg-orange-400 p-4">
        <div className="col-span-3 flex items-center justify-center">
          <h1 className="text-3xl font-sans text-black">COMIDAS</h1>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 text-yellow-200">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>
        <div className="col-span-1 flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-11 h-11 text-white bg-red-500 p-1 rounded-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 bg-yellow-400 h-screen place-content-start">
        <div className="w-full md:w-11/12 h-24 shadow-md  bg-white rounded-2xl m-4 flex justify-center items-center p-2">
          <div className="w-full h-full rounded-2xl grid grid-cols-2">
            <img src="https://img.freepik.com/foto-gratis/surtido-arepas-relleno-plato_23-2148742392.jpg?size=626&ext=jpg&ga=GA1.1.58449625.1699456218&semt=sph" alt="Descripción de la imagen" className="object-cover w-auto h-20 rounded-2xl" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-black font-sans max-w-sm ...">Gorditas Becerra</h1>
              <label className="text-sm font-normal text-gray-400 font-sans">$ Mexicana/gorditas</label>
              <label className="text-base font-light font-mono text-black">MX$26</label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 h-24 shadow-md  bg-white rounded-2xl m-4 flex justify-center items-center p-2">
          <div className="w-full h-full rounded-2xl grid grid-cols-2">
            <img src="https://img.freepik.com/foto-gratis/vista-superior-olla-relleno-arepas-salsa_23-2148742408.jpg?size=626&ext=jpg&ga=GA1.1.58449625.1699456218&semt=sph" alt="Descripción de la imagen" className="object-cover w-auto h-20 rounded-2xl" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-black font-sans">Carnitas Ramos</h1>
              <label className="text-sm font-normal text-gray-400 font-sans">$ Mexicana/1kg</label>
              <label className="text-base font-light font-mono text-black">MX$400</label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 h-24 shadow-md  bg-white rounded-2xl m-4 flex justify-center items-center p-2">
          <div className="w-full h-full rounded-2xl grid grid-cols-2">
            <img src="https://img.freepik.com/fotos-premium/barbacoa-tradicional-desmenuzada-cerdo-paleta-desmenuzada-cerdo-cocinada-fuego-lento-jugosa-carne-cerdo-cocinada-ahumador-lento_147620-3337.jpg" alt="Descripción de la imagen" className="object-cover w-auto h-20 rounded-2xl" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-black font-sans">Barbacoa Rosy</h1>
              <label className="text-sm font-normal text-gray-400 font-sans">$ Mexicana/1kg</label>
              <label className="text-base font-light font-mono text-black">MX$300</label>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
