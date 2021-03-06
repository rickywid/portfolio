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
      <a href={social.icon !== 'fa-envelope' ? social.link : 'mailto:rickywid@hotmail.com'} className="profile__social-link" rel="noopener noreferrer" target="_blank">
        <i className={`fa ${social.icon} highlight`} aria-hidden="true" />
      </a>
    </li>
  )

  renderProjects = (project, index) => {
    const { selectedProject } = this.state;

    return (
      <div className={`project-name ${selectedProject !== index ? 'hide' : ''}`}>
        <img src={project.img} alt={project.name} />
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
            {project.name !== 'CODECONCEPT' ? <a href={project.links.source} className="source" rel="noopener noreferrer" target="_blank">View Source</a> : <></>}
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
              <p>rickyw08@gmail.com</p>
              <p className="profile-title">Software Developer</p>
            </div>
            <ul className="profile-social">
              {socialLink.map(this.renderSocialIcons)}
            </ul>
          </div>
        </section>
        <section className="projects-nav animated slideInLeft">
          <ul>
            {data.map((project, index) => <li><button type="button" className={`${selectedProject === index ? 'highlight' : ''}`} onKeyDown={this.selectProject.bind(this, index)} onClick={this.selectProject.bind(this, index)}>{project.name}</button></li>)}
            <li><button type="button" className={`nav-bio ${selectedProject === data.length + 1 ? 'highlight' : ''}`} onClick={this.selectProject.bind(this, data.length + 1)}><p className='highlight'>ABOUT</p></button></li>
          </ul>
        </section>
        <section className="project animated bounceInUp">
          {selectedProject === data.length + 1
            ? (
              <div className="bio">
                <div className="bio-inner">
                  <img src="https://res.cloudinary.com/dzeqj2xv1/image/upload/v1611890124/profile.jpg" alt="" />
                  <div>
                    <p>
                      I am a
                  <span className="highlight"> Software Developer </span>
                  with
                  <span className="highlight"> 3 years </span>
                  of professional experience primarily focusing on
                  <span className="highlight"> Web Development</span>.
                  </p>
                    <p>
                      Since I began self teaching myself programming, I've experimented with multiple languages, frameworks, tools and libraries and I still feel I haven't even scratched the surface. I started off learning Front End Development but as I become more comfortable I started learning more about Back End Development which then lead me to learn about databases and building REST API's, security, deployment and more.
                  </p>
                    <p>
                      During my off days, you can find me cycling around the city or when the weather is not permitting, I'll be catching up on some Netflix. 
                  </p>
                    <ul className="bio-skills">
                      <li>
                        <span className="highlight">Languages: </span>
                     HTML, CSS, JavaScript/ES6, Python, Java
                  </li>
                      <li>
                        <span className="highlight">Frameworks: </span>
                    React, Angular, Vue, Node/Express, Spring Boot, MVC
                  </li>
                      <li>
                        <span className="highlight">Databases: </span>
                    Postgres, MongoDB
                  </li>
                      <li>
                        <span className="highlight">Deployment: </span>
                    CircleCI, Heroku, Docker
                  </li>
                      <li>
                        <span className="highlight">Source Control: </span>
                    Git/Github
                  </li>
                      <li>
                        <span className="highlight">Test Automation: </span>
                    Selenium, Jest, React-Testing-Library
                  </li>
                      <li>
                        <span className="highlight">Operating Systems: </span>
                    Linux, Windows
                  </li>
                    </ul>
                    <p>
                      If you would like to get in touch, you can contact me via email at
                  <span className="highlight"> rickyw08@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            )
            : data.map(this.renderProjects)
          }
        </section>
      </div>
    );
  }
}

export default App;
