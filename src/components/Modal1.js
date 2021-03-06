import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel1 from './Carousel1';

export class Modal1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Robotic Soil Sampler</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel1></Carousel1>
          </div>
        <h5><i>Java, Arduino, Raspberry Pi</i></h5>
        <p>
        A fully functioning robotic machine
       that collects soil samples from user-specified locations, then processes the data received 
       from the sensors and probes through callibration. Data is then transmitted wirelessly so that 
       the soil properties can be observed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }

}
