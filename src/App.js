import React, { Component } from 'react';
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Search from './components/Search'
import Result from './components/Result'
import $ from 'jquery'
import {GridList, GridTile} from 'material-ui/GridList';

import {lightBlue100, lightBlue500, lightBlue700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    primary3Color: lightBlue100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  appBar: {
    height: 50,
  },
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

  getListContent(){
    var rows = [];
    for(var i=0;i<50;i++){
      rows.push(<GridTile cols={1}>
                    <Paper zDepth={3}>
                      <Result weatherInfo={this.state.weatherInfo}/>
                    </Paper>
                </GridTile>)
    }
    return rows;
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="曾瑞略的样例工程"
              showMenuIconButton={false}
            />
            <Search handleInput={this.handleInput.bind(this)}/>
            <GridList
                cols={1}
                cellHeight={350}
                style={{overflowY:'auto',margin:'0px'}}
                >
                {this.getListContent()}
            </GridList>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
