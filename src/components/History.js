import React from "react";
import MaterialTable from 'material-table';
import "body-parser";
import "react-router-dom";
import 'react-day-picker/lib/style.css';
import DrawChart from "./DrawChart";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import "@material-ui/core"



// variable to hold columns of the historical data
const columns = [
  { title: "Symbol", field: "symbol", sorting: false, filtering: false },
  { title: "Name", field: "name", sorting: false, filtering: false },
  { title: "Open", field: "open", type: "currency", filtering: false },
  { title: "High", field: "high", type: "currency", filtering: false },
  { title: "Low", field: "low", type: "currency", filtering: false },
  { title: "Close", field: "close", type: "currency", filtering: false },
  { title: "Volumes", field: "volumes", type: "currency", filtering: false },
  { title: "Date", field: "timestamp", type: "date" }

];
// variable to hold date formating options
var options = { year: 'numeric', month: 'long', day: 'numeric' };

// historical date component
function History() {

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const sym = params.get('symbol');

  const [rowData, setRowData] = React.useState([{ "close": 0, "date": "", "name": "" }]);
  const [selectedDate, setSelectedDate] = React.useState(new Date('11/05/2019'));


  React.useEffect(() => {

    fetchItems();

  }, []);

  // Fetching data from API
  const fetchItems = async () => {
    const url = 'http://131.181.190.87:3001/history?symbol=' + sym
    await fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        setRowData(data);
      }).catch(function (err) {
        console.log(err)
      });
  };
  // Handling error if respons != 200
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  // Formating date in rowData and filtering by selectedDate
  function getData() {

    rowData.forEach(e => {
      var date = new Date(e.timestamp)
      e.timestamp = date;
    })
    return rowData.filter((e) => e.timestamp >= selectedDate);
  }
  // Updating selectedDate, and retriving new filtered date
  const handleDateChange = (date) => {
    setSelectedDate(date)
    getData()

  };

  return (

    <div className="container" id="history">
      <div className="jumbotron" >
        <h4>stock prices for <span className="value">{rowData[0].name} </span>from {selectedDate.toLocaleDateString('en-GB', options)}</h4>

        <MaterialTable
          title=''
          columns={columns}
          data={getData()}
          options={{
            pageSize: 5,
            search: false,
            filtering: false,


          }}

        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Search from"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className="jumbotron">
        <h4>closing prices for <span className="value">{rowData[0].name}</span> from {selectedDate.toLocaleDateString('en-GB', options)} </h4>
        <DrawChart data={getData()} x="timestamp" y="close" />
      </div>
    </div>
  )

}

export default History;