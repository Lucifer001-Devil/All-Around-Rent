import { useState } from "react";

const photographerDetails = {
  name: "Alex Johnson",
  bio: "Alex Johnson is a professional photographer with over 10 years of experience specializing in wedding and event photography. Known for capturing candid moments and delivering high-quality photos with a personal touch, Alex ensures each project is handled with care, creativity, and dedication to detail. Whether it's an intimate wedding or a large corporate event, Alex's versatility and professionalism make him the ideal choice for all photography needs.",
  equipment: [
    "Canon EOS 5D Mark IV",
    "24-70mm f/2.8 Lens",
    "Gimbal Stabilizer",
    "Lighting Kit",
    "Reflectors"
  ],
  cameraTypes: ["DSLR", "Mirrorless"],
  crewSize: 3,
  reviews: [
    { reviewer: "John Doe", rating: 5, comment: "Amazing experience, highly recommend!" },
    { reviewer: "Sara Lee", rating: 4, comment: "Great shots but a bit expensive." },
    { reviewer: "Tom Green", rating: 5, comment: "Captured beautiful moments at our wedding." }
  ],
  detailedPricing: [
    { service: "Wedding Photography", price: "$2000" },
    { service: "Portrait Session", price: "$500" },
    { service: "Event Coverage", price: "$1500" }
  ],
  pastWorks: [
    "../src/assets/wed1.jpg",
    "../src/assets/wed2.jpg",
    "../src/assets/wed3.jpg",
    "../src/assets/wed4.jpg",
    "../src/assets/pexels-aksh-shaurya-36099307-12200847.jpg",
    "../src/assets/wed6.jpg"
  ],
  profilePic: '../src/user3.jpg' // Add your profile picture URL here
};

const OrderSummaryPage = () => {
  // Initialize selectedServices state for selected services and total price
  const [selectedServices] = useState([
    { service: "Wedding Photography", price: 2000 },
    { service: "Portrait Session", price: 500 },
    { service: "Event Coverage", price: 1500 }
  ]);

  // Calculate the total price by adding up the prices of selected services
  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  return (
    <div className="mt-16 px-4 sm:px-8 lg:px-16">
      {/* Freelancer Information */}
      <div className="flex items-center justify-center mb-8">
        <img
          src={photographerDetails.profilePic}
          alt={`${photographerDetails.name} Profile`}
          className="w-32 h-32 rounded-full mr-6"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-center">
            {photographerDetails.name}
          </h2>
          <p className="text-neutral-400 text-lg">{photographerDetails.bio}</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Selected Services */}
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Selected Services</h3>
          <div className="space-y-4 text-lg text-neutral-400">
            {photographerDetails.detailedPricing.map((service, index) => (
              <div key={index} className="flex justify-between space-x-4">
                <span>{service.service}</span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Customer Information */}
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Customer Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-neutral-300">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md border border-neutral-400" />
            </div>
            <div>
              <label className="block text-neutral-300">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-neutral-400" />
            </div>
            <div>
              <label className="block text-neutral-300">Phone Number</label>
              <input type="text" placeholder="Enter your phone number" className="w-full px-4 py-2 rounded-md border border-neutral-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Date & Time */}
      <div className="mt-12">
        <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Select Booking Date & Time</h3>
        <div>
          <label className="block text-neutral-300">Date</label>
          <input type="date" className="w-full px-4 py-2 rounded-md border border-neutral-400 mb-4" />
        </div>
        <div>
          <label className="block text-neutral-300">Time</label>
          <input type="time" className="w-full px-4 py-2 rounded-md border border-neutral-400" />
        </div>
      </div>

      {/* Payment Information (Optional for now) */}
      <div className="mt-12">
        <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Payment Information</h3>
        <p className="text-lg text-neutral-400">Enter your payment details to complete the booking.</p>
        {/* Placeholder for Payment Integration */}
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-orange-600 text-white rounded-md">Proceed to Payment</button>
        </div>
      </div>

      {/* Order Total */}
      <div className="mt-12">
        <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Order Total</h3>
        <div className="flex justify-between text-lg text-neutral-400">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>

      {/* Final Confirmation Buttons */}
      <div className="mt-12 flex gap-6 justify-center mb-12">
        <a
          href="#"
          className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Cancel Order
        </a>
        <a
          href="/ConfirmationPage"
          className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Confirm & Book
        </a>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
