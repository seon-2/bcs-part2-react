import { FaChessRook } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  // 지갑 로그인 기능
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <FaChessRook size={28} />
          <div className="ml-1 text-xl">Ble-Chess-3rd</div>
        </div>
      </Link>
      <div>
        {account ? (
          <div>{account}</div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
