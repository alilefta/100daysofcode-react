import React, {Component} from 'react';


class Lamp extends Component{
    render(){
        return (
            <div className={`${this.props.title} lamp`}></div>
        )
    }
}


export default Lamp;


