import man from "../assets/man.png?url";
import woman from "../assets/woman.png?url";

const Invitation = () => {
  return (
    <div className="w-screen h-screen bg-green-100 flex flex-col justify-center items-center relative">
      <span className="absolute top-2.5" style={{ top: "10px" }}>
        Invitation
      </span>
      <div className="fade-in grid grid-rows-2 gap-4 mt-20">
        <div className="flex justify-center items-center gap-4">
          <img
            src={man}
            alt="Invitation Image"
            className="animate-rotate w-25 h-25"
          />
          <div className="border-2 h-25 w-90">
            환기를 좋아하는 남자를 만났습니다.
            <br />
            6살이나 많지만 애교가 많아 정상참작이 됩니다.
            <br />
            사람 놀리는 재주가 아주 수준급입니다.
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            src={woman}
            alt="Invitation Image"
            className="animate-rotate-reverse w-25 h-25"
          />
          <div className="border-2 h-25 w-90">
            예쁜 여자를 만났습니다.
            <br />
            항상 동요를 부르는 동심이 가득한 사람입니다.
            <br />
            그런데 먹는 건 할머니 음식을 먹습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
