import React, { Component } from 'react';
import './App.css'
import 'material-design-lite/material.min.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Search from './components/Search'
import Result from './components/Result'
import $ from 'jquery'

import {lightBlue100, lightBlue500, lightBlue700} from 'material-ui/styles/colors';
 
const paperStyle = {
  minHeight: 600,
  width: 460,
  margin: '20px auto',
  textAlign: 'center',
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    primary3Color: lightBlue100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});

class App extends Component {
  constructor(){
    super()
    this.state={
      weatherInfo:[]
    }
  }

  handleInput(city){
    $.ajax({
      url:`https://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=65c84f3654ea728597effe6c22e6de45`,
      dataType:'jsonp'  
    }).done(data =>{
      this.setState({
        weatherInfo:data.results
      })
    })
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="曾瑞略的样例工程"
              showMenuIconButton={false}
            />
            <Paper style={paperStyle} zDepth={5}>
              <Search handleInput={this.handleInput.bind(this)}/>
              <Result weatherInfo={this.state.weatherInfo}/>
            </Paper>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
