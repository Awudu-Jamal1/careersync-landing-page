import { motion } from "framer-motion";

import WelcomeAbout from "../components/welcomeabout";

import Features from "../components/features";
import SignupSection from "../components/signup";
import CompanyCarousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="  ">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // className="text-center max-w-4xl mx-auto"
        >
          <WelcomeAbout />
        </motion.div>
      </div>

      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="text-center max-w-4xl mx-auto"
          >
            <Features />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="text-center max-w-4xl mx-auto"
          >
            <CompanyCarousel />
          </motion.div>
        </div>
      </section>

      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SignupSection />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
