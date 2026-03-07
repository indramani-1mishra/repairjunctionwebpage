import { services } from "../../lib/services";
import ServiceList from "../../components/ServiceList";
import { FaTools, FaBolt, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Our Services | Repair Junction",
  description:
    "Professional repair and maintenance services for AC, refrigerators, and washing machines",
};



export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">

      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Repair Junction Services
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
          Comprehensive repair and maintenance solutions for all your home appliances
        </p>

        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          With years of expertise, Repair Junction delivers professional, reliable, and affordable services
        </p>
      </div>

      {/* Services Grid */}
      <ServiceList services={services} />

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
          <FaTools size={40} className="mx-auto mb-4 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Expert Technicians
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Trained professionals with years of industry experience
          </p>
        </div>

        <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
          <FaBolt size={40} className="mx-auto mb-4 text-yellow-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            24/7 Service
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Emergency support available anytime you need us
          </p>
        </div>

        <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
          <FaCheckCircle size={40} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Guaranteed
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Warranty on all repairs and genuine parts
          </p>
        </div>

      </div>
    </div>
  );
}