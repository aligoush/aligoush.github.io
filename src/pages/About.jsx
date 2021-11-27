import FadeInSection from "../components/FadeInSection";

const About = () => {
    return (
        <FadeInSection >
            <section className="web-section" id="about">
                <div className="web-section-content">
                    <h2>About Me</h2>
                    <p>
                        My name is Aline, but you can call me Ali. I'd like to talk a bit about me.
                        I was born in <span className="underline--magical">Baskortostan</span> (Russia), but I have been living in <span className="underline--magical">Spain</span> since 2008.
                    </p>
                    <p>
                        I have started my journey as a developer with my first team project in 2020.
                        It was a platform that we had to make in a university subject.
                        As I really liked it, I decided to become a full-stack developer. 
                        From that moment on I started studying on my own, and a few months later I entered a <span className="underline--magical">Samsung Full-stack program</span>, similar to a bootcamp (there we saw everything: css, html, javascript, typescript, angular, node.js, express). 
                        I made a final project that's below in the Projects section.
                    </p>
                    <p>
                        I'm currently studying <span className="underline--magical">Artificial Intelligence</span>, also a Samsung program, so I can integrate some things in my future projects.
                        I love to learn new technologies, and of course to deepen my current skills, because you can never master everything perfectly.
                    </p>
                    <p>
                        In my future I see myself working as a <span className="underline--magical">senior full-stack (or backend)</span> programmer. 
                        And also doing some development projects on my own. I would also love to develop something that would help the environment.
                        {"\n"}
                        Below in the Interests section, I explain what job I would like to have.

                    </p>
                    

                </div>
            </section>
        </FadeInSection>
    );
};

export default About;