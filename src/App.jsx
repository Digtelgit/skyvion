// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";
import CEOMessage from "./components/CeoMessage";
import ContactUs from "./components/ContactUs";
import ContactPage from "./pages/Contact";
import AboutUsPage from "./pages/About";
import ProductPage from "./pages/ProductPage";
import ExportPage from "./pages/ExportPage";

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                  </div>
                </div>
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    {/* <Stats /> */}
                    <Business />
                    <Billing />
                    <CardDeal />
                    <CEOMessage />
                    <CTA />
                  </div>
                </div>
              </>
            }
          />

          {/* Contact Us Page Route */}
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/exportimport" element={<ExportPage />} />
        </Routes>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
