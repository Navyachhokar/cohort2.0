import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav';
import MackWindow from './components/windows/MacWindow';
import Spotify from './components/windows/Spotify';
import Resume from './components/windows/Resume';
import Github from './components/windows/Github';
import Note from './components/windows/Note';


function App() {
  return (
    <main>
      <Nav></Nav>
      <Dock/>
      <Github/>
      <Note/>
      <Resume/>
      <Spotify/>
    </main>
  )
}

export default App