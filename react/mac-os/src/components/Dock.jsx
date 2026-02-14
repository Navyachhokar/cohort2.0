import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github">
            <img src="/dock-icons/github.svg" alt="" />
        </div>
        <div className="icon note">
            <img src="/dock-icons/note.svg" alt="" />
        </div>
        <div className="icon pdf">
            <img src="/dock-icons/pdf.svg" alt="" />
        </div>
        <div className="icon calendar">
            <img src="/dock-icons/calendar.svg" alt="" />
        </div>
        <div className="icon spotify">
            <img src="/dock-icons/spotify.svg" alt="" />
        </div>
        <div className="icon mail">
            <img src="/dock-icons/mail.svg" alt="" />
        </div>
        <div className="icon cli">
            <img src="/dock-icons/cli.svg" alt="" />
        </div>
        <div className="icon link">
            <img src="/dock-icons/link.svg" alt="" />
        </div>
    </footer>
  )
}

export default Dock
