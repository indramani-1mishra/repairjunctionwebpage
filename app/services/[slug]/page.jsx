import { services } from '../../../lib/services';
import ServiceFeatures from '../../../components/ServiceFeatures';
import Link from 'next/link';
import Image from 'next/image';
import { MdAddCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  return {
    title: service ? `${service.title} | Repair Junction` : 'Service',
    description: service ? service.description : '',
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-gray-700">Service not found.</p>
        <div className="text-center mt-4">
          <Link href="/services" className="text-blue-600 hover:underline">
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/services" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Hero Section with Image */}
        {service.image && (
          <div className="relative h-100 w-full  rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className=""
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-bold text-white">{service.title}</h1>
            </div>
          </div>
        )}

        {!service.image && (
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {service.title}
          </h1>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Service</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {service.fullDescription || service.description}
              </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                  <span>Expert & Trained Professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                  <span>Genuine Parts & Materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                  <span>Fast & Reliable Service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                  <span>Warranty Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                  <span>24/7 Emergency Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <ServiceFeatures service={service} />

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">Ready for Expert Service?</h3>
          <p className="text-blue-100 text-lg mb-8">
            Contact Repair Junction now for professional {service.title} solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919999999999"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              <MdAddCall className="inline mr-2" />
               Call Now
            </a>
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition-colors inline-block"
            >
              <MdOutlineMail className="inline mr-2 " />
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    </div>
  );
}
