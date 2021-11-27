const MenuButton = () => {
    return (
        <div className="dropup">
            <button className="dropbtn">
                <div className="menu-button"></div>
                <div className="menu-button"></div>
                <div className="menu-button"></div></button>
            <div className="dropup-content">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default MenuButton;