import FadeInSection from "../../components/FadeInSection";
import foto1 from "../../assets/programming.jpeg";
import foto2 from "../../assets/guitar.jpeg";
import foto3 from "../../assets/yoganature.jpg";
import "./Interests.css";

const Interests = () => {
    return (
        <FadeInSection>
            <section className="web-section" id="interests">
                <div className="web-section-content">
                    <h2>My Interests</h2>
                    <div className="interests-container">
                        <div className="box-interests col-sm-5 col-lg-5">
                            <img className="foto-interests" src={foto1} alt="programming with coffee"></img>
                        </div>
                        <div className="box-interests col-sm-5 col-lg-5">
                        <p className="medium-text"> I'd like to improve my programming skills and <span className="underline--magical">become senior full-stack</span> developer. 
                            In my free time I like to code and try new things. As well, I like to learn and expand my knowledge in technologies.
                            {"\n"}
                            In the future, I'd like to use my skills to make my ideas come true. 
                        </p>
                        </div>
                    </div>
                    <div className="interests-container">
                        <div className="box-interests col-sm-5 col-lg-5">
                            <img className="foto-interests" src={foto2} alt="programming with coffee"></img>
                        </div>
                        <div className="box-interests col-sm-5 col-lg-5">
                            <p className="medium-text">I enjoy practicing <span className="underline--magical">yoga</span>. Actually, I would like to practice it every day, (I'm working on it).
                                I think, yoga is a discipline that helps both the mind and the body.
                                {"\n"}
                                Another hobby is learning to play a <span className="underline--magical">guitar</span>. My dream is to be able to play the rhythms on the guitar and sing.
                                {"\n"}
                                I consider myself a curious person: I like to discover new things, experience them, live adventures.
                                And I like <span className="underline--magical">Physics</span> as well, as I think it's a door to get to know about the mysteries of the Universe.
                            </p>

                        </div>
                    </div>
                    <div className="interests-container">
                        <div className="box-interests col-sm-5 col-lg-5">
                            <img className="foto-interests" src={foto3} alt="programming with coffee"></img>
                        </div>
                        <div className="box-interests col-sm-5 col-lg-5">
                            <p className="medium-text">I like <span className="underline--magical">travelling</span> as well, to discover new places, new cultures, meet and make new 
                            friends. 
                            {"\n"}
                            Also, I like studying <span className="underline--magical">languages</span>: now I'm studying Catalan. As well, I'd like to improve my English too. 
                            In the future, I would like to recover my native language, Baskort, and be able to speak in that language with my family.
                        
                            </p>
                        </div>
                    </div>
                    <div className="interests-container">
                        <div className="box-interests ">
                            <h3>My <span className="underline--magical">dream</span> job</h3>
                            <p>I'd like to have a <span className="underline--magical">full-time remote</span> job. My dream job would be working in a company 
                            where I can <span className="underline--magical">learn, grow and improve my skills,</span> hoping that 
                            the company will provide all this. As well, I would also like <span className="underline--magical">to travel</span> from 
                            time to time <span className="underline--magical">for meetings</span> either for work or to get to know my <span className="underline--magical">coworkers better.</span> 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </FadeInSection>
    );
};

export default Interests;