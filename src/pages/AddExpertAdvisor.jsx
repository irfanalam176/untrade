import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { BsUpload ,BsChevronDown} from "react-icons/bs";
import Header from '../components/Header'
export default function AddExpertAdvisor() {
  return (
    <div>
        <Header props="Add Expert Advisor"/>
        <div className="tabContent mt-4">
            <Container>
                <Row>
                    <Col lg={5}>
                        <label htmlFor="">Expert Advisor Name</label>
                        <input type="text" placeholder='John Doe'/>

                        <label htmlFor="">Upload Your Expert Advisor File</label>
                        <input type="file" className='fileInput' id='file1'/>
                        <label htmlFor="file1" className='uploadLabel'>Browse File (.doc, .pdf) <span><BsUpload/></span></label>

                        <label htmlFor="">Select Symbol</label>
                        <div className="selectContainer">
                            <span className='arrow'><BsChevronDown/></span>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                        </select>
                        </div>
                    </Col>
                    <Col lg={5}>
                    <label htmlFor="">Select Account</label>
                        <div className="selectContainer">
                            <span className='arrow'><BsChevronDown/></span>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                        </select>
                        </div>

                        <label htmlFor="">Upload Preset File</label>
                        <input type="file" className='fileInput' id='file2'/>
                        <label htmlFor="file2" className='uploadLabel'>Browse File (.doc, .pdf) <span><BsUpload/></span></label>

                        <label htmlFor="">Select Timeframe</label>
                        <div className="selectContainer">
                            <span className='arrow'><BsChevronDown/></span>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                        </select>
                        </div>
                    </Col>
                </Row>
                <a href="/" className="mainBtn mt-4 d-inline-block">Save Portfolio</a>
            </Container>
        </div>
    </div>
  )
}
