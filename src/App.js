import './App.css';
import Akmal2 from "../src/assets/image/profil.png";
import Translate from "../src/assets/image/translate.png";
import Book from "../src/assets/image/book.jpg";

import ProfileInfo from './component/ProfileInfo';
import Contact from './component/Contact';
import ProfilePicture from './component/ProfilePicture';
import Education from './component/Education';
import Language from './component/Biografi';
import Skill from './component/Skill';

import Navigation from './component/Navbar';


const App = () => {
  return (
    <div>
      <Navigation/>
      <div className="container">
      <ProfilePicture imageSrc={Akmal2} altText="Holla!!!"/>
      <ProfileInfo
        id="profileinfo"
        prof="Profile"
        description="Hai, saya Akmalll! Saya suka banget ngulik hal-hal tentang komputer dan teknologi, terutama yang berhubungan sama coding, atau game development. Dari dulu, saya selalu penasaran gimana cara teknologi bikin hidup kita jadi lebih simpel, jadi sekarang saya fokus belajar dan bikin proyek seru di bidang ini. Kalau ada yang seru buat diskusi soal teknologi, ayo ngobrol!"
        
      />
      <Education id="education"  scolar="University Of Klabat" imageSrc={Book}/>
      <Language id="language" imageSrc={Translate}/>
      <Skill id="skill" />

      <Contact
        id="contact"
        email="akmalSaja@gmail.com"
        phone="085298526553"
        linkedin="linkedin.com/in/Aakmall"
      />
    </div>
    </div>
  );
};

export default App;
