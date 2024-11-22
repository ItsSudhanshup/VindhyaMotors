import React, { useState } from "react";

const ServicesCard = ({ services, onRemoveService }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State for payment message

  const handlePayNow = () => {
    if (services.length === 0) {
      alert("No services selected for payment.");
      return;
    }

    // Simulate payment success
    setPaymentSuccess(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 3000);
  };

  const totalAmount = services.reduce((total, service) => total + service.price, 0);

  return (
    <div className="services-card bg-gray-100 dark:bg-black p-6 rounded shadow-md w-full mx-auto mt-6">
      <h2 className="card-title">Selected Services</h2>
      {services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b">
              <span>{service.name}</span>
              <span>₹{service.price}</span> {/* Updated to use rupee symbol */}
              <button
                className="text-red-500 hover:underline"
                onClick={() => onRemoveService(service.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No services added to the cart.</p>
      )}

      {services.length > 0 && (
        <>
          <div className="mt-4 text-right font-bold">
            Total Amount: ₹{totalAmount} {/* Updated to use rupee symbol */}
          </div>
          <button
            onClick={handlePayNow}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 w-full"
          >
            Pay Now
          </button>
        </>
      )}

      {/* Payment Success Message */}
      {paymentSuccess && (
        <div className="mt-4 text-green-600 font-bold text-center">
          Payment Successful!
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
