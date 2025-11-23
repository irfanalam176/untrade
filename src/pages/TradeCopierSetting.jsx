import Header from "../components/Header";
import { Tab,Tabs,Container,Row,Col } from "react-bootstrap";
import React from "react";
import { BsCheck } from "react-icons/bs";
export default function TradeCopierSetting() {
  return (
    <div>
      <div >
      <Header props="Trade Copier Setting"/>
      <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Basic" >
        <div className="tabContent">
            <Container className="container-fluid">
                <Row className="g-5">
                  <Col lg={5}>
                    <label htmlFor="">Strategy Name</label>
                    <input type="text"  placeholder="Enter Strategy Name"/>
                    <label htmlFor="">Provider Account</label>
                    <input type="text"  placeholder="Enter Provider Account"/>
                    <label htmlFor="">Subscriber Accout</label>
                    <input type="text"  placeholder="Enter Subscriber Accout"/>
                    <Row>
                      <label htmlFor="">Symbol Maping</label>
                    <Col><input type="text" placeholder="From"/></Col>
                    <Col><input type="text" placeholder="To"/></Col>
                    </Row>
                  </Col>
                  <Col lg={5} className="ps-lg-4">
                    <div className="switchOption">
                      <label htmlFor="switch1">Copy pending orders?</label>
                      <input type="checkbox" className="switchCheckBox" id="switch1"/>
                      <label htmlFor="switch1" className="customSwitch"></label>
                    </div>
                    <div className="switchOption">
                      <label htmlFor="switch2">Copy Stop Loss?</label>
                      <input type="checkbox" className="switchCheckBox" id="switch2"/>
                      <label htmlFor="switch2" className="customSwitch"></label>
                    </div>
                    <div className="switchOption">
                      <label htmlFor="switch3">Copy Take Profit?</label>
                      <input type="checkbox" className="switchCheckBox" id="switch3"/>
                      <label htmlFor="switch3" className="customSwitch"></label>
                    </div>
                    <div className="switchOption">
                      <label htmlFor="switch4">Reverse Trade Signal?</label>
                      <input type="checkbox" className="switchCheckBox" id="switch4"/>
                      <label htmlFor="switch4" className="customSwitch"></label>
                    </div>
                    <div className="switchOption">
                      <label htmlFor="switch5">Hide Comments?</label>
                      <input type="checkbox" className="switchCheckBox" id="switch5"/>
                      <label htmlFor="switch5" className="customSwitch"></label>
                    </div>
                  </Col>
                </Row>
            </Container>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Risk Settings">
      <div className="tabContent riskSettings">
            <Container className="container-fluid">
                <Row className="g-5">
                  <Col lg={5}>
                  <div className="switchOption">
                      <label htmlFor="switch11">Max trade risk</label>
                      <input type="checkbox" className="switchCheckBox" id="switch11"/>
                      <label htmlFor="switch11" className="customSwitch"></label>
                    </div>

                    <label htmlFor="">Specify risk</label>
                    <input type="text"  placeholder="Enter Specify Risk"/>

                    <div className="switchOption">
                      <label htmlFor="switch12">Max trade Volume</label>
                      <input type="checkbox" className="switchCheckBox" id="switch12"/>
                      <label htmlFor="switch12" className="customSwitch"></label>
                    </div>

                    <label htmlFor="">specify volume</label>
                    <input type="text"  placeholder="Enter Specify Volume"/>

                    <label htmlFor="">specify 24hr time</label>
                    <input type="text"  placeholder="Enter Percentage (%)"/>
                  </Col>
                  <Col lg={5} className="ps-lg-4">
                    <div className="switchOption">
                      <label htmlFor="switch6">Equity Guardian</label>
                      <input type="checkbox" className="switchCheckBox" id="switch6"/>
                      <label htmlFor="switch6" className="customSwitch"></label>
                    </div>

                    <label htmlFor="">specify Percentage (%)</label>
                    <input type="text"  placeholder="Enter Percentage (%)"/>

                    <div className="switchOption">
                      <label htmlFor="switch7">Dropdown guardian</label>
                      <input type="checkbox" className="switchCheckBox" id="switch7"/>
                      <label htmlFor="switch7" className="customSwitch"></label>
                    </div>

                    <label htmlFor="">specify Percentage (%)</label>
                    <input type="text"  placeholder="Enter Percentage (%)"/>
                  </Col>
                </Row>
            </Container>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Filters" >
      <div className="tabContent ">
            <Container className="container-fluid">
                <Row className="g-5">
                  <Col lg={5}>
                  <div className="switchOption">
                      <label htmlFor="switch14">Symbol filter</label>
                      <input type="checkbox" className="switchCheckBox" id="switch14"/>
                      <label htmlFor="switch14" className="customSwitch"></label>
                  </div>
                  <div className="switchOption">
                      <label htmlFor="switch15">session filter</label>
                      <input type="checkbox" className="switchCheckBox" id="switch15"/>
                      <label htmlFor="switch15" className="customSwitch"></label>
                  </div>

                  <div className="checkOption">
                  <label htmlFor="check1">London</label>
                      <input type="checkbox" className="checkBox" id="check1"/>
                      <label htmlFor="check1" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check2">New york</label>
                      <input type="checkbox" className="checkBox" id="check2"/>
                      <label htmlFor="check2" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check3">Asia</label>
                      <input type="checkbox" className="checkBox" id="check3"/>
                      <label htmlFor="check3" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check4">Sydney</label>
                      <input type="checkbox" className="checkBox" id="check4"/>
                      <label htmlFor="check4" className="customCheck"><BsCheck/></label>
                  </div>


                  <div className="switchOption mt-5">
                      <label htmlFor="switch16">News filter</label>
                      <input type="checkbox" className="switchCheckBox" id="switch16"/>
                      <label htmlFor="switch16" className="customSwitch"></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check5">low impact</label>
                      <input type="checkbox" className="checkBox" id="check5"/>
                      <label htmlFor="check5" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check6">medium impact</label>
                      <input type="checkbox" className="checkBox" id="check6"/>
                      <label htmlFor="check6" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check7">high impact</label>
                      <input type="checkbox" className="checkBox" id="check7"/>
                      <label htmlFor="check7" className="customCheck"><BsCheck/></label>
                  </div>
                  </Col>
                  <Col lg={5} className="ps-lg-4">
                  <div className="switchOption">
                      <label htmlFor="switch17">equity curve filter</label>
                      <input type="checkbox" className="switchCheckBox" id="switch17"/>
                      <label htmlFor="switch17" className="customSwitch"></label>
                  </div>
                  <div className="switchOption mt-5">
                      <label htmlFor="switch18">filter by side</label>
                      <input type="checkbox" className="switchCheckBox" id="switch18"/>
                      <label htmlFor="switch18" className="customSwitch"></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check8">buy</label>
                      <input type="checkbox" className="checkBox" id="check8"/>
                      <label htmlFor="check8" className="customCheck"><BsCheck/></label>
                  </div>
                  <div className="checkOption">
                  <label htmlFor="check9">sell</label>
                      <input type="checkbox" className="checkBox" id="check9"/>
                      <label htmlFor="check9" className="customCheck"><BsCheck/></label>
                  </div>
                
                 
                  </Col>
                </Row>
            </Container>
        </div>
      </Tab>
      <Tab eventKey="telegram" title="Telegram Integration" >
              <div className="tabContent">
        <Container className="container-fluid">
          <Row>
            <Col lg={5}>
              <div className="switchOption mb-4">
                    <label htmlFor="switch19">publish trades to telegram</label>
                    <input type="checkbox" className="switchCheckBox" id="switch19"/>
                      <label htmlFor="switch19" className="customSwitch"></label>
                  </div>

                  <label htmlFor="">Token</label>
                  <input type="text" placeholder="Enter Token"/>
                  <label htmlFor="">Chat ID</label>
                  <input type="text" placeholder="Enter  ID"/>
            </Col>
          </Row>
        </Container>
              </div>
      </Tab>
    </Tabs>
      </div>
    </div>
  );
}
