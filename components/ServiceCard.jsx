'use client';

import Link from 'next/link';
import Image from 'next/image';

// utility map to get tailwind classes by color name
const colorMap = {
  blue: 'bg-blue-600 text-white group-hover:bg-blue-700',
  purple: 'bg-purple-600 text-white group-hover:bg-purple-700',
  green: 'bg-green-600 text-white group-hover:bg-green-700',
  teal: 'bg-teal-600 text-white group-hover:bg-teal-700',
};

export default function ServiceCard({ service }) {
  const { slug, title, emoji, color = 'blue', description, image, features } = service;

  // choose color classes or fall back
  const badgeClasses = colorMap[color] || colorMap.blue;

  return (
    <Link
      href={`/services/${slug}`}
      className="group block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-58 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className={`absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full ${badgeClasses}`}>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Features List */}
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <ul className="space-y-1">
            {features && features.slice(0, 3).map((feat) => (
              <li key={feat} className="flex items-start">
                <span className="mr-2 text-blue-600 dark:text-blue-400">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 transition-colors">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}