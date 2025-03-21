import bgCutoutMobile from "../../assets/images/bg-mobile-cutout-home.png";
import bgCutoutDesktop from "../../assets/images/bg-desktop-cutout-home.png";
import dataOp from "../../assets/images/data-op.svg";
import financeOp from "../../assets/images/finance-op.svg";
import adminOp from "../../assets/images/admin-op.svg";
import {motion} from  "framer-motion";
const HomeGoalsOperations = () => {
  const operations = [
    {
      title: "Marketing Operations",
      image: financeOp,
      alt: "Marketing operations analyst",
    },
    { title: "Tech Support", image: adminOp, alt: "Tech support analyst" },
    {
      title: "Business Operations",
      image: dataOp,
      alt: "Data operations analyst",
    },
    {
      title: "Finance Operations",
      image: financeOp,
      alt: "Finance operations analyst",
    },
    {
      title: "Administrative Operations",
      image: adminOp,
      alt: "Administrative analyst",
    },
  ];

  return (
    // <section className="relative -mt-[5%] mb-10 sm:mb-15 lg:mb-20 xl:mb-30 flex flex-col">
    //   <div className="block">
    //     {/* Background Image */}
    //     <div className="cutout-maggie mb-6">
    //       <img
    //         src={bgCutoutMobile}
    //         alt="cutout background"
    //         className="block -z-10 w-[100%] sm:hidden"
    //       />
    //       <img
    //         // src={desktopBgMarvinTwins}
    //         src={bgCutoutDesktop}
    //         alt="cutout background"
    //         className="-z-10 w-[100%] hidden sm:block"
    //       />
    //     </div>
    //     {/* OPERATIONS */}
    //     <section className="flex flex-col sm:flex-row justify-center items-center md:flex-row gap-3 lg:gap-8 xl:gap-10 px-4 max-h-min">
    //       {operations.slice(-3).map((op, index) => (
    //         <div
    //           key={index}
    //           style={{}}
    //           className={`
    //             group
    //             w-full 
    //             px-[10%] 
    //             sm:px-0 
    //             flex flex-col items-center
    //             ${index == 0 ? "sm:transform sm:-translate-y-[28%]" : ""}
    //             ${
    //               index == 2 ? "admin-op sm:transform sm:-translate-y-[8%]" : ""
    //             }
    //             `}
    //         >
    //           <img
    //             className="rounded-4xl sm:rounded-3xl size-[80%] lg:size-[60%] object-cover aspect-[3/4] transition-all duration-300 hover:scale-95 "
    //             src={op.image}
    //             alt={op.alt}
    //           />
    //           <p className="op-title mt-3 md:mt-5 font-avenir-black text-center text-primary transition-all duration-300 group-hover:!text-secondary">
    //             {op.title}
    //           </p>
    //         </div>
    //       ))}
    //     </section>
    //   </div>

    //   {/* Texts overlay */}
    //   <div className="text-goal-container absolute pt-[25%] sm:pt-[14%] pl-[40%] sm:pl-[41%] pr-[5%] w-full z-10">
    //     <section className="text-goal min-h-[230px] text-end">
    //       <article className="text-white">
    //         <p className="indent-8">
    //           We are a <b>dynamic</b> and <b>inclusive</b> organization that
    //           serves as a <b className="text-secondary">launchpad</b> for
    //           individuals to climb the corporate ladder and achieve their full
    //           potential professionally. We provide <b>training</b>,{" "}
    //           <b>career exposure</b>, and <b>experience</b>, especially for
    //           fresh grads and those new to the work industry.{" "}
    //         </p>{" "}
    //         <br />
    //         <p>
    //           Join our community of achievers.
    //           <br /> Contact us to learn how we can help you shine.
    //         </p>{" "}
    //         <br />
    //       </article>
    //       {/* Add more texts/components as needed */}
    //       <a href="about-us" className="no-underline">
    //         <button className="txt-btn z-10 btn-light">Learn more</button>
    //       </a>
    //     </section>
    //   </div>
    // </section>


    // with animationsss
    <section className="relative mb-10 sm:mb-15 lg:mb-20 xl:mb-30 flex flex-col">
    <div className="block">
      {/* Cutout Image (Fades in and moves slightly up) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="cutout-maggie mb-6"
      >
        <img
          src={bgCutoutMobile}
          alt="cutout background"
          className="block -z-10 w-[100%] sm:hidden"
        />
        <img
          src={bgCutoutDesktop}
          alt="cutout background"
          className="-z-10 w-[100%] hidden sm:block"
        />
      </motion.div>
  
      {/* OPERATIONS (Each has different animation) */}
      <section className="flex flex-col sm:flex-row justify-center items-center md:flex-row gap-3 lg:gap-8 xl:gap-10 px-4 max-h-min">
        {operations.slice(-3).map((op, index) => {
          const animationVariants = [
            { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Slide from left
            { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } }, // Zoom in
            { initial: { rotate: -5, opacity: 0 }, animate: { rotate: 0, opacity: 1 } } // Rotate in
          ];
          const chosenAnimation = animationVariants[index % animationVariants.length];
  
          return (
            <motion.div
              key={index}
              initial={chosenAnimation.initial}
              whileInView={chosenAnimation.animate}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`
                group
                w-full 
                px-[10%] 
                sm:px-0 
                flex flex-col items-center
                ${index == 0 ? "sm:transform sm:-translate-y-[28%]" : ""}
                ${index == 2 ? "admin-op sm:transform sm:-translate-y-[8%]" : ""}
              `}
            >
              <img
                className="rounded-4xl sm:rounded-3xl size-[80%] lg:size-[60%] object-cover aspect-[3/4] transition-all duration-300 hover:scale-95"
                src={op.image}
                alt={op.alt}
              />
              <p className="op-title mt-3 md:mt-5 font-avenir-black text-center text-primary transition-all duration-300 group-hover:!text-secondary">
                {op.title}
              </p>
            </motion.div>
          );
        })}
      </section>
    </div>
  
    {/* Texts Overlay (Slides in from the right) */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-goal-container absolute pt-[25%] sm:pt-[14%] pl-[40%] sm:pl-[41%] pr-[5%] w-full z-10"
    >
      <section className="text-goal min-h-[230px] text-end">
        <article className="text-white">
          <p className="indent-8">
            We are a <b>dynamic</b> and <b>inclusive</b> organization that serves
            as a <b className="text-secondary">launchpad</b> for individuals to
            climb the corporate ladder and achieve their full potential
            professionally. We provide <b>training</b>,{" "}
            <b>career exposure</b>, and <b>experience</b>, especially for fresh
            grads and those new to the work industry.
          </p>{" "}
          <br />
          <p>
            Join our community of achievers.
            <br /> Contact us to learn how we can help you shine.
          </p>{" "}
          <br />
        </article>
        <a href="about-us" className="no-underline">
          <button className="txt-btn z-10 btn-light">Learn more</button>
        </a>
      </section>
    </motion.div>
  </section>
  

  );
};

export default HomeGoalsOperations;
