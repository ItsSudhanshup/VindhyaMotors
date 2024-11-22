import React, { useState } from "react";
import ServiceTable from "./ServicesTable"; // Assuming the table is a separate component
import ServicesCard from "./ServicesCard"; // Assuming the card is a separate component

const ServicesPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleAddService = (service) => {
    if (!selectedServices.some((s) => s.name === service.name)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleRemoveService = (serviceName) => {
    setSelectedServices(selectedServices.filter((service) => service.name !== serviceName));
  };

  return (
    <div className="services-page bg-white dark:bg-gray-900 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-center py-6 dark:text-white">Our Services</h2>

      <ServiceTable onAddService={handleAddService} />

      <ServicesCard
        services={selectedServices}
        onRemoveService={handleRemoveService}
      />
    </div>
  );
};

export default ServicesPage;
