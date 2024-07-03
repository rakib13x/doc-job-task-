import About from "../../components/About";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Offer from "../../components/Offer";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Testimonial />
        <Faq />
        <Offer />
        <Footer />
      </div>
    </>
  );
};

export default Home;
