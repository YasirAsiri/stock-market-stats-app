import React, {useState, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "body-parser"

function Stock() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [rowData, setRowData] = useState([]);

    const fetchItems = async () => {
        const url = 'http://131.181.190.87:3001/all'
        await fetch(url)
        .then(res => res.json())
        .then(data => setRowData(data));
    };

    const columns = [
        { headerName: "Symbol", field: "symbol", resizable: true },
        { headerName: "Name", field: "name", resizable: true },
        { headerName: "Industry", field: "industry", resizable: true },
      ];

    return (
        <div className="container">
            <div className="jumbotron">
            <div className="ag-theme-balham"         style={{
          height: "400px",
          width: "800px"
        }}>
            <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={15}
        />

            </div>
            </div>
        </div>
    );
}

export default Stock;
