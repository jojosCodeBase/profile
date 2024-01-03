import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  link,
  github,
  git_icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", id * 0.5, 0.75)}
      className="bg-indigoDye p-5 rounded-2xl sm:w-[300px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <span
          className="text-babyPowder font-bold text-[24px] space-x-3 hover:cursor-pointer hover:underline"
          onClick={() => window.open(link, "_blank")}
        >
          {title}<LinkRoundedIcon className=" rotate-[-60deg]" />
        </span>
        <div>
          <span onClick={() => window.open(github, "_blank")} >
            <img
              src={git_icon}
              alt="github"
              className="w-6 h-6 mt-3 bg-lavaPink hover:bg-sage hover:cursor-pointer rounded-full"
            />
          </span>
        </div>
        <p className="mt-2 text-babyPowder text-[14px] text-justify">{description}</p>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-babyPowder`}>
          2. Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-babyPowder`}>
          My Works
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
