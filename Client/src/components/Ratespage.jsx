// RatesPage.jsx
import React from 'react';
import 'tailwindcss/tailwind.css';

const categories = [
  {
    name: 'Electronics',
    items: [
      { name: 'Laptop', rate: '$800' },
      { name: 'Smartphone', rate: '$600' },
      { name: 'Tablet', rate: '$300' },
    ],
  },
  {
    name: 'Furniture',
    items: [
      { name: 'Sofa', rate: '$400' },
      { name: 'Dining Table', rate: '$250' },
      { name: 'Chair', rate: '$50' },
    ],
  },
  {
    name: 'Appliances',
    items: [
      { name: 'Refrigerator', rate: '$1000' },
      { name: 'Washing Machine', rate: '$700' },
      { name: 'Microwave', rate: '$150' },
    ],
  },
];

const RatesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Product Rates</h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{category.name}</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-gray-500">Product</th>
                  <th className="py-3 px-6 text-left text-gray-500">Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {category.items.map((item) => (
                  <tr key={item.name}>
                    <td className="py-3 px-6 text-gray-800">{item.name}</td>
                    <td className="py-3 px-6 text-gray-800">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatesPage;
