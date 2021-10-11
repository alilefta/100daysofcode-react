import './App.css';
import React from 'react';
import Lamp from './Lamp';
import Btn from './Button';
class App extends React.Component{

    state = {
      runLeftLamp: false,
      runRightLamp: false
    }

    handleLamp(e, pos){
      console.log(pos)
      if(pos === 'left'){
        if(this.state.runLeftLamp === false){
          this.setState({
            runLeftLamp: true
          })
          e.target.parentNode.parentNode.querySelector(".left").classList.add("lampOn");
        }else{
            this.setState({
              runLeftLamp: false
            })
            e.target.parentNode.parentNode.querySelector(".left").classList.remove("lampOn");
        }

      }else{
        if(this.state.runRightLamp === false){
          this.setState({
            runRightLamp: true
          })
          e.target.parentNode.parentNode.querySelector(".right").classList.add("lampOn");
        }else{
            this.setState({
              runRightLamp: false
            })
            e.target.parentNode.parentNode.querySelector(".right").classList.remove("lampOn");
        }
      }
    }
    render(){
      return (
        <div className="App">
          <div className="room">
            <div className="upper-part">
              <Lamp title="left"/>
              <Lamp title="right"/>
            </div>
            <div className="lower-part">
              <Btn title={this.state.runLeftLamp ? "Off" : "On"} position="left" handleLamp={this.handleLamp.bind(this)}/>
              <Btn title={this.state.runRightLamp ? "Off" : "On"} position="right" handleLamp={this.handleLamp.bind(this)}/>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
