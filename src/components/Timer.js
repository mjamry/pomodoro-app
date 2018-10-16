import React from "react";

import Clock from "./Clock.js";

const ClockController = props => {
  return (
    <div className="container">
      <div className="row">
        <Clock
          timerIntervalInMinutes={props.timerIntervalInMinutes}
          onFinished={props.onFinished}
        />
      </div>
      <div className="row">
        <div className="col justify-content-end text-right">
          <button className="btn btn-primary">Pause</button>
        </div>
        <div className="col justify-content-start">
          <button className="btn btn-primary">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default ClockController;
