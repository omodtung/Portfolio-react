import {TypeAnimation} from "react-type-animation";
import  aboutDev from '../../assets/img/about/macos.jpg'
import about from "./about.tsx";
const  Homecv = ()=>
{
return <>

    <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
            <div className="arlo_tm_universal_box_wrap">
                <div className="bg_wrap">
                    <div
                        className="overlay_image hero jarallax"
                        data-speed="0.1"
                    ></div>
                    <div className="overlay_color hero"></div>
                </div>
                <div className="content hero">
                    <div className="inner_content">
                        <div className="image_wrap">
                            <img src={aboutDev} alt="hero"/>
                        </div>
                        <div className="name_holder">
                            <h3>
                                The Tung <span>Do</span>
                            </h3>
                        </div>
                        <div className="text_typing">
                            <p>
                                I'm a{" "}
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Frontend Developer',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Backend Developer',
                                        1000,
                                        // 'Next.js Developer',
                                        // 1000,
                                        // 'Java Backend Developer',
                                        // 1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_arrow_wrap bounce anchor">
                    <a href="#about">
                        <i className="xcon-angle-double-down"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</>

}
export default Homecv