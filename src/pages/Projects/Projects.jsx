import FadeInSection from "../../components/FadeInSection";
import Video from "../../components/Video";
import "./Projects.css"
import java from "../../assets/java.png";
import docker from "../../assets/docker.png";
import maven from "../../assets/maven.png";
import eclipse from "../../assets/eclipse.png";
import bootstrap from "../../assets/bootstrap.png";
import wildfly from "../../assets/wildfly.png";
import mysql from "../../assets/mysql2.png";
import mongodb from "../../assets/mongodb.png";
import typescript from "../../assets/typescript.png";
import sass from "../../assets/sass.png";
import html5 from "../../assets/html5.png";
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.png";
import angular from "../../assets/angular.png";

const Projects = () => {
    return (
        <FadeInSection>
            <section className="web-section" id="projects">
                <div className="web-section-content">
                    <h2>My Projects</h2>
                    <div className="project-container">
                        <div className="box col-sm-5 col-lg-5">
                            <h3>Platform</h3>
                            <Video name={"Platform"}/>
                            <br />
                            <ul className="list-inline dev-icons">
                                <li className="list-inline-item">
                                    <a href={"https://www.java.com/en/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={java} alt="java icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://maven.apache.org/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={maven} alt="maven icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.docker.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={docker} alt="docker icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.mysql.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={mysql} alt="mysql icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.eclipse.org/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={eclipse} alt="eclipse icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.wildfly.org/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={wildfly} alt="wildfly icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://getbootstrap.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={bootstrap} alt="bootstrap icon"></img>
                                    </a>
                                </li>
                                
                            </ul>
                            <p className="small-text">
                            It was a group project made at University. The platform collected activities arranged by organizations, 
                            and then taught by teachers. The platform had to manage the entire process: from the organizations 
                            that published activities, teachers who chose activities to teach, and students who chose what activities to do. 
                            There were also evaluations, both for students and for the activity (leaving a review).
                            {"\n"}
                            My part of work was the activities section. 
                            There were roles (views) like organizations, admin, teachers and students.
                            </p>
                        </div>
                        <div className="box col-sm-5 col-md-5 col-lg-5">
                            <h3>BD users</h3>
                            <Video name={"BD"}/>
                            <br />
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href={"https://www.typescriptlang.org/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={typescript} alt="typescript icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://sass-lang.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={sass} alt="sass icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.w3schools.com/html/html_examples.asp"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={html5} alt="html5 icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://angular.io/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon " src={angular} alt="angular icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://nodejs.org/en/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={nodejs} alt="nodejs icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"http://expressjs.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon express" src={expressjs} alt="expressjs icon"></img>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.mongodb.com/"} target="_blank" rel="noopener noreferrer">
                                        <img className="icon" src={mongodb} alt="mongodb icon"></img>
                                    </a>
                                </li>
                            </ul>
                            <p className="small-text">
                                Full-stack project made at Samsung Bootcamp. It's a list of users saved in MongoDB. You can add new ones (with some restrictions like all fields requiered, etc), update and delete users
                                on the list.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default Projects;
