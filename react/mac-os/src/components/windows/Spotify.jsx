import React from 'react'
import MacWindow from './MacWindow';
import './spotify.scss';


const Spotify = () => {
  return (
    <div>
      <MacWindow width='30vw' height='70vh'>
         <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius : "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EptmQMUL9yxPF?utm_source=generator" width="100%" height="352" frameborder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         </div>
      </MacWindow>
    </div>
  )
}

export default Spotify
