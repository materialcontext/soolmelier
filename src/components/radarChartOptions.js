import * as d3 from 'd3';

let margin = { top: 50, right: 50, bottom: 50, left: 50 },
  width = Math.min(340, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(
    width,
    window.innerHeight - margin.top - margin.bottom - 20
  );

let color = d3.scale.ordinal().range(["#ff4500", "#34343e", "#F4C430"]);

let radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 1,
  levels: 5,
  roundStrokes: true,
  color: color,
};

export default radarChartOptions;