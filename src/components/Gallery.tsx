import flowers from "../assets/gallery_flowers.png?url";
import gallery from "../assets/gallery.png?url";
import wedding1 from "../assets/wedding/wedding-1.jpg?url";
import wedding2 from "../assets/wedding/wedding-2.jpg?url";
import wedding3 from "../assets/wedding/wedding-3.jpg?url";
import wedding4 from "../assets/wedding/wedding-4.jpg?url";
import wedding5 from "../assets/wedding/wedding-5.jpg?url";
import wedding6 from "../assets/wedding/wedding-6.jpg?url";
import wedding7 from "../assets/wedding/wedding-7.jpg?url";
import wedding8 from "../assets/wedding/wedding-8.jpg?url";
import wedding9 from "../assets/wedding/wedding-9.jpg?url";
import wedding10 from "../assets/wedding/wedding-10.jpg?url";
import wedding11 from "../assets/wedding/wedding-11.jpg?url";
import wedding12 from "../assets/wedding/wedding-12.jpg?url";
import wedding13 from "../assets/wedding/wedding-13.jpg?url";
import wedding14 from "../assets/wedding/wedding-14.jpg?url";
import wedding15 from "../assets/wedding/wedding-15.jpg?url";

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
          <img
            src={wedding1}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding2}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding3}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding4}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding5}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding6}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding7}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding8}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding9}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding10}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding11}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding12}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding13}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding14}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
          <img
            src={wedding15}
            className="w-full h-35 bg-gray-300 rounded object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
