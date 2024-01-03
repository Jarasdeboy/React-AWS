const Foodcard = () => {
    return (
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
    );
  }

  export { Foodcard };