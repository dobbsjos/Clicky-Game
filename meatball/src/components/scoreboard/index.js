import React from "react";

function Scoreboard(props) {
  return (
    <header>
      <div className="row">
        <button type="button" className="col btn btn-primary">
          Your Score <span className="badge badge-light">{props.score}</span>
        </button>
      </div>
      <div className="row">
        <div className="col">
          <h6>A Memory Game! Don't click on a character twice</h6>
        </div>
      </div>
    </header>
  );
}

export default Scoreboard;