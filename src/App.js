import React, { Component } from "react";
import "./App.css";
import BarChart from "./Charts/BarChart";
import WordMap from "./Charts/WorldMap";
import worldData from "./data/world";
import { range, scaleThreshold, geoCentroid } from "d3";

//Constrain our map to only
// North and South America
// for simplicity’s sake
const appData = worldData.features.filter(d => geoCentroid(d)[0] < -20);

//     Generate some fake data with
// relatively interesting patterns—
// the “launch day” of each country
// is its array position
appData.forEach((d, i) => {
  const offset = Math.random();
  d.launchday = i;
  d.data = range(30).map((p, q) => (q < 1 ? 0 : Math.random() * 2 + offset));
});

class App extends Component {
  state = { data: [5, 10, 13, 1, 23, 42], size: [500, 500] };
  render() {
  
    const colorScale = scaleThreshold()
      .domain([5, 10, 20, 30, 50])
      .range(["#75739F", "#5EAFC6", "#41A368", "#93C464"]);
    return (
      <>
        <div>
          <h2>Dashboard</h2>
        </div>
        <div>
          <BarChart data={this.state.data} size={this.state.size} />
        </div>
        <div>
          <WordMap colorScale={colorScale} data={appData} size={[500, 400]} />
        </div>
      </>
    );
  }
}

export default App;
