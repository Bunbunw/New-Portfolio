import "./About.css";
import profile from "../assets/Person2.png";

function About() {
  return (
    <>
      <p className="easter-egg">
        How dare you check a portfolio on phone? Show respect to others! Umm...
        well, the true reason is just because my design works so bad on phones
        so please go to pc to check this page, please...... qwq
      </p>
      <img src={profile} alt="profile-pic" class="profile"></img>
      <div className="headline">
        <h1 className="name">Sigmund Wang</h1>
        <p className="role">Full Stack Developer</p>
        <p className="school">2nd year Student at UTSC</p>
      </div>
      <div className="moving-bg">
        <div className="row">
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
          <p className="line">
            Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang Sigmund Wang
            Sigmund Wang Sigmund Wang Sigmund Wang
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
