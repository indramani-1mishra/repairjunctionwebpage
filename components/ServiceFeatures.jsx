export default function ServiceFeatures({ service }) {

  const colorMap = {
    blue: "bg-blue-600 text-blue-600",
    purple: "bg-purple-600 text-purple-600",
    green: "bg-green-600 text-green-600",
    teal: "bg-teal-600 text-teal-600",
  };

  const colorClasses = colorMap[service.color] || colorMap.blue;

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Our {service.title} Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.features.map((feat) => (
          <div
            key={feat}
            className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div
              className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-lg ${colorClasses} text-white`}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="ml-4">
              <p className="text-gray-900 dark:text-white font-semibold">
                {feat}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}