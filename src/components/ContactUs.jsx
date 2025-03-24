import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactUs } from "../assets/index";

const ContactUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-20 px-6 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#FFD700]">
          Contact Us
        </h2>
        <p className="text-gray-300 mt-4">
          Reach out to us for inquiries, partnerships, or general information.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 rounded-2xl overflow-hidden"
        >
          <img
            src={contactUs}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Contact Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Phone className="text-[#FFD700] w-6 h-6" />
              <span className="text-gray-300 text-lg"> +971 4 272 8544</span>
            </div>

            {/* <div className="flex items-center space-x-4">
            <Phone className="text-[#FFD700] w-6 h-6" />
            <span className="text-gray-300 text-lg">+971 4 272 8544</span>
            </div> */}

            {/* Email */}
            <div className="flex items-center space-x-4">
              <Mail className="text-[#FFD700] w-6 h-6" />
              <span className="text-gray-300 text-lg"> info@sky-vion.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#FFD700] w-6 h-6" />
              <span className="text-gray-300 text-lg">
                Suite NO. 1602, Al Owais Business Tower, Sabka Deira, Dubai, UAE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Maps Iframe */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.067792745087!2d55.30040527509318!3d25.268304828817367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347d9cf3a67%3A0x9c4f592bce9f8403!2sAl%20Owais%20Business%20Tower!5e0!3m2!1sen!2sin!4v1740637536041!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactUs;
