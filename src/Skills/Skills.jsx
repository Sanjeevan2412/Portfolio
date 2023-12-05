/* eslint-disable react/no-unescaped-entities */
import "./Skills.css";

function Skills() {
  return (
    <div className="Skills">
      <div className="SkillsContent">
        <hr className="Line" />
        <p className="Title SkillsTitle1">Skills</p>
        <div className="SkillsDiv1">
          <div className="SkillsDiv2">
            <div className="SkillsTitle2Div">
              <p className="SkillsTitle2">my expertise.</p>
              <p className="SkillsTitle2Desc">
                I specialize in design and web. Crafting sleek frontends is my
                jam. Let's make your digital presence stand out.
              </p>
            </div>
            <div className="SkillsDesc">
              <p>Web Development</p>
              <p>Web Design</p>
              <p>Wire Framing</p>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div className="SkillsDiv2">
            <div className="SkillsTitle2Div">
              <p className="SkillsTitle2">my toolsets.</p>
              <p className="SkillsTitle2Desc">
                My tech stack is my go-to for bringing projects to life. Eager
                to learn more about it and explore new technologies.
              </p>
            </div>
            <div className="SkillsDesc">
              <p>Javascript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Figma</p>
              <p>Vue.js</p>
              <p>React.js</p>
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
        <hr className="Line" />
      </div>
    </div>
  );
}

export default Skills;
