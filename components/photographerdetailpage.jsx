import { CheckCircle2 } from "lucide-react";

const photographerDetails = {
  name: "Alex Johnson",
  bio: "Alex Johnson is a professional photographer with over 10 years of experience specializing in wedding and event photography. Known for capturing candid moments and delivering high-quality photos with a personal touch, Alex ensures each project is handled with care, creativity, and dedication to detail. Whether it's an intimate wedding or a large corporate event, Alex's versatility and professionalism make him the ideal choice for all photography needs.",
  price: "$200",
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

const PhotographerDetailPage = () => {
  return (
    <div className="mt-16 px-4 sm:px-8 lg:px-16">
      <div className="flex items-center justify-center mb-8">
        {/* Profile Photo */}
        <img
          src={photographerDetails.profilePic}
          alt={`${photographerDetails.name} Profile`}
          className="w-32 h-32 rounded-full mr-6"
        />
        {/* Name */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-center">
            {photographerDetails.name}
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Description */}
        <div className="text-neutral-400 text-lg">
          <p className="mb-4 text-justify">{photographerDetails.bio}</p>
          <p className="mb-4 text-justify">Alex is passionate about telling stories through his lens. His approach is centered on capturing real emotions and making every moment unforgettable. With a diverse portfolio, Alex is trusted by clients for his ability to adapt to any type of event, whether it's a wedding, corporate shoot, or portrait session.</p>
        </div>

        {/* Right side - Equipment, Camera Types, Crew, Pricing */}
        <div className="space-y-8">
          {/* Equipment Section */}
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Equipment</h3>
            <div className="flex flex-wrap gap-4 text-neutral-400 text-lg">
              {photographerDetails.equipment.map((item, index) => (
                <div key={index} className="flex items-center p-2 border border-neutral-300 rounded-md w-auto">
                  <CheckCircle2 className="text-yellow-500 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Camera Types Section */}
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Camera Types</h3>
            <div className="flex flex-wrap gap-4 text-neutral-400 text-lg">
              {photographerDetails.cameraTypes.map((type, index) => (
                <div key={index} className="flex items-center p-2 border border-neutral-300 rounded-md w-auto">
                  <CheckCircle2 className="text-yellow-500 mr-2" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crew Size Section */}
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Crew Size</h3>
            <p className="text-lg text-neutral-400">{photographerDetails.crewSize} people</p>
          </div>

          {/* Pricing Section */}
          <div>
            <h3 className="text-2xl mb-4 font-semibold text-neutral-300">Pricing</h3>
            <div className="space-y-2">
              {photographerDetails.detailedPricing.map((service, index) => (
                <div key={index} className="flex justify-between text-lg text-neutral-400">
                  <span>{service.service}</span>
                  <span>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Past Works Section (Below Description) */}
      <div className="mt-12">
        <h3 className="text-2xl mb-6 font-semibold text-neutral-300">Past Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photographerDetails.pastWorks.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img src={image} alt={`Past work ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-12 flex gap-6 justify-center mb-12">
        <a
          href="#"
          className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Add to Wishlist
        </a>
        <a
          href="/ordersummarypage"
          className="inline-flex justify-center items-center text-center w-48 h-12 p-4 tracking-tight text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
        >
          Book Services
        </a>
      </div>
    </div>
  );
};

export default PhotographerDetailPage;
