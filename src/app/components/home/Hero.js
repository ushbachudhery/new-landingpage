import { FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/hero.jpg')" }} // Fixed path
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-start text-white px-8 py-16 space-y-6 sm:px-16 sm:py-24 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          The Future of <br /> Urban Living
        </h1>
        <p className="text-lg sm:text-xl max-w-xl">
          Signature Global Twin Tower
          <br />
          Located in Sector 84, Gurugram, Signature Global Twin Towers offers prime access to schools, malls, and hospitals, with seamless connectivity to Dwarka Expressway.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center space-x-3 px-6 py-3 border-2 border-white bg-custom-purple text-white font-semibold rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-purple-700"
        >
          <span>Request A Call Back</span>
          <FaPhoneAlt className="text-lg" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
