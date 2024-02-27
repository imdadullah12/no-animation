"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";
import Modal from "./components/modal";

export default function Home() {
  const [initialValue, setInitialValue] = useState([0, 0]);
  const [isAccepted, setIsAccepted] = useState(false);

  const generateRandomValue = () => {
    // Randomly decide whether x and y should be negative or positive
    const xSign = Math.random() < 0.5 ? -1 : 1;
    const ySign = Math.random() < 0.5 ? -1 : 1;

    // Generate random values for x and y within adjusted ranges
    const x = xSign * (Math.floor(Math.random() * 301) + 300); // Adjusted range for x
    const y = ySign * (Math.floor(Math.random() * 152) + 100); // Adjusted range for y

    setInitialValue([y, x]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      {!isAccepted ? (
        <>
          <div className="content">
            <h1 className="text-3xl lg:text-6xl text-center font-bold bg-gradient-to-r from-pink-700 to-red-500 text-transparent bg-clip-text pb-3">
              Will you be my girlfriend?
            </h1>
            <div className="button text-center space-x-3 mt-5">
              <button
                className="px-6 active:scale-90 transition-all duration-200 py-2 bg-green-500 rounded-xl"
                onClick={() => setIsAccepted(true)}
              >
                YES
              </button>
              <motion.button
                onMouseEnter={generateRandomValue}
                whileHover={{
                  y: initialValue[0],
                  x: initialValue[1],
                }}
                initial={{
                  y: initialValue[0],
                  x: initialValue[1],
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-xl"
              >
                NO
              </motion.button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Modal />
        </>
      )}
    </main>
  );
}
