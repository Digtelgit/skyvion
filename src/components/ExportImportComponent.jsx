import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ExportImport = () => {
  const navigate = useNavigate(); 
  // Refined color palette based on client request
  const colors = {
    navy: "#0A2463", // Deep blue - primary brand color
    skyBlue: "#3E92CC", // Sky blue - secondary brand color
    gold: "#D4AF37", // Gold - accent color
    lightBlue: "#EBF5FF", // Very light blue for backgrounds
    darkText: "#1A365D", // Dark blue text
    lightText: "#4A5568", // Gray text for descriptions
    white: "#FFFFFF" // White for cards and contrast
  };

  // Process steps data
  const processSteps = [
    { title: "Sourcing", description: "Identifying premium products from trusted global suppliers" },
    { title: "Logistics", description: "Coordinating seamless international shipping and customs clearance" },
    { title: "Distribution", description: "Delivering products to markets worldwide with efficiency" }
  ];

  // Product categories data
  const categories = [
    {
      title: "Electronics",
      description: "Premium devices and appliances from leading manufacturers",
      icon: "📱"
    },
    {
      title: "Food Products",
      description: "High-quality consumables including spices and grains",
      icon: "🍚"
    },
    {
      title: "Confectionaries",
      description: "Gourmet chocolates and premium bakery products",
      icon: "🍫"
    },
    {
      title: "Consumer Goods",
      description: "Essential lifestyle and household products",
      icon: "👔"
    }
  ];

  return (
    <section className="py-20 px-8" style={{ backgroundColor: colors.lightBlue }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: colors.navy }}
          >
            Export & Import Services
          </h2>
          <div 
            className="h-1 w-24 mx-auto mb-6"
            style={{ backgroundColor: colors.gold }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.lightText }}
          >
            Connecting quality products with global markets through efficient distribution channels
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="p-8 rounded-lg shadow-md"
              style={{ backgroundColor: colors.white }}
            >
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ color: colors.navy }}
              >
                International Trade Excellence
              </h3>
              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: colors.lightText }}
              >
                At <span className="font-semibold" style={{ color: colors.gold }}>Skyvion Goods Wholesalers LLC</span>, 
                we specialize in facilitating seamless international trade through our comprehensive export and import services. 
                With strategic partnerships across six continents, we connect premium manufacturers with global markets.
              </p>
          
              
              {/* Process Steps */}
              <h4 
                className="text-xl font-semibold mb-4 mt-8"
                style={{ color: colors.skyBlue }}
              >
                Our Streamlined Process
              </h4>
              
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: colors.skyBlue }}
                    >
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h5 
                        className="font-semibold"
                        style={{ color: colors.darkText }}
                      >
                        {step.title}
                      </h5>
                      <p 
                        className="mt-1"
                        style={{ color: colors.lightText }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Compliance Box */}
            <motion.div
              className="p-6 rounded-lg shadow-md border-l-4"
              style={{ 
                backgroundColor: colors.white,
                borderLeftColor: colors.gold
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke={colors.navy} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h4 
                  className="text-xl font-semibold"
                  style={{ color: colors.navy }}
                >
                  Quality & Compliance Assurance
                </h4>
              </div>
              <p style={{ color: colors.lightText }}>
                We adhere to strict international trade regulations and quality control measures, 
                ensuring all shipments meet global standards and compliance requirements.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Categories */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="p-6 rounded-lg shadow-md"
              style={{ 
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.skyBlue} 100%)`,
                color: colors.white
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Our Product Portfolio</h3>
              <p className="mb-6 opacity-90">
                We specialize in exporting and importing a diverse range of high-quality products 
                to meet international market demands.
              </p>
              
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{category.title}</h4>
                        <p className="text-sm text-white text-opacity-80">{category.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div 
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "25+", label: "Countries Served" },
                { number: "500+", label: "Products Supplied" },
                { number: "98%", label: "On-time Delivery" },
                { number: "10k+", label: "Annual Shipments" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg shadow-md text-center"
                  style={{ backgroundColor: colors.white }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div 
                    className="text-2xl font-bold mb-1"
                    style={{ color: index % 2 === 0 ? colors.navy : colors.skyBlue }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: colors.lightText }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              className="mt-8 p-6 rounded-lg shadow-md"
              style={{ backgroundColor: colors.white }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 
                className="text-xl font-semibold mb-3"
                style={{ color: colors.navy }}
              >
                Ready to Expand Your Global Reach?
              </h4>
              <p 
                className="mb-4"
                style={{ color: colors.lightText }}
              >
                Contact our specialists to discuss your specific requirements.
              </p>
              <button 
                className="px-6 py-3 rounded-md w-full font-medium transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.navy
                }}
                onClick={() => navigate("/contact-us")}
              >
                Request Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExportImport;