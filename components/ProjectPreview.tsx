import React from "react";
import Arrow from "../public/arrow.svg";
import { motion } from "framer-motion";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Block name",
  imageUrl = "/project-1.png",
  bgColor = "#e4e4e7",
  dark = false,
}) => {
  return (
    <motion.div
      className={`h-[20rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] cursor-pointer bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-2xl sm:text-3xl text-white dark:text-black">{name}</h2>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <Arrow className="w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;