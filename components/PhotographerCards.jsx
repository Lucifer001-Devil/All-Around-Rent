import { CheckCircle2 } from "lucide-react";

const photographers = [
  {
    name: "Alex Johnson",
    price: "$200",
    description: "Experienced in wedding and event photography.",
    features: [
      "10+ years of experience",
      "Specializes in candid photography",
      "Available for travel",
      "Quick delivery of edited photos"
    ],
    photo: "",
    rating: 4.8,
    href: "/photographerdetailpage"
  },
  {
    name: "Maria Lopez",
    price: "$150",
    description: "Creative portrait and fashion photographer.",
    features: [
      "5+ years of experience",
      "Expert in studio and outdoor shoots",
      "Offers custom photo packages",
      "Highly rated by clients"
    ],
    photo: "https://via.placeholder.com/150",
    rating: 4.9
  },
  {
    name: "James Smith",
    price: "$180",
    description: "Professional photographer specializing in landscapes.",
    features: [
      "8+ years of experience",
      "Drone photography available",
      "High-quality equipment",
      "Expert in editing and retouching"
    ],
    photo: "https://via.placeholder.com/150",
    rating: 4.7
  },
  {
    name: "Sophie Turner",
    price: "$220",
    description: "Specialist in wildlife and adventure photography.",
    features: [
      "Published in national magazines",
      "Expert in natural light photography",
      "Highly adaptable to challenging environments",
      "Fast turnaround time"
    ],
    photo: "https://via.placeholder.com/150",
    rating: 5.0
  },
  {
    name: "Michael Brown",
    price: "$170",
    description: "Specialist in corporate and product photography.",
    features: [
      "Extensive portfolio with big brands",
      "Creative concept design",
      "Professional lighting setups",
      "Focus on brand storytelling"
    ],
    photo: "https://via.placeholder.com/150",
    rating: 4.6
  },
  {
    name: "Emily Davis",
    price: "$190",
    description: "Expert in newborn and family photography.",
    features: [
      "Warm and friendly approach",
      "Experienced with children",
      "Wide range of props available",
      "Flexible scheduling"
    ],
    photo: "https://via.placeholder.com/150",
    rating: 4.8
  }
];

const PhotographerCards = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Freelance Photographers
      </h2>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photographers.map((photographer, index) => (
            <div
              key={index}
              className="p-2"
            >
              <div className="p-5 border border-neutral-700 rounded-xl">
                <img
                  src={photographer.photo}
                  alt={photographer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-2xl mb-4 text-center">
                  {photographer.name}
                </p>
                <p className="text-center text-yellow-500 mb-4">
                  Rating: {photographer.rating} ★
                </p>
                <p className="mb-4 text-neutral-400 text-center">
                  {photographer.description}
                </p>
                <p className="mb-4 text-center">
                  <span className="text-3xl mt-6 mr-2">{photographer.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Session</span>
                </p>
                <ul>
                  {photographer.features.map((feature, index) => (
                    <li key={index} className="mt-4 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={photographer.href}
                  className="inline-flex justify-center items-center text-center w-full h-10 p-4 mt-10 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographerCards;
