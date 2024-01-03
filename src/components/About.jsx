import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { socialLinks } from "../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-babyPowder`}>1. About</p>
        <h2 className={`${styles.sectionHeadText} text-babyPowder`}>Who am I?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-babyPowder text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Hello I am Kunsang Moktan, student of BCA final year at Sikkim Manipal Institute of Technology 2024 batch. I am a full stack developer
        and have skills in tech stacks like HTML, CSS, Javascript, PHP, Laravel, MySql. 
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.2, 2)}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mr-4 mt-4"
        >
          <img src={link.icon} alt={link.title} className="w-[40px] bg-babyPowder rounded-full p-2 hover:bg-sage"/>
        </a>
      ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
