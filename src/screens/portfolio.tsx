import Preloader from "../components/preloader";
import LeftPart from "../components/leftpart.tsx";
import Rightpart from "../components/rightpart.tsx";
import { FloatButton } from "antd";
const Portfolio = () => {
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader></Preloader>
      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="index.html">
              <img src="img/logo/mobile_logo.png" alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap">
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /MOBILE MENU --> */}

      {/* <!--   CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!--   LEFTPART --> */}
        <LeftPart></LeftPart>
        {/* <!--   /LEFTPART --> */}

        {/* <!--   RIGHTPART --> */}
        <Rightpart></Rightpart>
        {/* <!--   /RIGHTPART --> */}

        <FloatButton.BackTop 
        tooltip={
            <div> Scroll To Top</div>
    }/>
      </div>
    </div>
  );
};
export default Portfolio;
