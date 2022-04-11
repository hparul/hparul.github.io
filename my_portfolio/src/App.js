import { React,useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skill from "./components/skill/skill";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
     
        <Toggle />
        <Navbar />

     <Intro />
     <ProjectList />
     <Skill />  
     <Contact></Contact> 
    
     
        {/* <Switch>
          <Route exact path="/about" ><Intro /> </Route>
            
            
          
          <Route exact path="/projects"><ProjectList /></Route> 
          
         
          <Route exact path="/skills">
            <Skill />
          </Route>
           <Route exact path="/contact">
            <Contact />
          </Route> 
        </Switch>
        <Contact /> */}
    </div>
     
    
  );
};

export default App;
