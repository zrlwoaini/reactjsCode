import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Button from 'react-bootstrap/lib/Button'

const style = {
  margin: 12,
};

const styles = {
  root: {
    fontSize: 12,
    lineHeight: '12px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    margin: '0px',
    overflowY: 'auto',
  },
};

class Search extends Component {
    defaultProps = {
        handleInput:null
    }
    queryClick(){
        if(this.refs){
            this.props.handleInput(this.refs.city_name.getValue());
        }
    }
    render(){
        return (
            <div>
               <GridList
                cols={3}
                cellHeight={80}
                style={styles.gridList}
                >
                    <GridTile cols={2}>
                        <TextField
                            style={{paddingLeft:'20px'}}
                            fullWidth={true}
                            ref="city_name"
                            hintText="请输入城市名称"
                            floatingLabelText="城市名称，请使用中文"
                            onKeyPress={e=>e.key==='Enter'?this.props.handleInput(e.target.value):null}
                        />
                    </GridTile>
                    <GridTile cols={1}>
                        <RaisedButton label="查询" primary={true} style={style} onClick={this.queryClick.bind(this)} />
                    </GridTile>
                </GridList>
            </div>
        )
    }
};

export default Search;