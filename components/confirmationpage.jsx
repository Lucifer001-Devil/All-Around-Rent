import { CheckCircle2 } from "lucide-react"; // Import CheckCircle for styling

const ConfirmationPage = () => {
  // Hardcoded selected services
  const selectedServices = [
    { name: "Wedding Photography", price: "$2000" },
    { name: "Portrait Session", price: "$500" },
    { name: "Event Coverage", price: "$1500" }
  ];

  // Calculate total price
  const totalPrice = selectedServices.reduce((acc, service) => acc + parseInt(service.price.replace('$', '')), 0);

  return (
    <div className="mt-16 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center mb-8">
        {/* Success Message */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl text-green-600 font-bold">Booking Confirmed!</h2>
          <p className="text-xl text-neutral-400 mt-2">
            Your photographer booking has been successfully confirmed.
          </p>
        </div>

        {/* Photographer's Profile */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="../src/user3.jpg" // You can replace this with dynamic image if needed
            alt="Photographer Profile"
            className="w-32 h-32 rounded-full mr-6"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-center">
              Alex Johnson
            </h2>
            <p className="text-neutral-400 text-lg text-center">
              A professional photographer specializing in weddings and events.
            </p>
          </div>
        </div>

        {/* Selected Services */}
        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Selected Services</h3>
          <div className="space-y-4 text-lg text-neutral-400">
            {selectedServices?.map((service, index) => (
              <div key={index} className="flex justify-between space-x-4">
                <span>{service.name}</span>
                <span>{service.price}</span>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="flex justify-between mt-6">
            <h3 className="text-2xl font-semibold text-neutral-300">Total Price</h3>
            <p className="text-lg text-neutral-400">{`$${totalPrice}`}</p>
          </div>
        </div>

        {/* Confirmation Icon */}
        <div className="mt-6">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-6 justify-center">
          <a
            href="/"
            className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
          >
            Go to Homepage
          </a>
          <a
            href="/BookingsPage"
            className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
          >
            View My Bookings
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
