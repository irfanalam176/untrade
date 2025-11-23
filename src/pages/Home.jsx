import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import React from "react";
import { BiDisc } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { FaLongArrowAltUp } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import chart1 from "../assets/img/chart1.png";
import chart2 from "../assets/img/chart2.png";
import chart3 from "../assets/img/chart3.png";
import chart4 from "../assets/img/chart4.png";
import chart5 from "../assets/img/chart5.png";
import chart6 from "../assets/img/chart6.png";
import chart7 from "../assets/img/chart7.jpg";
import chart8 from "../assets/img/chart8.jpg";
import chart9 from "../assets/img/chart9.jpg";
import Header from "../components/Header";
import { BsTrophy } from 'react-icons/bs'
import { GiSettingsKnobs } from 'react-icons/gi'
export default function Home() {
  return (
    <div className="homePage">
      <div className="mainHeader"><Header/></div>
  
      <div className="header">
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          />
          <div>
            <h6>John Doe</h6>
            <span>admin</span>
          </div>
        </div>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title={<><BsTrophy/><span className="ms-2">Trade Copier</span></>}>
            <div className="tabContent">
              <div className="providers">
                <Row>
                  <Col lg={5}>
                    <div className="inputContainer">
                      <input type="text" placeholder="Strategy Name" />
                      <span
                        style={{ color: "#0781fe", fontSize: "1.2em" }}
                        className="inputBtn"
                      >
                        <BiDisc />
                      </span>
                    </div>
                  </Col>
                  <Col lg={6} className="ms-auto">
                    <div className="d-flex align-items-center justify-content-between ">
                      <div>
                        <span className="smallText">PROVIDER</span>
                        <h1 className="subHeading">Master Account</h1>
                      </div>
                      <div className="profileContainer">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                          className="m-0"
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                        />
                      </div>

                      <div
                        className="text-white d-flex align-items-center gap-1"
                        style={{ fontSize: "1.7em" }}
                      >
                        <span>
                          <a href="/" className="text-white"><TbTriangleSquareCircle /></a>
                        </span>
                        <span>
                          <a href="/" className="text-white"><AiTwotoneSetting /></a>
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="chartSection my-4">
                <Row>
                  <Col lg={9}>
                    <Row>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart1} alt="" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart2} alt="" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart3} alt="" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart4} alt="" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart5} alt="" />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chartCard">
                          <div>
                            <h6 className="smallText">Account Balance</h6>
                            <h1 className="subHeading">$234,532.90</h1>
                            <span>
                              <FaLongArrowAltUp /> 4.26% from last week
                            </span>
                          </div>
                          <img src={chart6} alt="" />
                        </div>
                      </Col>
                    </Row>

                    <div className="lineChartContainer d-block">
                      <div className="selectContainer">
                        <span><BsChevronDown/></span>
                      <select name="" id="">
                        <option value="">Last 30 Days</option>
                      </select>
                      </div>
                      
                      <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="home" title="Growth">
                      <img src={chart9} alt="" className="w-100" />
                        </Tab>
                        <Tab eventKey="profile" title="Drawdown">
                          Tab content for Profile
                        </Tab>
                        <Tab eventKey="contact" title="Trade History" >
                          Tab content for Contact
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="chartCard d-block">
                      <h6 className="smallText">Strike Rate</h6>
                      <img src={chart7} alt="" className="w-100" />
                      <div className="text-center">
                        <a href="/" className="mainBtn darkBtn">
                          View Trade History
                        </a>
                      </div>
                    </div>

                    <div className="chartCard d-block">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="smallText">Strike Rate</h6>
                        <div className="selectContainer">
                          <span>
                            <BsChevronDown />
                          </span>
                          <select name="" id="">
                            <option value="">week</option>
                          </select>
                        </div>
                      </div>
                      <img src={chart8} alt="" className="w-100" />
                      <div className="text-center">
                        <a href="/" className="mainBtn darkBtn">
                          View Trade History
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title={<><GiSettingsKnobs/><span className="ms-2">Expert Advisor</span></>}>
            Contents
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
