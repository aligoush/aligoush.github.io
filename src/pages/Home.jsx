import MenuButton from "../components/MenuButton";
const Home = () => {
    return (
        <section className="web-section"> {/* contenedor*/}
            <div className="web-section-content">
                <h1 className="title">
                    Front-end |
                    Software |
                    Back-end
                    {"\n"}
                    Developer
                </h1>

                <div className="typewriter-box" id="home">
                    <p className="title-hello typewriter">
                        Hello, World!
                        I'm Ali Goush...
                    </p>
                </div>

                <MenuButton />

            </div>
        </section>
    );
};

export default Home;