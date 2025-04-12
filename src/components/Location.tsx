import { useEffect, useRef } from "react";
import location from "../assets/location.png?url";

const LAT = 37.5240948;
const LNG = 126.8754857;

const Location = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(LAT, LNG),
      zoom: 17,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(LAT, LNG),
      map: map,
      icon: {
        url: "https://map.pstatic.net/resource/api/v2/image/maps/selected-marker/229169@2x.png?version=12&mapping=marker-113",
        scaledSize: [46, 59],
      },
      // animation: naver.maps.Animation.BOUNCE,
    });

    const markerEl = marker.getElement();

    markerEl.style.opacity = "0";
    markerEl.style.transform = "translateY(-20px)";
    markerEl.style.transition = "opacity 1s, transform 1s";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Map is in viewport");
            // 여기에 원하는 동작을 추가하세요
            markerEl.style.opacity = "1";
            markerEl.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.8 } // 10%가 뷰포트에 들어오면 콜백 실행
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="pt-10 relative flex flex-col justify-start items-center">
        <img src={location} className="title-location" />
        <div
          ref={ref}
          id="map"
          className="w-full mt-15"
          style={{ height: "100vw" }}
        />
        <div className="mt-8 text-[#4D2511] font-bold text-[17px]">
          서울 양천구 오목로 344 청학빌딩 8층 메인홀
        </div>
        <div className="mt-2 mb-8 p-3 ">
          <div className="table w-full">
            <div className="table-row">
              <div className="table-cell p-2 font-bold">대중교통</div>
              <div className="table-cell p-2 ">
                5호선 오목교역 7번 출구 앞 (도보 1분)
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell p-2 font-bold">자가용</div>
              <div className="table-cell p-2">
                <div>
                  ∙ 전용주차장{" "}
                  <span className="bg-parking px-2 py-1">2시간 무료</span>
                </div>
                <div className="ml-4 mt-1.5">
                  : 서울 양천구 오목로 344 청학빌딩
                </div>
                <div className="mt-3">
                  ∙ 공영주차장{" "}
                  <span className="bg-parking px-2 py-1">3시간 무료</span>
                </div>
                <div className="ml-4 mt-1.5">
                  : 서울 양천구 목동동로 298 (도보 5분)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
