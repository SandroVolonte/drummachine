import React from 'react';
import './App.css';
import soundQ from "./mp3converted/100_vocalize-the-groove.mp3";
import soundW from "./mp3converted/female-harmony.mp3"
import soundE from "./mp3converted/80s-Bdrum1.mp3"
import soundA from "./mp3converted/80s-COWBELL1.mp3"
import soundS from "./mp3converted/80s-CRASH1.mp3"
import soundD from "./mp3converted/80s-TOM1.mp3"
import soundZ from "./mp3converted/80s-TOM2.mp3"
import soundX from "./mp3converted/80s-TOM3.mp3"
import soundC from "./mp3converted/80s-TOM5.mp3"

const MUSICDISPLAYLIST = {
  "Q" : "Vocalized Groove",
  "W" : "Female Harmony",
  "E" : "80s Bdrum",
  "A" : "80s Cowbell1",
  "S" : "80s Crash1",
  "D" : "80s Tom1",
  "Z" : "80s Tom2",
  "X" : "80s Tom3",
  "C" : "80s Tom5"
}

/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
**/

// test comment

class Drummachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display : ""
    }

    this.clickMusic = this.clickMusic.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }
  clickMusic(event){
    this.setState({
      display : MUSICDISPLAYLIST[event.target.value]
    })
    document.getElementById(event.target.value).play();
  }

  handleKeyPressed(event) {
    let characterOfButton = (String.fromCharCode(event.charCode)).toUpperCase();
    if (characterOfButton in MUSICDISPLAYLIST) {
      this.setState({
        display: MUSICDISPLAYLIST[characterOfButton]
      })
      document.getElementById(characterOfButton).play();
    }
  }

  componentDidMount(){
    document.addEventListener("keypress", this.handleKeyPressed)
  }

  componentWillMount() {
    document.removeEventListener("keypress", this.handleKeyPressed)
  }

  render() {
    return (
        <div className={"main"} id={"drum-machine"}>
          <div className={"row"}>
            <div className={"col-8 console"}>
              <div className={"headerwrapper"}><h3>My drummachine</h3></div>
              <div className={"row"}>
                <div className={"col-8 drumpad"}>
                  <button className={"drum-pad r1 c1 btn"} id={"QB"} onClick={this.clickMusic} value={"Q"}><audio className={"clip"} id={"Q"} src={soundQ}/>Q</button>
                  <button className={"drum-pad r1 c2 btn"} id={"WB"} onClick={this.clickMusic} value={"W"}><audio className={"clip"} id={"W"} src={soundW}/>W</button>
                  <button className={"drum-pad r1 c3 btn"} id={"EB"} onClick={this.clickMusic} value={"E"}><audio className={"clip"} id={"E"} src={soundE}/>E</button>
                  <button className={"drum-pad r2 c1 btn"} id={"AB"} onClick={this.clickMusic} value={"A"}><audio className={"clip"} id={"A"} src={soundA}/>A</button>
                  <button className={"drum-pad r2 c2 btn"} id={"SB"} onClick={this.clickMusic} value={"S"}><audio className={"clip"} id={"S"} src={soundS}/>S</button>
                  <button className={"drum-pad r2 c3 btn"} id={"DB"} onClick={this.clickMusic} value={"D"}><audio className={"clip"} id={"D"} src={soundD}/>D</button>
                  <button className={"drum-pad r3 c1 btn"} id={"ZB"} onClick={this.clickMusic} value={"Z"}><audio className={"clip"} id={"Z"} src={soundZ}/>Z</button>
                  <button className={"drum-pad r3 c2 btn"} id={"XB"} onClick={this.clickMusic} value={"X"}><audio className={"clip"} id={"X"} src={soundX}/>X</button>
                  <button className={"drum-pad r3 c3 btn"} id={"CB"} onClick={this.clickMusic} value={"C"}><audio className={"clip"} id={"C"} src={soundC}/>C</button>
                </div>
                <div className={"col-6 display"} id={"display"}>{this.state.display}</div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Drummachine;
