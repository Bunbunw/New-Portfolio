import "./About.css";
import profile from "../assets/Person.png";

function About() {
  return (
    <>
      <img src={profile} alt="profile-pic" class="profile"></img>
      <div className="headline">
        <h1 className="name">Sigmund Wang</h1>
        <p className="role">Full Stack Developer</p>
        <p className="school">2nd year Student at UTSC</p>
      </div>
      {/* <div className="moving-bg">
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
      </div> */}
    </>
  );
}

export default About;
