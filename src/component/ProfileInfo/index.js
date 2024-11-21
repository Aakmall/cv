const ProfileInfo = ({id, prof, description, imageSrc }) => {
    return (
      <div id={id} className="profilecontainer">
        <div className="subprofilecontainer">
        <h2 className="subprofile"><b>{prof}</b></h2>
        <p className="contentprofile">{description}</p>
        </div>
        <img src={imageSrc} className="imagecontentprofile"/>
      </div>
    );
  };
  
  export default ProfileInfo;