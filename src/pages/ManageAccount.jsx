import React from 'react'
import Header from '../components/Header'
import { BsPlus,BsChevronDown } from "react-icons/bs";
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ManageAccount() {
  return (
    <div>
        <Header props="Manage Accounts"/>
        <div className="accounts">
            <div className="userImg">
            <img src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" alt="" />
            </div>
            <Link to="/manage-account/add-account" className='addAccountBtn'><BsPlus/></Link>
        </div>
        <div className="tabContent ">
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
                        <button className='mainBtn mt-4'>Edit Details</button>
            </Container>
            </form>
        </div>
    </div>
  )
}
