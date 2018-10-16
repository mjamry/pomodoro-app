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
        <div className="col bg-success justify-content-end">
          <button className="btn btn-primary">Pause</button>
        </div>
        <div className="col bg-info justify-content-start">
          <button className="btn btn-primary">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default ClockController;
