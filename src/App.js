import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar.js';
import {Outlet} from 'react-router';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      // order determines order in the Navbar
      pages: ["About", "Projects", "Contact"],
      homePage: "About",
    }
  }

  render(){ return (
    <>
      <header>
        <NavBar pages={this.state.pages}  homePage={this.state.homePage}/>
      </header>

      {/* Where all children render for app*/}
      <Outlet/>

      <footer>
        {/* Fill under this if wanted */}
      </footer>
    </>
  );
  }

  componentDidMount(){

  }

}

export default App;
