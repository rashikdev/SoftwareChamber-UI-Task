import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { delay } from "motion";

const Menu = ({ setOpen }) => {
  const menuItems = [
    { id: 1, label: "Features", href: "#features" },
    { id: 2, label: "Services", href: "#services" },
    { id: 3, label: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.4 }}
      className="md:w-[28vw] w-[50vw] h-[100vh] fixed md:top-0 md:right-0 top-20 right-0 text-white p-8 text-center md:pt-40 bg-gradient-to-br from-[#34bbab]/30 to-[#081412]/30 backdrop-blur-md"
    >
      {/* Menu */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 text-lg font-medium"
      >
        <motion.li onClick={() => setOpen(false)} variants={itemVariants}>
          <Link href="/" className="md:text-5xl text-xl hover:text-[#25dfca]">
            Home
          </Link>
        </motion.li>
        {menuItems.map((item) => (
          <motion.li
            onClick={() => setOpen(false)}
            variants={itemVariants}
            key={item.id}
            className="md:text-5xl text-xl hover:text-[#25dfca]"
          >
            <a href={item.href}>{item.label}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Menu;
