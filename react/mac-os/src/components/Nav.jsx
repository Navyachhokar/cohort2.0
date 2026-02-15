import React, { useState } from 'react'
import "./nav.scss";
import DateTime from './DateTime';

const Nav = () => {
    const[showmenu, setShowMenu] = useState(false);

    const handleAppleClick = () => {
        if(window.innerWidth <= 400){
            setShowMenu(prev => !prev);
        }
    };
  return (
    <div className="nav">
        <div className="left">
            <div className="apple-icon" onClick={handleAppleClick}>
                <img src="./navbar-icons/apple.svg" alt="" />
            </div>
            <div className="nav-item desktop-only">
                <p>Navya</p>
            </div>
            <div className="nav-item desktop-only">
                <p>File</p>
            </div>
            <div className="nav-item desktop-only">
                <p>Window</p>
            </div>
            <div className="nav-item desktop-only">
                <p>Terminal</p>
            </div>
        </div>
      <div className="right">
        <div className="nav-icon">
            <img src="/navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
            <DateTime/>
        </div>
      </div>
      {showmenu && (
        <div className="mobile-menu">
            <p>Navya</p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
      )}
    </div>
  );
};

export default Nav
