const Education = ({id ,scolar , imageSrc}) => {
    return (
        <div id={id} className="educationcontainer">
            <img src={imageSrc} className="eduimage"/>
            <text className="edutitle"><b>Education</b></text>
            <text className="edutext">{scolar}</text>
        </div>
    );
}

export default Education;