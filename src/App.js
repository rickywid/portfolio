import React, { Component } from 'react';
import { data, socialLink } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: 0,
    };
  }

  selectProject = (index) => {
    this.setState({
      selectedProject: index,
    });
  }

  renderSocialIcons = social => (
    <li>
      <a href={social.link}>
        <i className={`fa ${social.icon}`} aria-hidden="true" />
      </a>
    </li>
  )

  renderProjects = (project, index) => {

    const { selectedProject } = this.state;

    return (
      <div className={`project-name ${selectedProject !== index ? 'hide' : ''}`}>
        <div className="project-images">
          <img
            className="project-desktop-screenshot"
            src={project.img} alt={project.name} />
          <img
            className="project-mobile-screenshot"
            src={project.img[1]} alt={project.name} />
        </div>
        <div className="project-detail">
          <h3 className="highlight">{project.name}</h3>
          <ul>
            {project.skills.map(skill => (
              <li className="skill">
                <p className="skill-item">{skill}</p>
              </li>
            ))
            }
          </ul>
          <p className="project-desc">
            {project.description}
          </p>
          <div className="button-group">
            {project.links.source ? <a href={project.links.source} className="source" rel="noopener noreferrer" target="_blank">Source Code</a> : <></>}
            <a href={project.links.demo} className="demo highlight" rel="noopener noreferrer" target="_blank">Website</a>
          </div>
        </div>
      </div>
    );
  }


  render() {
    const { selectedProject } = this.state;

    return (
      <div className="container">
        <section className="profile animated bounceInDown">
          <div className="profile-info">
            <div className="profile-details">
              <h2 className="profile-name highlight">Ricky JW </h2>
              <div style={{ color: "#919090" }}>
                <p>rickyw08@gmail.com</p>
                <p className="profile-title">Software Developer</p>
              </div>
            </div>
            <ul className="profile-social">
              {socialLink.map(this.renderSocialIcons)}
            </ul>
          </div>
        </section>
        <section className="projects-nav animated slideInLeft">
          <ul>
            {data.map((project, index) =>
              <li>
                <button
                  type="button"
                  className={`${selectedProject === index ? 'highlight' : ''}`}
                  onKeyDown={this.selectProject.bind(this, index)}
                  onClick={this.selectProject.bind(this, index)}>
                  {project.name}
                </button>
              </li>)}
            <li>
              <button
                type="button"
                className={`nav-bio ${selectedProject === data.length + 1 ? 'highlight' : ''}`}
                onClick={this.selectProject.bind(this, data.length + 1)}>
              </button>
            </li>
          </ul>
        </section>
        <section className="project animated bounceInUp">
          {data.map(this.renderProjects)}
          <div className="bio">
            <div className="bio-inner">
              <img src="https://res.cloudinary.com/dzeqj2xv1/image/upload/v1611890124/profile.jpg" alt="" />
              <div>
                <h3 className="highlight about-me">ABOUT ME</h3>
                <p>
                  I am a <span className="highlight"> Software Developer </span>who enjoys learning & building cool stuff.
                </p>
                <p>
                  With a college diploma in IT Neworking I began teaching myself programming because I was always interested in building cool interactive websites. Since I've first started I've used multiple languages, frameworks, tools and libraries that are used to build modern web applications these days.
                </p>
                <p>
                  There are so many amazing online resources and developer communities that has always helped me whenever I got stuck on a problem. I now consider myself a master at Google-ing for answers which in itself is a valuable skill to have. Some areas I would still like to learn more about is testing, databases, deployment and working in large development teams.
                </p>
                <p>
                  When I'm not working on my programming skills, you can catch me watching the Raptors, Leafs or Blue Jays. During the summer time you will see me cycling around the city.
                </p>
                <p>Here is a list of some of the technologies that I've used either professionally or in my own personal projects.</p>
                <ul className="bio-skills">
                  <li>
                    <p><span className="highlight">Languages: </span>
                      HTML, CSS, JavaScript/ES6, Python, Java</p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Frameworks: </span>
                      React, Node/Express, MVC (Django, Rails, Laravel etc..)
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Databases: </span>
                      Postgres, MongoDB
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Deployment: </span>
                      CircleCI, Heroku, Docker
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Source Control: </span>
                      Git/Github
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Test Automation: </span>
                      Selenium, Jest, React-Testing-Library
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="highlight">Operating Systems: </span>
                      Linux, Windows
                    </p>
                  </li>
                </ul>
                <p>
                  If you would like to get in touch, you can contact me via email at
                  <span className="highlight"> rickyw08@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
