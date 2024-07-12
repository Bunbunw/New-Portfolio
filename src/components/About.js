import "./About.css";
import profile from "../assets/Person2.png";

function About() {
  return (
    <>
      <p className="easter-egg">
      ❤️ Hi, Sigmund here! It might be... better to check on this portfolio in a bigger screen like your pc or ipad. But please also enjoy it here and wish you have a nice day! ❤️
      </p>
      <img src={profile} alt="profile-pic" class="profile"></img>
      <div className="headline">
        <h1 className="name">Sigmund Wang</h1>
        <p className="role">Full Stack Developer</p>
        <p className="school">3rd year Student at UofT</p>
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
