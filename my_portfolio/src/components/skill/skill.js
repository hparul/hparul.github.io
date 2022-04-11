import "./skill.css";

import { BadgeCheckIcon } from "@heroicons/react/solid";

import { skills } from "../../Data";
import tech from "../../images/tech.jpg";

const Skill = () => {
  return (
    <div className="s">
      <div className="s-bg"></div>
     
       <div className="s-left">
        <div className="s-card bg"></div>
        <div className="s-card">
          <img src={tech} alt="" className="s-img" />
        </div>
      </div>
      <div className="s-right">
        <h1 className="s-title">Technology I have worked with</h1>

        <div className="skill">
          <div className="skill-texts">
            <p className="skill-desc">
            list of frameworks and libraries used to build various projects
            </p>
          </div>
          <div className="skill-list">
            {skills.map((item) => (
              <div key={item} className="skill-field">
                <div className="parent">
                  <BadgeCheckIcon className="badge" />
                  <span className="title">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
 
  );
};

export default Skill;
