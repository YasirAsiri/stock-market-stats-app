import React from "react";
import MaterialTable from 'material-table';
import "body-parser";
import "react-router-dom";
import 'react-day-picker/lib/style.css';


function History() {

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const sym = params.get('symbol');

  
  const [rowData, setRowData] = React.useState([]);

  React.useEffect(() => {
    fetchItems(sym);
},[]);

  const fetchItems = async (sym) => {
    const url = 'http://131.181.190.87:3001/history?symbol=' + sym
    await fetch(url)
    .then(res => res.json())
    .then(data => setRowData(data));
};


const columns = [
  { title: "Symbol", field: "symbol"},
  { title: "Name", field: "name"},
  { title: "Open", field: "open", type: "numeric"},
  { title: "High", field: "high", type: "numeric"},
  { title: "Low", field: "low", type: "numeric"},
  { title: "Close", field: "close", type: "numeric"},
  { title: "Volumes", field: "volumes", type: "numeric"},
  { title: "Date", field: "timestamp", type: "date"}

];

const tempData = rowData;
console.log(tempData);
  
  
  return (
    <div className="container">
    <div className="jumbotron">
    <MaterialTable
          title={ "Showing stocks for "}
          columns={columns}
          data={rowData}
          options={{
          filtering: true,
          pageSize:10,
          }}
      />
    </div>
</div>
  );
}

export default History;