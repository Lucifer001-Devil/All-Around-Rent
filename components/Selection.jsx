import { CheckCircle2 } from "lucide-react";

const pricingOptions = [
  {
    title: "Client",
    features: [],
    image: "Customer_2.jpg", // Customer image path
    href: "/clientRegistration",
  },
  {
    title: "Freelancer",
    features: [],
    image: "Freelancer_2.jpg", // Freelancer image path
    href: "/freelancerRegistration",
  },
];

const Selection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Select that you are Client or Freelancer
      </h2>
      <div className="selection-container">
        {pricingOptions.map((option, index) => (
          <div key={index} className="selection-box">
            <div className="p-10 border border-neutral-700 rounded-xl box-content">
              <p className="text-4xl mb-8">{option.title}</p>
              
              {/* Add the image inside the Customer or Freelancer box */}
              {option.image && (
                <div className="user-image mb-8">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
              )}

              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.href}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200 hover:scale-105"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .selection-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* Center all boxes horizontally */
        }

        .selection-box {
          width: 100%; /* Full width on small screens */
          max-width: 600px; /* Set maximum width for larger screens */
          flex: 1 1 30%; /* Equal distribution */
          margin: 10px;
          border: 1px solid #555; /* Keep the border intact */
          border-radius: 12px; /* Slightly rounded corners */
          transition: transform 0.3s ease; /* Smooth transform transition */
        }

        .selection-box:hover {
          transform: scale(1.05); /* Slightly enlarge the box on hover */
        }

        .box-content {
          display: flex; /* Enable Flexbox */
          flex-direction: column; /* Arrange content vertically */
          justify-content: center; /* Center content vertically */
          align-items: center; /* Center content horizontally */
          text-align: center; /* Ensure text alignment is centered */
          min-height: 250px; /* Ensure consistent height for boxes */
        }

        .selection-box a:hover {
          background-color: #e65100; /* Change background color on hover */
          transform: scale(1.05); /* Slightly scale the button */
        }

        /* Styling the image */
        .user-image img {
          border-radius: 50%;
        }

        @media (max-width: 640px) {
          .selection-box {
            max-width: 100%; /* Full width on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Selection;
