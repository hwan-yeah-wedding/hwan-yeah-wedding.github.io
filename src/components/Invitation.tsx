import flowers2 from "../assets/flowers2.png?url";
import invitation from "../assets/invitation.png?url";
import man from "../assets/man.png?url";
import man_grass from "../assets/man_grass.png?url";
import arrow1 from "../assets/arrow1.png?url";
import woman from "../assets/woman.png?url";
import woman_grass from "../assets/woman_grass.png?url";
import arrow2 from "../assets/arrow2.png?url";

const Invitation = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-start">
      <div className="bg-secondary w-full max-w-120 relative">
        <img
          src={flowers2}
          className="absolute w-full object-contain z-10 max-w-full top-30"
          style={{
            minWidth: "225px",
            minHeight: "381px",
          }}
        />
        <div className="title relative flex flex-col items-center justify-start top-16">
          <img src={invitation} className="title-h3" />
          <div className="relative w-25 h-25 mt-20">
            <img src={man} className="absolute z-10" />
            <img
              src={man_grass}
              className="absolute z-0 w-10 top-5 animate-rotate"
            />
            <img
              src={arrow1}
              className="absolute rotate-180 w-4 top-25 left-12 z-20"
            />
          </div>
          <div className="bg-primary text-box flex flex-col justify-center items-center mt-4 text-center z-10">
            <p className="mb-2">
              성숙함과 귀여움을 모두 지닌 남자를 만났습니다.
            </p>
            <p className="mb-2">진지한 대화를 하다가도 그의 재치에</p>
            <p className="mb-2">
              결국 웃고 말지요. 그는 나를 가장 나답게 만드는
            </p>
            <p className="">
              <span className="font-bold">소중한 존재</span>임을 알게
              되었습니다.
            </p>
          </div>
          <div className="relative w-25 h-25 mt-10">
            <img src={woman} className="absolute z-0 h-25" />
            <img
              src={woman_grass}
              className="absolute z-10 w-12 top-15 left-12 animate-rotate-reverse"
            />
            <img
              src={arrow2}
              className="absolute rotate-180 w-4 top-28 left-9 z-20"
            />
          </div>
          <div className="bg-primary text-box flex flex-col justify-center items-center mt-7 text-center z-10 ">
            <p className="mb-2">마음이 따뜻한 여자를 만났습니다.</p>
            <p className="mb-2">
              순수한 동심과 어우려져 무척이나 사랑스럽지요.
            </p>
            <p className="mb-2">그녀가 내 곁에서 웃는 게</p>
            <p className="">
              <span className="font-bold">가장 큰 행복</span>임을 알게
              되었습니다.
            </p>
          </div>
          <p className="font-normal mt-10">
            평생의 짝이 되어 같이 살아가기를 약속하고자 합니다.
          </p>
          <p className="font-normal mt-2">
            이 설레는 시간에 소중한 분들을 마음 담아 초대합니다.
          </p>
          <p className="font-normal mt-10">
            <span className="font-bold">서만근 ∙ 유승주</span> 의 아들{" "}
            <span className="font-bold">환수</span>
          </p>
          <p className="font-normal mt-2 pb-10">
            <span className="font-bold">채래문 ∙ 나희숙</span> &nbsp;의
            &nbsp;딸&nbsp; <span className="font-bold">예진</span>
          </p>
          <p className="font-normal mt-10"></p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
