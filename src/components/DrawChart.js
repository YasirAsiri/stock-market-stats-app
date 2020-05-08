import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


function DrawChart(props){


    console.log("Props.Data", props.data)

    let chartData = [];
    function getChartData(){
    props.data.forEach(e => {
      var date = new Date(e.timestamp).toLocaleDateString();
      chartData.push({close: e.close, timestamp: date})
    })
    return chartData;
  }

    return (
        <LineChart
        width={1000}
        height={300}
        scalToFit={true}
        data={getChartData()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey= {props.x}  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line  dataKey={props.y}  />
      </LineChart>
    );

}

export default DrawChart;