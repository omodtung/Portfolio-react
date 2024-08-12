import aboutDev from "../../assets/img/about/macos.jpg";
import myCv from "../../assets/cv.pdf";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner" data-img-url={aboutDev}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm The Tung and{" "}
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          " I'm a Frontend Developer",
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          "I'm a Backend Developer",
                          1000,
                       
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                      {/*<span className="arlo_tm_animation_text_word"></span>*/}
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! Tôi tên là <strong> Thế Tùng </strong>. Tôi làm
                      Engineer, tôi có kinh nghiệm với lập trình Backend và
                      Frontend như là một Software Development Engineer,
                      <br></br>
                      <br/>

                      Tôi có thể  làm việc với TypeScript , Java , JavaScript ,PHP 
                      
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> XX.XX.XXXX
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới Tính :</label> {""}Nam

                        </span>
                      </li>
                      <li>
                        <span>
                          <label>City:</label> Thành Phố  HCM, Việt Nam
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>GitHub:</label>{""} 
                          <a href="https://github.com/omodtung">
                          https://github.com/omodtung
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> Đại Học Sài Gòn
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Bằng Cấp:</label> Kỹ Sư Công Nghệ Thông Tin
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Chuyên Ngành:</label> Kỹ Thuật Phần Mềm
                          
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="dothedung131@gmail.com">
                            dothedung131@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Phone:</label>{" "}
                          <a href="#">0792324232</a>
                        </span>
                      </li>

                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCv} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
