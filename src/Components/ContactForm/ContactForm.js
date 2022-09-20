import { Col, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap';
import './ContactForm.css';

function ContactForm() {
    return ( 
      <div className="col-xs-12 col-lg-6 container">
        <h1 className='form-header small-caps text-center'>contact us</h1>
        <Form>
          <Row>
            <Col lg={6} xs={12} className="my-2">
                <FloatingLabel
                  controlId='floating1'
                  label="name"
                  className="small-caps"
                >
                  <FormControl type="name" placeholder='name' ></FormControl>
                </FloatingLabel>  
            </Col>
            <Col lg={6} xs={12} className="my-2">
              <FloatingLabel
                controlId='floating2'
                label="email address"
                className="small-caps"
              >
                <FormControl type="email" placeholder='email address' ></FormControl>
              </FloatingLabel>            
            </Col>
          </Row>
          <Row className="my-3">
              <Col>
                <FloatingLabel
                  controlId='floating3'
                  label="phone number"
                  className="small-caps"
                >
                  <FormControl type="number" placeholder='phone number' ></FormControl>
                </FloatingLabel>                
              </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <FloatingLabel
                controlId='floating4'
                label="subject"
                className="small-caps"
              >
                <FormControl type="text" placeholder='subject' ></FormControl>
              </FloatingLabel>              
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <FloatingLabel
                controlId='floating5'
                label="how can we help you"
                className="small-caps"
              >
                <FormControl as="textarea" rows={4} type="text" placeholder='how can we help you' ></FormControl>
              </FloatingLabel>             
            </Col>
          </Row>
          <Row>
            <Col className="my-2 col-12">
              <button className="submit-btn col-12 small-caps py-1">
                submit
              </button>
            </Col>
          </Row>
        </Form>
      </div>
     );
}

export default ContactForm;
