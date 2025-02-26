import styles from "../style";
import { discount, robot,exportPic } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-snug md:leading-snug lg:leading-tight">
            Trusted <br className="sm:block hidden" />
            <span className="text-gradient">Global Supplier</span>
          </h1>
        </div>
        <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-snug lg:leading-tight w-full">
          of Quality Goods
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-base md:text-lg`}>
          We specialize in the distribution, export, and import of quality
          electronics, food products, and consumer goods, ensuring customer
          satisfaction and a trusted global supply network.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={exportPic}
          alt="billing"
          className="w-[80%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      
    </section>
  );
};

export default Hero;
