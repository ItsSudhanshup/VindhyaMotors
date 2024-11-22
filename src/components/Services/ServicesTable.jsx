import React from "react";

const ServiceTable = ({ onAddService }) => {
  const services = [
    { name: "Car Wash", price: 500 },
    { name: "Car Polishing", price: 400 },
    { name: "Doorstep Wash", price: 1200 },
    { name: "Parts Repair", price: 10000 },
  ];

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left dark:text-white">Service</th>
            <th className="px-4 py-2 text-left dark:text-white">Price</th>
            <th className="px-4 py-2 text-left dark:text-white">Book</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.name} className="border-t border-gray-300 dark:border-gray-700">
              <td className="px-4 py-2 dark:text-white">{service.name}</td>
              <td className="px-4 py-2 dark:text-white">₹{service.price}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onAddService(service)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
