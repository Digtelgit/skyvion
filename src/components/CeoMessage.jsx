import { OurCeo } from "../assets";
import styles, { layout } from "../style";

const CEOMessage = () => {
  return (
    <section className={`${layout.section} flex-wrap items-center`}>
      {/* CEO Image */}
      <div className={`${layout.sectionImg} flex justify-center`}>
        <img
          src={OurCeo}
          alt="CEO Image"
          className="w-[280px] h-[260px] rounded-lg border-4 border-gold-500 object-cover"
        />
      </div>

      {/* CEO Message */}
      <div className="flex-1 text-center md:text-left md:ml-10 mt-6 md:mt-0 max-w-xl">
        <h2 className={styles.heading2}>WORDS FROM OUR CEO</h2>
        <p className={`${styles.paragraph} mt-5`}>
          "A company is an association & collection of individuals, and we
          believe that together we are stronger. Together, we can make a
          difference. We're team players in everything we do. We are a
          collaborative culture."
        </p>
        <h4 className={`${styles.heading2} mt-5`}>Rahul Sood</h4>
        <p className={`${styles.paragraph}`}>Group MD & CEO</p>
      </div>
    </section>
  );
};

export default CEOMessage;
