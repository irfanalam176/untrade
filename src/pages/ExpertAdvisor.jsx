import React from "react";
import Header from "../components/Header";
import { Container,Row,Col } from "react-bootstrap";
import { TfiDownload } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function ExpertAdvisor() {
  return (
    <div>
      <Header props="Manage Expert Advisors" />
      <div className="tabContent commonContent mt-4">
        <Container>
        <div className="adivisorHeader">
          <div className="d-flex align-items-center gap-2">
            <div className="userAbr">TM</div>
            <h6>Tom Moody</h6>
          </div>

          <div className="switchOption">
            <label htmlFor="switch5">Connected</label>
            <input type="checkbox" className="switchCheckBox" id="switch5" />
            <label htmlFor="switch5" className="customSwitch ms-3"></label>
          </div>
        </div>

        {/* advisor table */}
        <div className="expertAdivisorTable">
            <Row>
                <Col lg={3} className="my-lg-auto">
                    <div className="tableCol">
                        <div>
                        <h6>Expert Advisor File</h6>
                        <span>Uploaded on 23 May, 2023</span>
                        </div>
                        <a href="/" className="downloadBtn"><TfiDownload/></a>
                    </div>
                </Col>
                <Col lg={3} className="my-lg-auto">
                    <div className="tableCol">
                        <div>
                        <h6>Preset File</h6>
                        <span>Uploaded on 23 May, 2023</span>
                        </div>
                        <a href="/" className="downloadBtn"><TfiDownload/></a>
                    </div>
                </Col>
                <Col lg={2} className="my-lg-auto">
                    <div className="tableCol">
                        <div>
                        <div className="d-flex align-items-center gap-1">
                        <h6>#233AS21 </h6><span style={{color:"#0781FE",fontSize:"1em",marginTop:"-7px"}}><MdContentCopy/></span>
                        </div>
                        <span>Accound ID</span>
                        
                        </div>
                    </div>
                </Col>
                <Col lg={2} className="my-lg-auto">
                    <div className="tableCol">
                        <div>
                        <div className="d-flex align-items-center gap-1">
                        <span style={{color:"#ffffff",fontSize:"1em"}}>$</span>
                        <div>
                        <h6>EURUSD, GBRUSD </h6>
                        <span>Symbols</span>
                        </div>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className="my-lg-auto">
                    <div className="tableCol">
                        <div>
                        <div className="d-flex  gap-1">
                        <span style={{color:"#ffffff",fontSize:"1em"}}><BsClockHistory/></span> 
                        <div>
                        <h6>1Hr</h6>
                        <span>Timeframe</span>
                        </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

        </Container>
      </div>
        <Link to="/expert-advisor/add-expert-advisor" className="mainBtn darkBtn mt-5 d-inline-block">+ Add Expert Advisor</Link>
    </div>
  );
}
