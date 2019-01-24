import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import articleCardStyle from "assets/jss/material-kit-react/views/articleCardStyle.js";
import { Link } from 'react-router-dom';
import { BarChart } from 'react-easy-chart';

class ArticleCard extends Component{    
    constructor(props) {
        super(props);
        this.state = {
          displayData : "Click on bar",
    };
};
    props = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        sentence: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

render(){
    const ratings = this.props.ratings;

    let data = [
        {"x": 1, "y": ratings['1'], color:"#B22222", d:"Fake News"},
        {"x": 2, "y": ratings['2'], color:"#e4784e",  d:"Distorts the story with a clear bias"},
        {"x": 3, "y": ratings['3'], color:"#FFD700", d:"Noticeable bias"},
        {"x": 4, "y": ratings['4'], color:"#9ACD32", d:"Fair but uneven representation"},
        {"x": 5, "y": ratings['5'], color:"#00cc66", d:"Fair and well balanced "}
    ];
    
    const {classes} = this.props;
    function Rating(props) {
        const total = ((data[0].y * 1) + (data[1].y * 2) + (data[2].y* 3) + data[3].y*4+ data[4].y*5);
        const people = (data[0].y + data[1].y + data[2].y + data[3].y + data[4].y);
        const average = total/people;
        
        if(0<average && average <= 1.5){
            return <span  style={{backgroundColor:'#da3e3e'}} className={classes.circle}><span className={classes.number}>Fake News</span></span>
        }
        else if(1.5 < average && average <= 2.5){
            return <span  style={{backgroundColor:'#e4784e'}} className={classes.circle}><span className={classes.number}>Clear bias</span></span>
        }
        else if(2.5 <average && average <= 3.5){
            return <span  style={{backgroundColor:'#FFD700'}} className={classes.circle}><span className={classes.number}>Noticeable Bias</span></span>
        }
        else if(3.5 <average && average < 4.5){
            return <span  style={{backgroundColor:'#aed75b'}} className={classes.circle}><span className={classes.number}>Fair but slight bias</span></span>
        }
        else if(average > 4.5){
            return <span  style={{backgroundColor:'#00cc66'}} className={classes.circle}><span className={classes.number}>Well Balanced</span></span>
        }
        else{
            return <span  style={{backgroundColor:'#DCDCDC'}} className={classes.circle}><span className={classes.number}>No ratings</span></span>
        }
    }
    
    return(//TODO: Implement Button, format + style the card
        <div className={classes.blogCard} >
        
        
        <div className={classes.description}>
        
        <h1 className={classes.h1}>{this.props.title}</h1>
        <h2 className={classes.h2}>
        {this.props.author} 
        <span className={classes.date}>{this.props.date}</span>
        <Rating style={{position:'relative', left:'20px' }}rating={this.props.ratings}></Rating>
        </h2>
        
       <span className={classes.readMore}>
            <Link className={classes.a} to={{
                pathname: `/article/${this.props.title}`,
                state: {
                    title: this.props.title,
                    text: this.props.text,
                    author: this.props.author,
                    date: this.props.date,
                    url: this.props.url
                }
            }}>
            Read More 
            </Link>
        </span>
        </div>
        <BarChart  height={90} width={100} data={data} 
        style={{position:'relative', top:'65px', left:'140px'}}
        clickHandler={(d) => this.setState({dataDisplay: ` ${d.y} voted for score: ${d.d}`})}/>
        <div style={{height:'20px', textAlign:'center', fontSize:'12px',position:'relative', right:'5px', top:'30px', width:'260px'}}>
            {this.state.dataDisplay}
        </div>
        </div>

    )
}

}

export default withStyles(articleCardStyle)(ArticleCard);
