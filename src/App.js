import React from 'react';
import './styles/App.css';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  render(){ return (
    <>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload. edited
        </p>
        <Button>Test</Button>
      </header>
    </>
  );
  }

  componentDidMount(){

  }


}

export default App;
