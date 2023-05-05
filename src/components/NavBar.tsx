import Link, { LinkProps } from "next/link";
import { CustomLink, CustomMobileLink } from "./CustomLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState, useEffect } from "react";

export function NavBar() {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    console.log("UserPref", userPref);
    console.log("primeiro effect");

    function handleChange() {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        console.log("mode", mode);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    handleChange();
    mediaQuery.addEventListener("click", handleChange);

    return () => mediaQuery.removeEventListener("click", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    console.log("segundo effect");
  }, [mode]);
  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative"
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-6">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <Link href={"https://twitter.com"} target={"_blank"}>
              <TwitterIcon />
            </Link>
          </motion.div>

          <motion.div
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"https://github.com"} target={"_blank"}>
              <GithubIcon />
            </Link>
          </motion.div>
          <motion.div
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"https://linkedin.com"} target={"_blank"}>
              <LinkedInIcon />
            </Link>
          </motion.div>
          <motion.div
            className="w-6 bg-light rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"https://pinterest.com"} target={"_blank"}>
              <PinterestIcon />
            </Link>
          </motion.div>
          <motion.div
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={"https://dribble.com"} target={"_blank"}>
              <DribbbleIcon />
            </Link>
          </motion.div>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center 
                  bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md py-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              toggle={handleClick}
              href="/"
              title="Home"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title="Articles"
              className=""
            />
          </nav>
          {/* Social Icons Nav */}
          <nav className="flex items-center justify-center flex-wrap gap-6 mt-2 sm:gap-1">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <Link href={"https://twitter.com"} target={"_blank"}>
                <TwitterIcon />
              </Link>
            </motion.div>

            <motion.div
              className="w-6 bg-light dark:bg-dark rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"https://github.com"} target={"_blank"}>
                <GithubIcon />
              </Link>
            </motion.div>
            <motion.div
              className="w-6"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"https://linkedin.com"} target={"_blank"}>
                <LinkedInIcon />
              </Link>
            </motion.div>
            <motion.div
              className="w-6 bg-light rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"https://pinterest.com"} target={"_blank"}>
                <PinterestIcon />
              </Link>
            </motion.div>
            <motion.div
              className="w-6"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={"https://dribble.com"} target={"_blank"}>
                <DribbbleIcon />
              </Link>
            </motion.div>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-1/2 top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
