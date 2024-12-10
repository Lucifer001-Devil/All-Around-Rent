import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Listings from "./components/Listings";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ClientRegistration from "./components/ClientRegistration";
import FreelancerRegistration from "./components/FreelancerRegistration";
import Selection from "./components/Selection";
import PhotographerDetailPage from "./components/photographerdetailpage";
import BookingsPage from "./components/Myorders";
import OrderSummaryPage from "./components/ordersummarypage"
import PhotographerCards from "./components/PhotographerCards"
import ConfirmationPage from "./components/confirmationpage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricings" element={<Pricing />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/clientRegistration" element={<ClientRegistration />} />
        <Route path="/freelancerRegistration" element={<FreelancerRegistration />} />
        <Route path="/signup" element={<Selection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/PhotographerDetailPage" element={<PhotographerDetailPage/>} />
        <Route path="/BookingsPage" element={<BookingsPage/>} />
        <Route path="/OrderSummaryPage" element={<OrderSummaryPage/>} />
        <Route path="/PhotographerCards" element={<PhotographerCards/>} />
        <Route path="/ConfirmationPage" element={<ConfirmationPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

