import { FaBuilding, FaRegStar, FaHome, FaColumns, FaIndustry } from 'react-icons/fa';
import aboutImage from "../../../../public/images/hero.jpg"

const About = () => {
  return (
    <>
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">About</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:border-primary transition duration-300">
            <FaBuilding className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary">45</h3>
            <p className="text-lg text-primary">Floor High</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:border-primary transition duration-300">
            <FaRegStar className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary">350</h3>
            <p className="text-lg text-primary">Luxurious Apartments</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:border-primary transition duration-300">
            <FaHome className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary">5 Acres</h3>
            <p className="text-lg text-primary">Project Area</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:border-primary transition duration-300">
            <FaColumns className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary">40000 sq. ft.</h3>
            <p className="text-lg text-primary">Clubhouse Area</p>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md hover:border-primary transition duration-300">
            <FaIndustry className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-primary">2-Level</h3>
            <p className="text-lg text-primary">Basement Parking</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Column */}
        <div>
          {/* <h2 className="text-3xl font-bold text-custom-purple mb-6">About Us</h2> */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            feugiat, sapien a luctus convallis, orci magna facilisis metus, nec
            feugiat metus velit sit amet turpis. Praesent malesuada, lacus
            vitae suscipit faucibus, sapien ex fermentum nunc, eget consequat
            elit magna at odio.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Morbi sollicitudin nibh vitae urna bibendum, at tincidunt eros
            aliquam. Curabitur vestibulum, arcu ut auctor dictum, metus elit
            venenatis urna, id dignissim turpis enim id arcu.
          </p>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <img
            src="/images/hero.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    </>
    
  );
};

export default About;
