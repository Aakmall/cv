import Email from "../../assets/image/gmail.png";
import Phone from "../../assets/image/phone.png";
import Linkedin from "../../assets/image/linkedin.png";

const Contact = ({id ,email, phone, linkedin}) => {
  return (
      <div id={id} className="languagecontainer">
          <text className="contacttitle"><b>Contact</b></text>
          <div className="languagecontainer2">
          <div className="card">
              <img src={Email} className="contactimage" />
              <text className="contacttext">{email}</text>
          </div>
          <div className="card">
              <img src={Phone} className="contactimage" />
              <text className="contacttext">{phone}</text>
          </div>
          <div className="card">
              <img src={Linkedin} className="contactimage" />
              <text className="contacttext">{linkedin}</text>
          </div>
          </div>
      </div>
  );
};

export default Contact;