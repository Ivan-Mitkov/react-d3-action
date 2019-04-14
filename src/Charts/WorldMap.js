import React, { Component } from "react";
import "../App.css";
// import worlddata from "../data/world";
import { geoMercator, geoPath } from "d3";

export class WorldMap extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    // console.log(this.props)
    const projection = geoMercator()
      .scale(120)
      .translate([430, 250]);

    const pathgenerator = geoPath().projection(projection);

    const countries = this.props.data.map((d, i) => {
      return (
        <path
          key={"path" + i}
          d={pathgenerator(d)}
          style={{
            fill: this.props.colorScale(d.launchday),
            stroke: "black",
            strokeOpacity: 0.5
          }}
          className="countries"
        />
      );
    });
    return (
      <svg width={1000} height={500}>
        {countries}
      </svg>
    );
  }
}

export default WorldMap;
