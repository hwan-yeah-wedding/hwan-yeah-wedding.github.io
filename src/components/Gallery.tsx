import flowers from "../assets/gallery_flowers.png?url";
import gallery from "../assets/gallery.png?url";

const Gallery = () => {
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
        <div className="container mx-auto grid grid-cols-3 gap-2 px-2 pt-13 pb-2 md:grid-cols-3 z-10">
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
          <div className="w-full h-45 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
