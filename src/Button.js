import React, {Component} from 'react';

class Btn extends Component{
    handleClick(e){
        this.props.handleLamp(e, this.props.position);
    }
    render(){
        return (
            <button className={`btn ${this.props.className}`} onClick={(e) => this.handleClick(e)}>{this.props.title}</button>
        );
    }
}


export default Btn;


