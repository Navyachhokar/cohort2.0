import React from 'react'
import "./dock.scss"

const Dock = ({ setWindowsState }) => {
    return (
        <footer className='dock' >
            <div
                onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
                className="icon github">
                <img src="/dock-icons/github.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
                className="icon note">
                <img src="/dock-icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
                className="icon pdf">
                <img src="/dock-icons/pdf.svg" alt="" /></div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
                className="icon calendar">
                <img src="/dock-icons/calendar.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
                className="icon spotify">
                <img src="/dock-icons/spotify.svg" alt="" /></div>
            <div
                onClick={()=>{window.open("mailto:chhokarnavya@gmail.com","_blank")}}
                className="icon mail">
                <img src="/dock-icons/mail.svg" alt="" /></div>
            <div 
                onClick={()=>{window.open("https://www.linkedin.com/in/navya-2833432b9/","_blank")}}
                className="icon link">
                <img src="/dock-icons/link.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
                className="icon cli">
                <img src="/dock-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock