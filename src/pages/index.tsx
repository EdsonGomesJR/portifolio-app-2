import { AnimatedText } from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import { NavBar } from "@/components/NavBar";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:relative">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Personal Picture"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                // improviment to load images
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                text="Turning Vision Into Reality With Code And Design."
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4 lg:self-center">
                <Link
                  href={"/dummy.pdf"}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg  text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark gap-1
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 " />
                </Link>
                <Link
                  href={"mailto:abc@gmail.com"}
                  className="text-lg font-medium capitalize text-dark underline
                  dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block  w-24 md:hidden">
          <Image src={lightBuld} alt="EdsonGomes" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
