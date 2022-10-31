import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonials/Testimonial";
import Works from "../components/Works/Works";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {


    return (
     <>
      <Navbar/>
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Footer />
      </>
    )
}

export default Home