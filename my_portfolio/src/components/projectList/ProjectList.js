import "./projectList.css";
import Project from "../projects/Projects";
import {projects}  from "../../Data";

const ProjectList = () => {
  return (
    
    <div className="pl" id="projects">
     <div className="pl-bg"></div>
     
         <div className="pl-texts">
         
        <h1 className="pl-title">Apps , I have built</h1>
        <p className="pl-desc">
          Passionate about web design,I present here my main creations made during my studies
        </p>
        
      </div>
      
      <div className="pl-list">
      
      
        {projects.map((item) => (
          
          <Project key={item.id} item={item} />
          
        ))}
      </div>
    </div>
  );
};

export default ProjectList;