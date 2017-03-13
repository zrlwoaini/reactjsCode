import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 460,
    height: 460,
    overflowY: 'auto',
  },
};

class Result extends Component {
    defaultProps = {
        weatherInfo:null
    }
    render(){
        let weatherDatas=null;
        if(this.props.weatherInfo && this.props.weatherInfo.length>0){
            weatherDatas=this.props.weatherInfo[0].weather_data;
        }
        return (
            <div>
                    <GridList
                        cols={2}
                        cellHeight={225}
                        padding={5}
                        style={styles.gridList}
                    >
                        {
                            weatherDatas?weatherDatas.map((item,index)=>{
                                return(
                                <GridTile 
                                  key={item.date}
                                  title={item.temperature+":"+item.weather}
                                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                  actionPosition="right"
                                  titlePosition="bottom"
                                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                  cols={1}
                                  rows={1}
                                  subtitle={item.wind}
                                >
                                {
                                    index==0?
                                    <img src="http://image76.360doc.com/DownloadImg/2014/07/2205/43616106_1.jpg" />:null
                                }
                                {
                                    index==1?<img src="http://img5.pcpop.com/ArticleImages/picshow/900x675/20130705/2013070518540289206.jpg" />:null
                                }
                                {
                                    index==2?<img src="http://img05.tooopen.com/images/20150829/tooopen_sy_140536622127.jpg" />:null
                                }
                                {
                                    index==3?<img src="http://img.juimg.com/tuku/yulantu/140602/330882-140602121Q150.jpg" />:null
                                }
                                </GridTile>
                                )
                            }):null
                        }
                    </GridList>
            </div>
        );
    }
};

export default Result;