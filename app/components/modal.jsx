import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Modal = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
      }}
      transition={{ duration: 0.3 }}
      className="w-[90%] md:w-[500px] h-[300px] border-[4px] border-pink-700 absolute rounded-xl p-3 flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/two-hearts-papercut-style-valentines-day-greeting_1017-16828.jpg)",
        backgroundPosition: "center",
      }}
    >
      <div className="content space-y-4">
        <div className="text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            alt=""
            className="w-[70px] h-[70px] m-auto mb-2"
          />
          <h1 className="text-2xl font-bold text-center">
            Thank you for accepting my proposal!
          </h1>
          <h3 className="text-center mt-2">Let's connect in WhatsApp</h3>
        </div>
        <Link href="https://api.whatsapp.com/send/?phone=%2B918638500289&text=Hi+Imdad">
          <button className="px-6 mt-4 w-full border-2 border-white active:scale-90 transition-all duration-200 py-2 bg-pink-700 text-white rounded-xl">
            Go to WhatsApp
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Modal;
