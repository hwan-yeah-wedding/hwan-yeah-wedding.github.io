import flowers from "../assets/flowers.png?url";
import background from "../assets/background.png?url";
import title from "../assets/title.png?url";
import people from "../assets/people.png?url";
import { useEffect, useRef } from "react";

const Main = () => {
  const ref = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${window.innerHeight}px`;
    }
    if (peopleRef.current) {
      peopleRef.current.style.maxHeight = `${window.innerHeight / 2}px`;
    }
  }, []);

  return (
    <div className="w-screen flex justify-center items-start">
      <div
        ref={ref}
        className="bg-primary w-full max-w-120 relative"
        style={{
          minWidth: "340px",
          height: "100vh",
        }}
      >
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
        <div className="title relative flex flex-col items-center justify-start top-16 ">
          <img
            src={title}
            className=""
            style={{
              width: "245px",
              height: "95px",
            }}
          />
          <p className="font-name pt-2">환수 & 예진</p>
        </div>
        <div className="info absolute w-full flex flex-col items-center justify-center text-center bottom-15">
          <img
            src={people}
            className="z-20 w-auto top-10 left-0 pr-11 pl-11"
            ref={peopleRef}
            style={{
              minWidth: "180px",
              maxHeight: "50vh",
            }}
          />
          <p className="font-normal pt-5">
            2025년 6월 7일 토요일 오후 6시 30분
          </p>
          <p className="font-normal">로프트가든344 8층 메인홀</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
