import React from "react";
import fs_tagline from "../../assets/logos/logo-fs-tagline.svg";
import banner_img from "../../assets/images/banner-img.svg";
import HeroSection from "../../components/home/HomeHeroSection";
import MobileNav from "../../components/home/MobileNav";
import TabletNav from "../../components/home/TabletNav";
import DesktopNav from "../../components/home/DesktopNav";
import Footer from "../../components/Footer";
import kb_startup from "../../assets/images/keyboard-startup.svg";
import HomeGoalsOperations from "../../components/home/HomeGoalsOperations";
import HomeNews from "../../components/home/HomeNews";
import HomeSocials from "../../components/home/HomeSocials";
import HomeBlogSpot from "../../components/home/HomeBlogSpot";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackToTop from "../../components/BackToTop";
import { Helmet } from "@dr.pogodin/react-helmet";
import PageMeta from "../../components/layout/PageMeta";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth); //FOR DEBUGGING
  window.scroll(0, 0);

  useEffect(() => {
    const left = document.getElementById("left-side");
    if (!left) return; // Prevent errors if the element is not yet rendered

    const handleOnMove = (e) => {
      const p = (e.clientX / window.innerWidth) * 100;
      left.style.width = `${p}%`; // Added '%' to properly apply width
    };

    document.addEventListener("mousemove", handleOnMove);
    document.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <section
      className="gap-4 overflow-hidden"
      style={{ maxWidth: "2000px", margin: "0 auto", padding: "0 0rem" }}
    >
      <PageMeta
        title="Home | Empowering Careers & Opportunities - SuiteLifer"
        desc="Discover career opportunities, company insights, and the latest updates at FullSuite. Your journey to success starts here."
        isDefer={false}
      />
      {/* MOBILE NAV */}
      <div className="sm:hidden">
        <MobileNav />
      </div>
      {/* TABLET NAV */}
      <div className="tablet-nav">
        <TabletNav />
      </div>
      {/* DESKTOP NAV */}
      <div className="desktop-nav">
        <DesktopNav />
      </div>
      <div className="lg:flex lg:flex-row-reverse hidden lg:hidden">
        {/* HERO SECTION */}
        <HeroSection />
        {/* BANNER SECTION */}
        <section className="flex pt-5 lg:w-2/5 ">
          {/* with animations eto */}
          <div className="banner ml-[9%] flex items-center overflow-hidden">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-primary font-sansita- text-lg md:text-3xl lg:text-3xl"
              >
                Welcome to
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="pb-5"
              >
                <img
                  className="w-full h-full object-contain"
                  src={fs_tagline}
                  alt="Fullsuite tagline"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                className="btn-primary text-sm sm:text-xl md:text-2xl"
              >
                Learn more
              </motion.button>
            </div>
          </div>
          {/* Column 2 */}
          {/* <div className="flex justify-end items-start ml-5 pb-3 lg:hidden">
            <img
              className="opacity-70 -z-10 rounded-l-4xl object-cover h-full w-full"
              src={banner_img}
              alt="Banner image"
            />
          </div> */}

          {/* with animations naman ito */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileInView={{
              scale: [1, 1.05, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="flex justify-end items-start ml-5 pb-3 lg:hidden overflow-hidden"
          >
            <img
              className="opacity-70 -z-10 rounded-l-4xl object-cover h-full w-full"
              src={banner_img}
              alt="Banner image"
            />
          </motion.div>
        </section>
      </div>
      {/* ADD-ON (SHOWS ON MOBILE & TABLET) */}
      <div className="relative lg:hidden overflow-hidden h-28 sm:h-34 hidden">
        <motion.img
          className="absolute w-[15vw] right-0 opacity-40 rounded-l-4xl object-cover"
          src={kb_startup}
          alt="A keyboard with a startup key"
          style={{
            height: "100%",
            transform: "translateX(70%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <section className="h-[100dvh] lg:mt-17 mb-[10%]">
        {/* White */}
        <div id="right-side" className="side pb-17">
          <p className="title">
            <div className="">
              <span className="title-line-1">Do you feel like your</span> <br /> <br />
            </div>
            <div className="animate-fadeInUp">
              <span className="title-line-2">
                <span className="text-black">Career is going</span>{" "}
                <span className="nowhere">nowhere?</span>
              </span>
            </div>{" "}
            <div className="hidden">
              <span className="title-line-3">We can help.</span>
            </div>
          </p>
        </div>
        {/* Blue */}
        <div id="left-side" className="side pb-17">
          <p className="title">
            <div className="">
              <span className="title-line-1">We can help.</span>{" "} <br /><br />
            </div>
            <div className="">
              <span className="title-line-2">
                <span className="text-white">Let's get you on the</span>{" "} <br />
                <span className="text-black">right track.</span>
              </span>
            </div>{" "}
            <div className="hidden">
              <span className="title-line-3">Join us!</span>
            </div>
          </p>
        </div>
      </section>

      {/* GOAL AND OPERATIONS */}
      <HomeGoalsOperations />
      {/* <div className="h-300 bg-red-900"></div> */}
      {/* NEWS SECTION */}
      <HomeNews />

      {/* SOCIALS SECTION */}
      <HomeSocials />

      <div className="h-10"></div>

      {/* HOME BLOG SPOT */}
      <HomeBlogSpot />

      {/* FOR DEBUGGING ONLY */}
      {/* <div className="bg-red-900 h-50 text-white grid place-items-center">WIDTH: {width}</div> */}
      {/* <div className="h-40"></div> */}
      <BackToTop />
      <Footer />
    </section>
  );
};

export default Home;
