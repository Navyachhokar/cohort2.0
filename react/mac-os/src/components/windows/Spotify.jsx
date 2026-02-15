import React from 'react'
import MacWindow from './MacWindow';
import './spotify.scss';


const Spotify = ({windowName, setWindowsState, activeWindow,setActiveWindow}) => {
  return (
    <div>
      <MacWindow width='50vw' height='70vh' windowName={windowName} setWindowsState={setWindowsState} activeWindow={activeWindow}
  setActiveWindow={setActiveWindow}>
         <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius : "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EptmQMUL9yxPF?utm_source=generator" width="100%" height="352" frameborder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         </div>
      </MacWindow>
    </div>
  )
}

export default Spotify
