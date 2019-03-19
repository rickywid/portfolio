import React, { Component } from 'react';
// import { Transition, animated } from 'react-spring'
import { data, socialLink } from './data';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedProject: 0,
      showBio: false
    }
  }

  selectProject = (index) => {
    this.setState({ 
      selectedProject: index 
    });
  }

  renderSocialIcons = (social, index) => {
    return (
      <li>
        <a href={social.icon !== 'fa-envelope' ? social.link : 'mailto:rickywid@hotmail.com'} className="profile__social-link" rel="noopener noreferrer" target="_blank">
          <i className={`fa ${social.icon}`} aria-hidden="true"></i>
        </a>            
      </li>
    )
  }
  renderProjectNav() {}
  renderProjects = (project, index) => {
    return (
      <div className={`project-name ${this.state.selectedProject !== index ? 'hide' : ''}`}>
        <img src={project.img} alt={project.name} />
        <div className="project-detail">
          <h3>{project.name}</h3>  
          <ul>
            {project.skills.map(skill => <li className="skill"><p className="skill-item">{skill}</p><span> / </span></li>)}
          </ul>       
          <p className="project-desc">
            {project.description}
          </p>
          <div className="button-group">
            <a href={project.links.source} className="source" rel="noopener noreferrer" target="_blank">View Source</a>
            <a href={project.links.demo}  className="demo" rel="noopener noreferrer" target="_blank">Visit Site</a>
          </div>
        </div>      
      </div> 
    )
  }


  render() {
    return(
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
            {data.map((project, index) => <li className={`${this.state.selectedProject === index ? 'active' : ''}`} onClick={this.selectProject.bind(this, index)}><p>{project.name}</p></li> )}
            <li className={`nav-bio ${this.state.selectedProject === data.length + 1 ? 'active' : ''}`} onClick={this.selectProject.bind(this, data.length + 1)}><p>ABOUT</p></li>
          </ul>
        </section>
        <section className="project animated bounceInUp">   
          {this.state.selectedProject === data.length + 1 ? 
            <div className="bio">
            <p>about me...</p>
            <p>I am a <span class="highlight">Web Developer</span> with around <span class="highlight">2-3 years</span> of professional experience primarily focusing on <span class="highlight">Front End Development</span>. My core skills include <span class="highlight">HTML</span>, <span class="highlight">CSS</span> and <span class="highlight">JavaScript</span> but I have also used a wide variety of languages, frameworks, libraries and tools.</p>
            <p>When I’m working on personal projects I like to experiment with different libraries and frameworks. I have used <span class="highlight">ReactJS</span> in a lot of my personal projects and most recently I got to learn a little bit of <span class="highlight">TypeScript</span>. As a Front End Developer I also try to learn more about the back end so I’ve taken the time to learn more about <span class="highlight">NodeJS</span>, <span class="highlight">ExpressJS</span> and <span class="highlight">databases</span> and understand how it all connects with the client side.</p>
            <p>Apart from web development I also enjoy learning new programming languages. Most recently I’ve began learning <span class="highlight">Python</span> to perform web scraping and creating automated scripts.</p>
            <p>If you would like to get in touch, you can contact me via email at <span className="highlight">rickywid@hotmail.com</span></p>
            </div>
            :
            data.map(this.renderProjects)
          }
        </section>
      </div>  
    )  
  }
}

export default App;
