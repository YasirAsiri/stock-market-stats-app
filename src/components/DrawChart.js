import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// variable to hold date formating options
var options = { year: 'numeric', month: 'long', day: 'numeric' };

function DrawChart(props) {

  // variable to hold data coming from props
  let chartData = [];
  // Pushing data to chartData variable with a formated date
  function getChartData() {
    props.data.forEach(e => {
      var date = new Date(e.timestamp).toLocaleDateString('en-GB', options)
      chartData.push({ close: e.close, timestamp: date })
    })
    return chartData;
  }

  return (
    <div className='chart' >
      <LineChart
        width={1000}
        height={450}
        scalToFit={true}
        // passing chartData reversed in order to display starting from the last record 
        data={getChartData().reverse()}
        margin={{
          top: 20, right: 50, left: 20, bottom: 110,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.x} dy={5} angle={-60} textAnchor="end" />

        <YAxis />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" />
        <Line dataKey={props.y} stroke="#9370DB" dot={false} />
      </LineChart>
    </div>
  );

}

export default DrawChart;