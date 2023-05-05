import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0
   "
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}  dark:text-light`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            variants={singleWord}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
