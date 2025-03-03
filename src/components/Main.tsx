import main from "../assets/main.png?url";

const Main = () => {
  return (
    <div className="w-screen h-screen bg-yellow-100 flex justify-center items-start">
      <img src={main} alt="Main image" className="w-full object-contain" />
    </div>
  );
};

export default Main;
