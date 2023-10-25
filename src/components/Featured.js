import "./Featured.css";

function Featured() {
  return (
    <>
      <p class="featured-title">FEATURED</p>
      <div class="rectangle"></div>
      <div class="featured-main">
        <div class="skills-column">
          <div class="languages">
            <h3>Languages</h3>
            <p class="content languages">
              HTML/CSS/JS, C#, C++/C, Java, Python, SQL
            </p>
          </div>
          <div class="other">
            <h3>Frameworks and Applications</h3>
            <p class="content">React, SpringBoot, Maven, MyBatis, Vue;</p>
            <p class="content">
              Postman, Canva, Figma, Unity, Github, Godot, Blender, FL Studio
            </p>
          </div>
        </div>
        <div class="skills-column experiences">
          <h3>Experience</h3>
          <p class="bold content margin-t">Ping An Bank Intern</p>
          <p class="content">
            Used SpringBoot, MySQL, Redis, Postman, RESTful APIs to maintain a
            loan section in an app.
          </p>
          <p class="bold content margin-t"> SoundLife Scarborough Part-time</p>
          <p class="content">
            Helped with web-development of the official website with WordPress
            Admin.
          </p>
          <p class="bold content margin-t">Wintercamp TA Part-time</p>
          <p class="content">
            Taught machine learning fundamentals and robotics in JavaScript.
            Helped student with projects.
          </p>
        </div>
      </div>
    </>
  );
}

export default Featured;
