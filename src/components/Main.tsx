import main from "../assets/main.png?url";
import flowers from "../assets/flowers.png?url";
import background from "../assets/background.png?url";
import title from "../assets/title.png?url";
import people from "../assets/people.png?url";

const Main = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-start">
      <div className="bg-primary w-full h-full max-w-120 relative">
        <img
          src={flowers}
          alt="Main image"
          className="absolute w-full h-full object-fill z-10 max-w-full max-h-full"
          style={{
            minWidth: "225px",
            minHeight: "381px",
          }}
        />
        <img
          src={background}
          className="absolute z-0 w-full h-full top-0 left-0 p-8"
          style={{
            minWidth: "180px",
            minHeight: "350px",
          }}
        />
        <div>
          {/* <img
            src={people}
            className="absolute z-0 w-full h-full top-10 left-0 p-8"
            style={{
              minWidth: "180px",
              minHeight: "350px",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
