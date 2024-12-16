import Elogo from "../assets/Emumba-logo.svg";
const Header = () => {
  return (
    <>
      <nav className=" flex bg-emerald-400  text-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <img src={Elogo} alt="emumba" />
        </div>

        <div className="flex items-center space-x-4">
          {" "}
          <input
            type="text"
            placeholder="Search notes"
            className="px-2 py-1 rounded-md text-black"
          />
          <button className="bg-white text-emerald-400 font-semibold px-1.5 py-1 rounded-md hover:bg-blue-100">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
