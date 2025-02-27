import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for internal navigation
import styles from "../style";
import skyvionLogo from "/logo-removebg.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={skyvionLogo}
            alt="logo"
            className="w-[266px] h-[172px] object-contain brightness-200 contrast-200"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Your trusted partner in wholesale and retail supply, delivering
            quality products with reliability and efficiency.
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {section.title}
              </h4>
              <ul className="list-none mt-4">
                {section.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== section.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {/* Use <Link> for internal links and <a> for external links */}
                    {item.path.startsWith("http") ? (
                      <a href={item.path} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.path}>{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2025 SkyVion Goods. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a href={social.link} key={social.id} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
