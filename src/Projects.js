import React, { Component } from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Modal1 } from './components/Modal1';
import { Modal2 } from './components/Modal2';
import { Modal3 } from './components/Modal3';
import { Modal4 } from './components/Modal4';
import { Modal5 } from './components/Modal5';
import { Modal6 } from './components/Modal6';
import project1 from './assets/5.jpg';
import project2 from './assets/11.PNG';
import project3 from './assets/13.PNG';
import project4 from './assets/1.PNG';
import project5 from './assets/image3.png';
import project6 from './assets/15.png';

// import "./styles.css";

const Styles = styled.div`
  .projects {
    background-color: #EDD7DE;
    min-height:100vh;
    width:100%;
    position:relative;
    text-align:center;
    padding-top: 20px;
  }
    
  .projects-grid{
    margin:auto;
    max-width:85%;
    padding: 20px;
    padding-top:0;
  }

  h3{
    font-family: "Candara", sans-serif;
    font-weight:700;
    padding:30px;
    font-size:25px;
    text-align:center;
    color:#ECD4DB;
  }
  p{
    text-align:center;
    margin-left: auto;
    margin-right: auto;
    width:50%;
  }

  }
  .overflow {
    background-color:#74535D; 
    position:relative;
    text-align:center;
    width:250px;
    height: 170px;
    overflow: hidden;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    .project{
    width: 250px;
    height: 170px;
    margin:auto;
    transition: transform 2s;
    

}
  .project:hover{
      transform: scale(1.2);
      opacity:0.3;
      cursor: pointer;
  }
    
    .overflow .text {
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity:1;
        transition-delay: 0.1s;
        transition-duration: 0.4s;
        pointer-events: none;
        
    }

    .overflow:hover .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
  
  .portrait{
    width:250px;
    height:250px;
    border-radius: 50%;
    padding:0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalShow1: false, addModalShow2: false, addModalShow3:false, 
            addModalShow4: false, addModalShow5: false, addModalShow6:false};
    }


    render() {
        let addModalClose = () => this.setState({ addModalShow1: false ,addModalShow2: false, addModalShow3:false, 
            addModalShow4: false, addModalShow5: false, addModalShow6:false});
        return (
            <Styles>
                <div className="projects" id="projects">

                    <Modal1
                        show={this.state.addModalShow1}
                        onHide={addModalClose}
                    />
                    <Modal2
                        show={this.state.addModalShow2}
                        onHide={addModalClose}
                    />
                    <Modal3
                        show={this.state.addModalShow3}
                        onHide={addModalClose}
                    />
                    <Modal4
                        show={this.state.addModalShow4}
                        onHide={addModalClose}
                    />
                    <Modal5
                        show={this.state.addModalShow5}
                        onHide={addModalClose}
                    />
                    <Modal6
                        show={this.state.addModalShow6}
                        onHide={addModalClose}
                    />
                    <h1>Projects</h1><hr size="10" width="50%" />
                    <p>Here are some of the recent projects I've worked on, focusing on web development,
                         machine learning, and embedded systems.
                        Check out my <a href = "https://github.com/molly-yu" target="_blank">GitHub</a> for more!</p>

                    <section className="projects-grid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="overflow"> 
                                <img src={project1} alt="Robotic Soil Sampler" className="project cursor"
                                onClick={() => this.setState({ addModalShow1: true })} />
                                <div className="text"><h3>Robotic Soil Sampler</h3></div>
                                </div>
                            </div>
                            <div className="col-sm">
                            <div className="overflow">
                                <img src={project2} alt="Rubiks Cube Solver" className="project cursor" 
                                 onClick={() => this.setState({ addModalShow2: true })}/>
                                <div className="text"><h3>Rubik's Cube Solver</h3></div>
                            </div>
                            </div>
                            <div className="col-sm">
                            <div className="overflow">
                                <img src={project3} alt="InvFind" className="project cursor"
                                onClick={() => this.setState({ addModalShow3: true })}/>
                                <div className="text"><h3>InvFind</h3></div>
                            </div>
                            </div>
                            <div className="col-sm">
                            <div className="overflow">
                                <img src={project4} alt="StudyNotes" className="project cursor"
                                onClick={() => this.setState({ addModalShow4: true })}/>
                                <div className="text"><h3>StudyNotes</h3></div>
                                </div>
                            </div>
                            <div className="col-sm">
                            <div className="overflow">
                                <img src={project5} alt="Dabble" className="project cursor"
                                onClick={() => this.setState({ addModalShow5: true })}/>
                                <div className="text"><h3>Dabble Word Game</h3></div>
                                </div>
                            </div>
                            <div className="col-sm">
                            <div className="overflow">
                                <img src={project6} alt="ARBSUtility" className="project cursor"
                                onClick={() => this.setState({ addModalShow6: true })}/>
                                <div className="text"><h3>ARBSUtility</h3></div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </Styles>
        );
    }
}

export default Projects;

const rootElement = document.getElementById("root");
ReactDOM.render(<Projects />, rootElement);
