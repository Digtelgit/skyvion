import { motion } from "framer-motion";
import { aboutUsComponentPage } from "../assets";

const AboutUs = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-blue-50 to-sky-100 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.img
          src={aboutUsComponentPage}
          alt="About Us"
          className="rounded-lg shadow-xl w-full h-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-900">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            <span className="text-blue-700 font-semibold">Skyvion Goods Wholesalers LLC</span> is a company engaged in
            general trading, including export, import, and local distribution of various
            products in the market. Based in <span className="text-sky-600 font-semibold">Dubai (UAE)</span>, our main activities involve the
            distribution and supply of a wide range of products.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Our product categories include <span className="text-sky-700 font-semibold">Electronics, Confectionaries, Food Products</span>
            such as spices, rice, sugar, chocolate, and essential <span className="text-sky-700 font-semibold">Consumer Goods</span> like apparels, crafts, footwear, and household items.
          </p>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-900">Our Mission</h3>
            <p className="text-lg mt-2 text-gray-800">
              To bridge the gap between manufacturers and consumers by providing high-quality
              products and seamless distribution services, ensuring customer satisfaction at every level.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-4 bg-white rounded-lg shadow-md border-t-2 border-sky-400">
              <h4 className="text-xl font-semibold text-sky-700">Quality Assurance</h4>
              <p className="mt-2 text-gray-800">We ensure top-notch quality in all our products and services.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border-t-2 border-sky-400">
              <h4 className="text-xl font-semibold text-sky-700">Customer Commitment</h4>
              <p className="mt-2 text-gray-800">We prioritize customer satisfaction above all.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border-t-2 border-blue-500">
              <h4 className="text-xl font-semibold text-blue-700">Innovation</h4>
              <p className="mt-2 text-gray-800">We adapt to market trends and implement creative solutions.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border-t-2 border-blue-500">
              <h4 className="text-xl font-semibold text-blue-700">Global Reach</h4>
              <p className="mt-2 text-gray-800">We expand business networks locally and internationally.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
