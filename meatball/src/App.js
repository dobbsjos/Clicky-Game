import React, { Component } from "react";
import Scoreboard from "./components/score";
import Card from "./components/Card";
import Pic from "./cards.json";

// each click scrables the pics
function scramble(array) {
  for (let i = array.length - 1; i > 0; i--) {

    const pic= Math.floor(Math.random() * (i + 1));

    [array[i], array[pic]] = [array[pic], array[i]];
  }
  console.log(array);
  return array;
}

class App extends Component {
  state = {
    Pic,
    score: 0,
    clickedPic: []
  };

  clickedImage = id => {
    // set state of array to be updated with clicks
    let clickedPic = this.state.clickedPic;
    let score = this.state.score;

    
    if (clickedPic.indexOf(id) === -1) {
      // put id into array
      clickedPic.push(id);
      console.log(clickedPic);
       //score function
      this.handleIncrement();
      //for each click - scrable
      this.doSort();
    } else if (score === 12) {
// if player reaches score of 12
      this.setState({
        score: 0,
        clickedPic: []
      });
    } else {
    // player is a loser
      this.setState({
        score: 0,
        clickedPic: []
      });
    }
  };

// score ups per correct click
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // re sort the pics
  doSort = () => {
    this.setState({ Pic: scramble(Pic) });
  };



  render() {
    return (
      <div className="container">
      
        <Scoreboard
          score={this.state.score}/>
        <div className="row">
          {this.state.Pic.map(Pic => (
            <Card
              // key={Pic.id}
              id={Pic.id}
              image={Pic.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
