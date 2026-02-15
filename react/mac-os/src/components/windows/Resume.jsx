import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss";
const Resume = ({windowName, setWindowsState, activeWindow, setActiveWindow}) => {
  return (
    <MacWindow windowName={windowName}  setWindowsState={setWindowsState} activeWindow={activeWindow} setActiveWindow={setActiveWindow}>
        <div className="resume-window">
            <embed src="/Resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume
