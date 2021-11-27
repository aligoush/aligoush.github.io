import FadeInSection from "../../components/FadeInSection";
import "./Contact.css";
import logo from "../../assets/codewars.png"
const Contact = () => {
    return (
        <FadeInSection>
            <section className="web-section" id="contact">
                <div className="web-section-content">
                </div>
                <div className="container">
                    <ul id="menu-contact">
                        <a className="menu-contact-button icon-plus" href="#menu-contact" title="Show navigation">Contact Me</a>
                        <a className="menu-contact-button icon-minus" href="#0" title="Hide navigation"></a>
                        <li className="menu-item">
                            <a href = "mailto: alinegoush@gmail.com">
                                <span className="fa fa-envelope"></span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href={"https://linkedin.com/in/ali-goush"} target="_blank" rel="noopener noreferrer" >
                                <span className="fa fa-linkedin"></span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href={"https://twitter.com/AltynGoush"} target="_blank" rel="noopener noreferrer">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href={"https://codepen.io/ali_goush"} target="_blank" rel="noopener noreferrer">
                                <span className="fa fa-codepen"></span>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href={"https://github.com/aligoush"} target="_blank" rel="noopener noreferrer">
                                <span className="fa fa-github"></span>
                            </a>
                        </li>

                        <li className="menu-item codewars">
                            <a href={"https://www.codewars.com/users/ali_goush"} target="_blank" rel="noopener noreferrer">
                                <img className="logo" src={logo} alt="a codewars logo"></img>
                            </a>
                        </li>
                    </ul>

                   
                    
                </div>
            </section>

        </FadeInSection>
    );
};

export default Contact;