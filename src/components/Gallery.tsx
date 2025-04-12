import flowers from "../assets/gallery_flowers.png?url";
import gallery from "../assets/gallery.png?url";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#wedding-photo",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }, []);

  return (
    <div className="w-screen flex justify-center items-start">
      <img
        src={flowers}
        className="absolute w-full object-contain z-10 max-w-full"
        style={{
          minWidth: "225px",
        }}
      />
      <div className="bg-secondary h-full w-full max-w-120 title relative flex flex-col items-center justify-start">
        <div className="pt-10">
          <img src={gallery} className="title-gallery" />
        </div>
        <div
          id="wedding-photo"
          className="container mx-auto grid grid-cols-3 gap-2 px-2 pt-13 pb-2 md:grid-cols-3 z-10"
        >
          {new Array(15).fill(0).map((_, index) => {
            const imagePath = `${
              import.meta.env.BASE_URL
            }src/assets/wedding/wedding-${index + 1}.jpg`;

            const width = window.innerWidth;
            const height = Math.floor((window.innerWidth * 6600) / 4400);

            return (
              <a
                href={imagePath}
                data-pswp-width={width}
                data-pswp-height={height}
                target="_blank"
              >
                <img
                  key={index}
                  src={imagePath}
                  className="w-full h-35 bg-gray-300 rounded object-cover object-center"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
