import React from 'react'
import Header from '../components/Header'
import {BsChevronDown } from "react-icons/bs";
import { Container,Row,Col } from 'react-bootstrap';
export default function AddAccount() {
  return (
    <div>
        <Header props="Add Accounts"/>

        <div className="tabContent mt-5">
            <form action="">
            <Container className="container-fluid">
                <Row className="g-5">
                  <Col lg={10} >

                    <label htmlFor="">Account Holder Name</label>
                    <input type="text" placeholder='John Doe'/>
                    
                    <Row>
                        <Col>
                        <label htmlFor="">Login Id</label>
                        <input type="text" placeholder='john@29'/>
                        <label htmlFor="">Broker Name</label>
                        <input type="text" placeholder='Tom Write'/>
                        </Col>
                        <Col>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='************'/>
                        <label htmlFor="">Choose Server</label>
                        <div className="selectContainer">
                            <span className='arrow'><BsChevronDown/></span>
                        <select name="" id="">
                            <option value="">Europe</option>
                        </select>
                        </div>
                        </Col>

                    </Row>

                  </Col>
                </Row>
                        <button className='mainBtn mt-4'>Save Details</button>
            </Container>
            </form>
        </div>
    </div>
  )
}
