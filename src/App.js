import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Nav from "./components/Nav";
import Checkboxed from "./components/Checkboxed";
import Snackbars from "./components/Snackbars";
import Steppers from "./components/Steppers";
import Text from "./components/Text";


function App() {
  return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Nav>
            <Toolbar>
              <TypoGraphy variant="title"
                          color="inherit"
              >
                Cool Stuff
              </TypoGraphy>
            </Toolbar>
          </Nav>
        </AppBar>

        <Checkboxed/>
        <Snackbars/>
        <Steppers/>
        <Text/>


      </div>
  );
}


export default App;
