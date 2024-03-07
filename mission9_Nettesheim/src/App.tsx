import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';


function Welcome() {
  return (
    <div>
      <h1>WELCOME TO THE MADNESS OF MARCH</h1>
      <h4>This is a website introducing you to all the teams for the College Basetball tournament this march</h4>
  </div>
  )
}

interface TeamInfo {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}


class Team extends React.Component<TeamInfo> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h2>{oneTeam.name}</h2>
        <h3>City: {oneTeam.city}, State: {oneTeam.state}</h3>
        <h3>{oneTeam.abbrev}</h3>


      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {data.teams.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome/>
      <TeamList />

    </div>
  );
}

export default App;
