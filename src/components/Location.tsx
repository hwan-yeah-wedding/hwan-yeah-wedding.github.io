import { useEffect, useRef } from "react";
import location from "../assets/location.png?url";

const LAT = 37.5240948;
const LNG = 126.8754857;

const Location = () => {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const map = new naver.maps.Map("map", {
  //     center: new naver.maps.LatLng(LAT, LNG),
  //     zoom: 17,
  //   });

  //   const marker = new naver.maps.Marker({
  //     position: new naver.maps.LatLng(LAT, LNG),
  //     map: map,
  //     icon: {
  //       url: "https://map.pstatic.net/resource/api/v2/image/maps/selected-marker/229169@2x.png?version=12&mapping=marker-113",
  //       scaledSize: [46, 59],
  //     },
  //     // animation: naver.maps.Animation.BOUNCE,
  //   });

  //   const markerEl = marker.getElement();

  //   markerEl.style.opacity = "0";
  //   markerEl.style.transform = "translateY(-20px)";
  //   markerEl.style.transition = "opacity 1s, transform 1s";

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("Map is in viewport");
  //           // 여기에 원하는 동작을 추가하세요
  //           markerEl.style.opacity = "1";
  //           markerEl.style.transform = "translateY(0)";
  //         }
  //       });
  //     },
  //     { threshold: 0.8 } // 10%가 뷰포트에 들어오면 콜백 실행
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="w-screen h-full">
      <div className="w-full relative flex flex-col justify-start items-center top-16">
        <img src={location} className="title-location" />
        <div
          ref={ref}
          id="map"
          className="w-full border-1 mt-13"
          style={{ height: "100vw" }}
        ></div>
      </div>
    </div>
  );
};

export default Location;
