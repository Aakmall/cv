import Akmal2 from "../../assets/image/profil.png";

const ProfilePicture = ({ imageSrc, altText }) => {
  return (
    <div className="profilepicture">
      <div className="profile-picture-container">
        <h1 className="profile-picture-title">Holla!!! saya akmal</h1>
        <text className="profile-picture-text">
          saya memiliki bakat terpendam dan memiliki banyak pengalaman disegala pengalaman yang ada.
          __________________________________________
        </text>
        <a href="#profileinfo" className="profile-picture-button">
          Go to my profile
        </a>
      </div>
      <img src={Akmal2} className="profile-picture-image" />
    </div>
  );
};

export default ProfilePicture;
