import React from 'react'
import { Rnd } from 'react-rnd';
import "./window.scss";

const MacWindow = ({children, width="30vw", height="50vh", windowName, setWindowsState,activeWindow, setActiveWindow}) => {
  return (
    <Rnd
    default={{
        width: width,
        height: height,
        x:300,
        y:100,
    }}
    handle=".nav"
    cancel=".no-drag"
    enableUserSelectHack={false}
    onMouseDown={() => setActiveWindow(windowName)}
    style={{
       zIndex: activeWindow === windowName ? 1000 : 1
    }}
    >
        <div className={`window ${activeWindow === windowName ? "active" : ""}`}>
            <div className="nav">
                <div className="dots">
                    <div onClick={() => setWindowsState(state => ({...state, [windowName]:false}))} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>navya - zsh</p></div>
            </div>
            <div className="main-content no-drag">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
