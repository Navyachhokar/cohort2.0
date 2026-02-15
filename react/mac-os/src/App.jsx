import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav';
import MackWindow from './components/windows/MacWindow';
import Spotify from './components/windows/Spotify';
import Resume from './components/windows/Resume';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Cli from './components/windows/Cli';


function App() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })

  const handleWindowStateChange = (updater) => {
    const newState = typeof updater === 'function' ? updater(windowsState) : updater;
    
    for (const key in newState) {
      if (newState[key] && !windowsState[key]) {
        setActiveWindow(key);
        break;
      }
    }
    setWindowsState(newState);
  };

  return (
     <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={handleWindowStateChange} />
      { windowsState.github && <Github windowName="github" setWindowsState={handleWindowStateChange} activeWindow={activeWindow}
    setActiveWindow={setActiveWindow}/>}
      { windowsState.note && <Note windowName="note" setWindowsState={handleWindowStateChange} activeWindow={activeWindow}
    setActiveWindow={setActiveWindow}/>}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={handleWindowStateChange} activeWindow={activeWindow}
    setActiveWindow={setActiveWindow}/>}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={handleWindowStateChange} activeWindow={activeWindow}
    setActiveWindow={setActiveWindow}/>}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={handleWindowStateChange} activeWindow={activeWindow}
    setActiveWindow={setActiveWindow}/>}
    </main>
  )
}

export default App