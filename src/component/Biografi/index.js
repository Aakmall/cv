import Akm from "../../assets/image/bio.jpg";

const Biografi = () => {
  return (
    <div className="languagecontainer">
      <section className="bio-container">
        <div className="bio-photo">
          <img
            src={Akm}
            alt="Foto Profil"
            className="profile-img"
          />
        </div>
        <div className="bio-content">
          <h2>Nama Saya: [Akmal Rizki Anapu]</h2>
          <p>
            Saya seorang penggemar teknologi dan profesional di bidang{" "}
            <strong>Computer Science</strong>. Saat ini saya fokus pada{" "}
            <em>pengembangan perangkat lunak</em>, dengan ketertarikan khusus di{" "}
            <em>kecerdasan buatan</em> dan <em>machine learning</em>. Selain
            itu, saya juga aktif di dunia <strong>programming</strong> dan{" "}
            <strong>data analysis</strong>.
          </p>
          <p>
            Saya selalu berusaha untuk memecahkan masalah melalui solusi
            inovatif dan senang berkolaborasi dalam tim yang dinamis. Saya
            percaya bahwa teknologi memiliki kekuatan untuk membuat dunia
            menjadi tempat yang lebih baik, dan saya berkomitmen untuk
            berkontribusi dalam mencapainya.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Biografi;
