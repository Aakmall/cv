import Js from "../../assets/image/js.png";
import Java from "../../assets/image/html.png";
import Html from "../../assets/image/java.png";
import Python from "../../assets/image/python.png";
const Skill = ({id}) => {
    return (
        <div id={id} className="skillcontainer">
           
            <text className="skilltitle"><b>Pengalaman</b></text>
            <div className="skillcontainer2">
            <div className="cards">
                <img src={Java} className="skillimage" />
                <text className="languagetext">Java</text>
            </div>
            <div className="cards">
                <img src={Html} className="skillimage" />
                <text className="languagetext">Html</text>
            </div>
            <div className="cards">
                <img src={Python} className="skillimage" />
                <text className="languagetext">Python</text>
            </div>
            <div className="cards">
                <img src={Js} className="skillimage" />
                <text className="languagetext">Javascript</text>
            </div>
            </div>
        </div>
    );
};

export default Skill;