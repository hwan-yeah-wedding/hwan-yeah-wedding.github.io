import main from "../assets/main.png?url";

const Main = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={main} alt="Main image" className="h-full object-cover" />
    </div>
  );
};

export default Main;
