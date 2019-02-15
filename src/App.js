import React from 'react';
import './App.css';
import Music from './Music';

const members = [
  {
      name: "Joel",
      nickname: "Roffe",
      imageUrl: 'images/members/trollet.png'
  },
  {
      name: "Max",
      nickname: "Markan",
      imageUrl: 'images/members/trollet.png'
  },
  {
      name: "Axel",
      nickname: "Arkkman",
      imageUrl: 'images/members/trollet.png'
  },
  {
      name: "Anton",
      nickname: "Schmidtdogg",
      imageUrl: 'images/members/trollet.png'
  },
  {
      name: "Timo",
      nickname: "Kribu",
      imageUrl: 'images/members/trollet.png'
  }
];

class App extends React.Component  {
    state = {
    members: members
  };
  
  render(){
    console.log(this.state.members)
    return (
      <div className="App">
      <GBHeader />
        <header className="App-header">
          <img src={'images/members/gbb.png'} className="App-logo" alt="logo" />
          <Members {...this.state.members}/>
          <Music />
        </header>
      </div>
    );
  }
  }

function GBHeader(props) {
  return <h1 className="Site-header">Galbatron</h1>;
}

function Members(props) {
  console.log(props);
  return(
    <div className="container members">
    <h1>Members:</h1>
    <div className="row">
    {members.map(member => (
      
      <div className="col">
      <img id="test" src={'images/members/trollet.png'} className="ProfilePic" alt="logo" onClick={(e) => { 
        e.target.classList.contains('App-logo') 
        ? e.target.classList.remove('App-logo') 
        : e.target.classList.add('App-logo')}}/>
      <p>Name: {member.name}</p>
      </div>
    ))}
    </div>
    </div>
  )
}

export default App;
