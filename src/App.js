import React, { Component } from 'react';
// import { Transition, animated } from 'react-spring'
import { data, socialLink } from './data';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: 0,
    };
  }

  selectProject = (index) => {
    console.log(index)
    this.setState({
      selectedProject: index,
    });
  }

  renderSocialIcons = social => (
    <li>
      <a href={social.icon !== 'fa-envelope' ? social.link : 'mailto:rickywid@hotmail.com'} className="profile__social-link" rel="noopener noreferrer" target="_blank">
        <i className={`fa ${social.icon}`} aria-hidden="true" />
      </a>
    </li>
  )

  renderProjects = (project, index) => {
    const { selectedProject } = this.state;

    return (
      <div className={`project-name ${selectedProject !== index ? 'hide' : ''}`}>
        <img src={project.img} alt={project.name} />
        <div className="project-detail">
          <h3>{project.name}</h3>
          <ul>
            {project.skills.map(skill => (
              <li className="skill">
                <p className="skill-item">{skill}</p>
                <span> / </span>
              </li>
            ))
            }
          </ul>
          <p className="project-desc">
            {project.description}
          </p>
          <div className="button-group">
            <a href={project.links.source} className="source" rel="noopener noreferrer" target="_blank">View Source</a>
            <a href={project.links.demo} className="demo" rel="noopener noreferrer" target="_blank">Visit Site</a>
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
              <h2 className="profile-name">Ricky JW </h2>
              <p>rickywid@hotmail.com</p>
              <p className="profile-title">Front End Developer</p>
            </div>
            <ul className="profile-social">
              {socialLink.map(this.renderSocialIcons)}
            </ul>
          </div>
        </section>
        <section className="projects-nav animated slideInLeft">
          <ul>
            {data.map((project, index) => <li><button type="button" className={`${selectedProject === index ? 'active' : ''}`} onKeyDown={this.selectProject.bind(this, index)} onClick={this.selectProject.bind(this, index)}>{project.name}</button></li>)}
            <li><button type="button" className={`nav-bio ${selectedProject === data.length + 1 ? 'active' : ''}`} onClick={this.selectProject.bind(this, data.length + 1)}><p>ABOUT</p></button></li>
          </ul>
        </section>
        <section className="project animated bounceInUp">
          {selectedProject === data.length + 1
            ? (
              <div className="bio">
                <p>
                  I am a
                  <span className="highlight"> Web Developer </span>
                  with about
                  <span className="highlight"> 2-3 years </span>
                  of professional experience focusing on
                  <span className="highlight"> Front End Development</span>
                  . My main responsibilities as a Front End Developer involves translating mockup designs, creating responsive layouts and building single page applications using
                  <span className="highlight"> JavaScript </span>
                  frameworks such as
                  <span className="highlight"> React</span>
                  . As a developer I am continuously learning, building and experimenting with different tools and technologies.
                </p>
                <ul className="bio-skills">
                  <li>
                    <span className="highlight">Languages: </span>
                     HTML, CSS, JavaScript/ES6, Python
                  </li>
                  <li>
                    <span className="highlight">Frameworks: </span>
                    React, Angular, Vue, Node/Express, Jquery, MVC
                  </li>
                  <li>
                    <span className="highlight">Databases: </span>
                    Postgres, MongoDB
                  </li>
                  <li>
                    <span className="highlight">Deployment: </span>
                    CircleCI, Heroku
                  </li>
                  <li>
                    <span className="highlight">Source Control: </span>
                    Github
                  </li>
                  <li>
                    <span className="highlight">Test Automation: </span>
                    Selenium
                  </li>
                  <li>
                    <span className="highlight">Operating Systems: </span>
                    Linux, Windows
                  </li>
                </ul>
                <p>
                  If you would like to get in touch, you can contact me via email at
                  <span className="highlight">rickywid@hotmail.com</span>
                </p>
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
