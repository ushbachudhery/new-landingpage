import React from 'react';
import { FaChartPie, FaHome, FaProjectDiagram, FaBullseye } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-gray-300">
            <div className="flex flex-col items-center">
              <div className="text-blue-500 mb-4">
                <FaChartPie className="w-12 h-12" />
              </div>
              <p className="text-center font-semibold text-gray-800">
                36% market share in Gurugram's affordable housing segment
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-gray-300">
            <div className="flex flex-col items-center">
              <div className="text-green-500 mb-4">
                <FaHome className="w-12 h-12" />
              </div>
              <p className="text-center font-semibold text-gray-800">
                Delivered 10.4 million sq. ft. of housing
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-gray-300">
            <div className="flex flex-col items-center">
              <div className="text-purple-500 mb-4">
                <FaProjectDiagram className="w-12 h-12" />
              </div>
              <p className="text-center font-semibold text-gray-800">
                32.2 million sq. ft. in upcoming projects
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-gray-300">
            <div className="flex flex-col items-center">
              <div className="text-red-500 mb-4">
                <FaBullseye className="w-12 h-12" />
              </div>
              <p className="text-center font-semibold text-gray-800">
                Targeting ₹100 billion in sales by FY25
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
