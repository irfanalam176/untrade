import React from 'react'
import { TbTriangleSquareCircle } from 'react-icons/tb'
import { LuUserCog } from 'react-icons/lu'
import { BiUser } from 'react-icons/bi'
import { BsTrophy } from 'react-icons/bs'
import { GiSettingsKnobs } from 'react-icons/gi'
import { TbNotes } from 'react-icons/tb'
import { LuSettings2 } from 'react-icons/lu'
import { FiLogOut } from 'react-icons/fi'
import { MdClose } from "react-icons/md";
import { NavLink,Link } from 'react-router-dom'
export default function SideBar() {
    function closeSideBar(){
        document.querySelector(".sideBar").classList.remove("showSideBar")
      }
  return (
    <div className='sideBar'>
        <div className="text-end">
            <button className='closeSideBarBtn' onClick={closeSideBar}><MdClose/></button>
        </div>
        <div className="logo">
            <p>U</p>
            <h5 >Untrade.ai</h5>
        </div>

            <div className="sideMenu">
                <NavLink to="/"><TbTriangleSquareCircle/><span>Home</span></NavLink>
                <NavLink to="/link2"><LuUserCog/><span>Configuration</span></NavLink>
                <NavLink to="/manage-account"><BiUser/><span>Accounts</span></NavLink>
                <NavLink to="/trade-cpier-setting"><LuSettings2/><span>Trade Copier</span></NavLink>
                <NavLink to="/expert-advisor"><BsTrophy/><span>Expert Advisor</span></NavLink>
                <NavLink to="/link3"><TbNotes/><span>Plans</span></NavLink>
                <NavLink to="/link4"><GiSettingsKnobs/><span>Settings</span></NavLink>
            </div>
            <Link to="/" className="logoutBtn"><FiLogOut/> <span>Log Out</span></Link>
    </div>
  )
}
