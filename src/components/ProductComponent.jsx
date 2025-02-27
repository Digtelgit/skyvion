import { motion } from "framer-motion";

const products = [
  {
    category: "Electronics",
    description:
      "Premium quality electronics from leading manufacturers worldwide",
    items: ["Smartphones", "Laptops", "Accessories", "Home Appliances"],
    icon: "📱",
    color: "from-blue-600 to-blue-400",
  },
  {
    category: "Confectionaries & Food",
    description: "Finest selection of gourmet foods and confectionaries",
    items: ["Spices", "Rice", "Sugar", "Chocolate"],
    icon: "🍫",
    color: "from-teal-500 to-emerald-400",
  },
  {
    category: "Consumer Products",
    description: "High-quality everyday items for all your needs",
    items: ["Apparels", "Crafts", "Footwear", "Household Items"],
    icon: "👕",
    color: "from-indigo-600 to-indigo-400",
  },
];

const Products = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Premium Product Portfolio
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We specialize in the <span className="font-semibold">export</span>{" "}
            and <span className="font-semibold">import</span> of high-quality
            products across multiple industries, connecting global manufacturers
            with international markets.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div
              className={`p-6 bg-gradient-to-br ${product.color} text-white`}
            >
              <div className="flex items-center">
                <span className="text-3xl mr-3">{product.icon}</span>
                <h3 className="text-2xl font-semibold">{product.category}</h3>
              </div>
              <p className="mt-2 text-sm opacity-90">{product.description}</p>
            </div>
            <div className="p-6 bg-white">
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Featured Products:
              </h4>
              <ul className="space-y-2">
                {product.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-gray-700">
          Our dedicated team ensures seamless logistics and quality assurance at
          every step. Contact us today to discuss your import/export
          requirements.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
          onClick={() =>
            (window.location.href =
              "mailto:commercial@sky-vion.com?subject=Request%20a%20Quote")
          }
        >
          Request a Quote
        </button>
      </motion.div>
    </section>
  );
};

export default Products;
