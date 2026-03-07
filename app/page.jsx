import ContactUsForm from "../components/contectus/contactusForm";
import ContactActionButton from "../components/ContactActionButton";
import ServicesPage from "./services/page";
import { FiUser, FiShield, FiClock } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Repair Junction
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional repair and maintenance services for AC units, refrigerators, and washing machines.
            We deliver expert solutions with genuine parts and certified technicians you can trust.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/services"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Feature sections */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
              <FiUser className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expert Technicians</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Certified professionals with years of experience in all types of repairs.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white mb-4">
              <FiShield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quality Guarantee</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              All repairs come with our satisfaction guarantee and warranty coverage.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white mb-4">
              <FiClock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fast Turnaround</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Quick diagnosis and repair services to get you back up and running fast.
            </p>
          </div>
        </div>
        <div>
            <ServicesPage/>
            <ContactUsForm/>
        </div>
      </main>
    
    </div>
  );
}
