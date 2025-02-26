import {
    Billing,
    Business,
    CardDeal,
    CTA,
    Footer,
    Hero,
    Stats,
  } from "../components";
  import CEOMessage from "../components/CeoMessage";
  import styles from "../style";
  
  const Home = () => {
    return (
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar is outside Home, so we start from Hero */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Hero />
          </div>
        </div>
  
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
          </div>
        </div>
  
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={styles.boxWidth}>
            <CEOMessage />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  