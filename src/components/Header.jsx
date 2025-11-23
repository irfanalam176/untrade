import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { HiBars2 } from "react-icons/hi2";

import { Dropdown } from 'react-bootstrap'
export default function Header({props}) {
  function showSideBar(){
    document.querySelector(".sideBar").classList.add("showSideBar")
  }
  return (
    <div>
           <div className="header">
           <button className='toggleSideBar' onClick={showSideBar}><HiBars2/></button> 
          <h1>{props}</h1>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
              <BsThreeDots/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  )
}
