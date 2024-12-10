import { CheckCircle2 } from "lucide-react";

// Example booking data for different freelance services
const bookings = [
  {
    id: 1,
    freelancer: "Alex Johnson",
    service: "Photography - Wedding",
    price: "$200",
    description: "Capturing beautiful moments at weddings.",
    status: "current",
    photo: "https://via.placeholder.com/150",
    date: "2024-12-10",
    category: "Photography",
  },
  {
    id: 2,
    freelancer: "Maria Lopez",
    service: "AC Cleaning",
    price: "$150",
    description: "Cleaning and servicing of air conditioners.",
    status: "past",
    photo: "https://via.placeholder.com/150",
    date: "2024-10-05",
    category: "AC Cleaning",
  },
  {
    id: 3,
    freelancer: "James Smith",
    service: "House Help",
    price: "$180",
    description: "General cleaning and home assistance.",
    status: "canceled",
    photo: "https://via.placeholder.com/150",
    date: "2024-08-15",
    category: "House Help",
  },
  {
    id: 4,
    freelancer: "Sophie Turner",
    service: "Photography - Wildlife",
    price: "$220",
    description: "Capturing wildlife in their natural habitat.",
    status: "current",
    photo: "https://via.placeholder.com/150",
    date: "2024-11-20",
    category: "Photography",
  },
  {
    id: 5,
    freelancer: "Michael Brown",
    service: "House Painting",
    price: "$170",
    description: "Expert painting services for homes and offices.",
    status: "past",
    photo: "https://via.placeholder.com/150",
    date: "2024-09-10",
    category: "House Painting",
  },
  {
    id: 6,
    freelancer: "Emily Davis",
    service: "House Help - Childcare",
    price: "$190",
    description: "Experienced and caring childcare services.",
    status: "canceled",
    photo: "https://via.placeholder.com/150",
    date: "2024-07-20",
    category: "House Help",
  }
];

const BookingsPage = () => {
  const currentOrders = bookings.filter(order => order.status === 'current');
  const pastOrders = bookings.filter(order => order.status === 'past');
  const canceledOrders = bookings.filter(order => order.status === 'canceled');

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        My Bookings
      </h2>

      {/* Current Orders Section */}
      <div>
        <h3 className="text-2xl mb-4 text-neutral-300 text-center">Current Orders</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentOrders.map((order) => (
              <div key={order.id} className="p-2 max-w-xs">
                <div className="p-5 border border-neutral-700 rounded-xl">
                  <img
                    src={order.photo}
                    alt={order.freelancer}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-2xl mb-4 text-center">{order.freelancer}</p>
                  <p className="text-center text-yellow-500 mb-4">{order.service}</p>
                  <p className="mb-4 text-neutral-400 text-center">Booking Date: {order.date}</p>
                  <p className="mb-4 text-center">
                    <span className="text-3xl mt-6 mr-2">{order.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Service</span>
                  </p>
                  <a
                    href="#"
                    className="inline-flex justify-center items-center text-center w-full h-10 p-4 mt-10 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Orders Section */}
      <div className="mt-10">
        <h3 className="text-2xl mb-4 text-neutral-300 text-center">Past Orders</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastOrders.map((order) => (
              <div key={order.id} className="p-2 max-w-xs">
                <div className="p-5 border border-neutral-700 rounded-xl">
                  <img
                    src={order.photo}
                    alt={order.freelancer}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-2xl mb-4 text-center">{order.freelancer}</p>
                  <p className="text-center text-yellow-500 mb-4">{order.service}</p>
                  <p className="mb-4 text-neutral-400 text-center">Booking Date: {order.date}</p>
                  <p className="mb-4 text-center">
                    <span className="text-3xl mt-6 mr-2">{order.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Service</span>
                  </p>
                  <a
                    href="#"
                    className="inline-flex justify-center items-center text-center w-full h-10 p-4 mt-10 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Canceled Orders Section */}
      <div className="mt-10">
        <h3 className="text-2xl mb-4 text-neutral-300 text-center">Canceled Orders</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {canceledOrders.map((order) => (
              <div key={order.id} className="p-2 max-w-xs">
                <div className="p-5 border border-neutral-700 rounded-xl">
                  <img
                    src={order.photo}
                    alt={order.freelancer}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-2xl mb-4 text-center">{order.freelancer}</p>
                  <p className="text-center text-red-500 mb-4">{order.service}</p>
                  <p className="mb-4 text-neutral-400 text-center">Booking Date: {order.date}</p>
                  <p className="mb-4 text-center">
                    <span className="text-3xl mt-6 mr-2">{order.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Service</span>
                  </p>
                  <p className="text-center text-red-500 mt-2">Canceled</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
