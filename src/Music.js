import React, { Component } from 'react';
import './App.css';

class Music extends React.Component {
    
      state = { play: false };
      url = "https://ia600700.us.archive.org/27/items/TrololoRingtone/Trololo.mp3";
      audio = new Audio(this.url);
    
  
    togglePlay = () => {
      this.setState({ play: !this.state.play}, () =>{
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
            <h1>Music?</h1>
          <button className="btn-success" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default Music;