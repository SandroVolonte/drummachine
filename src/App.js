import React from 'react';
import logo from './logo.svg';
import './App.css';
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

  }

  render() {
    return (
        <div className={"main"}>
          <div className={"row"}>
            <div className={"col-8 console"}>
              <div className={"headerwrapper"}>Header</div>
              <div className={"row"}>
                <div className={"col-7 drumpad"}>
                  placeholder
                </div>
                <div className={"col-5 config"}>
                  placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Drummachine;
