import React, { Component } from 'react';
import './App.css';
import Music from './Music';

function App({membersData})  {
    return (
      <div className="App">
      <Hello />
        <header className="App-header">
          <img src={'images/members/trollet.png'} className="App-logo" alt="logo" />
          
            Members:
          <Members {...membersData}/>
          <Music />
        </header>
      </div>
    );
}

function Hello(props) {
  return <h1 className="Site-header">Galbatron</h1>;
}

function Members({members}) {
  console.log(members)
  return(
    <div className="container members">
    <div className="row">
    {members.map(member => (
      <div className="col">
      <img src={'images/members/trollet.png'} className="ProfilePic"/>
      <p>{member.name}</p>
      </div>
    ))}
    </div>
    </div>
  )
}

export default App;
