import { FaChessRook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <div className="flex items-center text-main">
        <FaChessRook size={28} />
        <div className="ml-1 text-xl">Ble-Chess-3rd</div>
      </div>
      <div>wallet</div>
    </header>
  );
};

export default Header;
