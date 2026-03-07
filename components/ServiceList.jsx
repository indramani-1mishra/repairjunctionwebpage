'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';

export default function ServiceList({ services }) {
  const [query, setQuery] = useState('');

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="mb-8 text-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search services..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-700 dark:text-gray-300">
          No services found.
        </p>
      )}
    </>
  );
}
