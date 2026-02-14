import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav';
import MackWindow from './components/windows/MacWindow';
import Github from './components/windows/Github';
import Note from './components/windows/Note';


function App() {
  return (
    <main>
      <Nav></Nav>
      <Dock/>
      <Github/>
      <Note/>
    </main>
  )
}

export default App