import { Foodcard } from "./Foodcard";
const Gridfood = () => {
    return (
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 bg-yellow-400 h-screen place-content-start">
        <Foodcard />
      </div>
    );
  }

  export { Gridfood };