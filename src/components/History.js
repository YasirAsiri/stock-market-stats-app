import React from "react";
import MaterialTable from 'material-table';
import "body-parser";
import "react-router-dom";
import 'react-day-picker/lib/style.css';
import DrawChart from "./DrawChart";



const columns = [
  { title: "Symbol", field: "symbol", sorting: false, filtering: false },
  { title: "Name", field: "name", sorting: false, filtering: false},
  { title: "Open", field: "open", type: "currency", filtering: false},
  { title: "High", field: "high", type: "currency", filtering: false},
  { title: "Low", field: "low", type: "currency", filtering: false},
  { title: "Close", field: "close", type: "currency", filtering: false},
  { title: "Volumes", field: "volumes", type: "currency", filtering: false},
  { title: "Date", field: "timestamp", type: "date", customFilterAndSearch: (date, data) => data.timestamp >= date}

];

function History() {

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const sym = params.get('symbol');

  const [rowData, setRowData] = React.useState([{ "close": 0, "date": "", "name": "" }]);

  React.useEffect(() => {

    fetchItems(sym);

  }, []);


  const fetchItems = async (sym) => {
    const url = 'http://131.181.190.87:3001/history?symbol=' + sym
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setRowData(data);
        console.log("Server hit");
      });
      console.log(rowData)
  };

  function getData() {
    
    rowData.forEach( e => {
      var date = new Date(e.timestamp)
      e.timestamp = date;
    })
    return rowData;
  }



  return (
    <div className="container">
      <div className="jumbotron">
        <MaterialTable
          title={"Showing stocks for " + getData()[0].name}
          columns={columns}
          data={getData()}
          options={{
            pageSize: 5,
            search: false,
            filtering: true
          }}
          
        />
      </div>
      <div className="jumbotron">
        <h5>Showing closing values of {getData()[0].name} over the past 3 months </h5>
        <DrawChart data={getData()} x="timestamp" y="close" />
      </div>
    </div>
  );
}

export default History;