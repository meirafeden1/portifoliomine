import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark.jpg";
import heroImg1 from "../../assets/img/hero/myphoto300by300.jpg";
import heroImg3 from "../../assets/img/hero/myphoto747by1021.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg3,
  heroMobileImage: heroImg1,
  heroTitleName: "Eden Teklu",
  heroDesignation: "A software Engineer",
  heroDescriptions: `I am a passionate Software Engineer specializing in SharePoint and modern web technologies. I design and customize SharePoint On-Premise and Online environments, streamline business processes with the Power Platform, and build scalable full-stack applications using React, Node.js, Express, MySQL, ASP.NET, and C#. I focus on performance, security, and user experience, transforming complex ideas into efficient, functional, and visually engaging solutions while continuously learning emerging technologies.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">

        <div
  className="col-lg-4 bg position-fixed d-none d-lg-block"
  style={{
    backgroundImage: `url(${heroContent.heroImage})`,
  }}
></div>
        {/* <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div> */}
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            {/* <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            /> */}

            <img
  src={heroContent.heroMobileImage}
  className="img-fluid main-img-mobile d-sm-block d-lg-none"
  alt="hero man"
/>
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
