// Import required components and icons
import { FaBuilding } from "react-icons/fa";

export default function PricingPlans() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pricing Card 1 */}
          <div className="group relative bg-white border rounded-lg shadow-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl border-b-4 hover:border-primary">
            
            <div className="flex justify-center mb-4 text-primary">
              <FaBuilding className="text-5xl group-hover:text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:primary">
              3 BHK 
            </h3>
            <p className="text-primary mb-2">
              <span className="font-bold">Size:</span> On Request
            </p>
            <p className="text-primary mb-2">
            <span className="font-bold">Price:</span> On Request
            </p>
            <button className="bg-white text-primary border-2 border-primary py-2 px-6 rounded-full font-semibold transition-all hover:bg-primary hover:text-white">
              Get Started
            </button>
          </div>

          {/* Pricing Card 2 */}
          <div className="group relative bg-white border rounded-lg shadow-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl border-b-4 hover:border-primary">
            
            <div className="flex justify-center mb-4 text-primary">
              <FaBuilding className="text-5xl group-hover:text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary">
            3.5 BHK
            </h3>
            <p className="text-primary mb-2">
              <span className="font-bold">Size:</span> On Request
            </p>
            <p className="text-primary mb-2">
            <span className="font-bold">Price:</span> On Request
            </p>
            <button className="bg-white text-primary border-2 border-primary py-2 px-6 rounded-full font-semibold transition-all hover:bg-primary hover:text-white">
              Get Started
            </button>
          </div>

          {/* Pricing Card 3 */}
          <div className="group relative bg-white border rounded-lg shadow-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl border-b-4 hover:border-primary">
            
            <div className="flex justify-center mb-4 text-primary">
              <FaBuilding className="text-5xl group-hover:text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:text-primary">
              4 BHK
            </h3>
            <p className="text-primary mb-2">
              <span className="font-bold">Size:</span> On Request
            </p>
            <p className="text-primary mb-2">
            <span className="font-bold">Price:</span> On Request
            </p>
            <button className="bg-white text-primary border-2 border-primary py-2 px-6 rounded-full font-semibold transition-all hover:bg-primary hover:text-white">
              Get Started
            </button>
          </div>

          {/* Pricing Card 4 */}
          <div className="group relative bg-white border rounded-lg shadow-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl border-b-4 hover:border-primary">
            
            <div className="flex justify-center mb-4 text-primary">
              <FaBuilding className="text-5xl group-hover:text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:text-primary">
              4.5 BHK
            </h3>
            <p className="text-primary mb-2">
              <span className="font-bold">Size:</span> On Request
            </p>
            <p className="text-primary mb-2">
            <span className="font-bold">Price:</span> On Request
            </p>
            <button className="bg-white text-primary border-2 border-primary py-2 px-6 rounded-full font-semibold transition-all hover:bg-primary hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
