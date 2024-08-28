import Homecv from "./content/homecv.tsx";
import About from "./content/about.tsx";
import Skill from "./content/skill.tsx";
import Projects from "./content/Projects.tsx";
import Contact from "./content/contact.tsx";
interface IProps {
  hideLeftPart?: boolean;
  setHideLeftPart?: (value: boolean) => void;
}
const RightPart = (props: IProps) => {
  return (
    <>
      <div
        className={
          props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"
        }
      >
        <div className="rightpart_inner">
          <Homecv></Homecv>

          {/* <!--   ABOUT --> */}

          <About></About>
          {/* <!--   /ABOUT --> */}

          {/* <!--   SKILLS --> */}

          <Skill></Skill>
          {/* <!--   /SKILLS --> */}

          {/* <!--   SERVICES --> */}
          <Projects></Projects>
          {/* <!--   /SERVICES --> */}

          {/* <!--   PORTFOLIO --> */}

          {/* <!--   /PORTFOLIO --> */}

          {/* <!--   TESTIMONIALS --> */}

          {/* <!--   /TESTIMONIALS --> */}

          {/* <!--   COUNTERBOX --> */}

          {/* <!--   /COUNTERBOX --> */}

          {/* <!--   NEWS --> */}

          {/* <!--   /NEWS --> */}

          {/* <!--   CONTACT & FOOTER --> */}
          <Contact></Contact>
          {/* <!--   /CONTACT & FOOTER --> */}
        </div>
      </div>
    </>
  );
};
export default RightPart;
