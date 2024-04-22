import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import search from '../assets/search.svg'
import menu from '../assets/menu.svg'
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative
    `}
    >
        <div className="absolute w-[50%] inset-0 gradient-01"/>
        <div className="flex justify-between  ">
        <img src={menu} alt="menu" width={24} height={24} className="object-contain" />
            <h2 className="text-white font-extrabold text-2xl leading-8">متاورس</h2>
            <img src={search} width={24} height={24} alt="search" className="object-contain" />
        </div>
    </motion.nav>
  );
};

export default Navbar;
