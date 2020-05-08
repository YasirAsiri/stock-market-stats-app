import React from 'react';
import MaterialTable from 'material-table';
import { useHistory } from "react-router-dom";




function Stock() {

        React.useEffect(() => {
        fetchItems();
        prepData();
    },[]);

    const [rowData, setRowData] = React.useState([]);
    let history = useHistory();
    let chartData = [];



const fetchItems = async () => {
    const url = 'http://131.181.190.87:3001/all'
    await fetch(url)
    .then(res => res.json())
    .then(data => setRowData(data));
};

function prepData() {
    chartData= [...rowData];
    chartData.forEach( e => {
        e.open = e.open.toFixed(2);
        e.low = (Math.round("DDD" * 100) / 100).toFixed(2);
    })
}

    const lookup = {"Health Care" : "Health Care", "Industrials":"Industrials", 
    "Consumer Discretionary":"Consumer Discretionary", 
    "Information Technology":" Information Technology", "Consumer Staples":"Consumer Staples",
    "Utilities":"Utilities", "Financials":"Financials", "Real Estate":"Real Estate", 
    "Materials":"Materials", "Energy":"Energy", 
    "Telecommunication Services":"Telecommunication Services "}
    
    const columns = [
        { title: "Symbol", field: "symbol"},
        { title: "Name", field: "name"},
        { title: "Industry", field: "industry", lookup: lookup},
      ];


  return (
      <div className="container">
          <div className="jumbotron">
          <MaterialTable
                title="Stock Market"
                columns={columns}
                data={rowData}
                options={{
                filtering: true,
                pageSize:10,
                }}
                onRowClick={(event, row, togglePanel) => { history.push('/history?symbol=' + row.symbol) }}
            />
          </div>
      </div>
  );
}



export default Stock;
