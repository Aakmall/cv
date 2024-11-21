import Akmal from "../../assets/image/botak.png";
const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
            <img src={Akmal} className="nav-picture" />
            <h2 className="nav-text">Home</h2>
            </div>
        <div className="link-container">
            <a className="nav" href="#profileinfo">Profile</a>
            <a className="nav" href="#education">Education</a>
            <a className="nav" href="#language">Biografi</a>
            <a className="nav" href="#skill">Pengalaman</a>
            <a className="nav" href="#contact">Contact</a>
          </div>
        </div>
    );
}

export default Navigation;