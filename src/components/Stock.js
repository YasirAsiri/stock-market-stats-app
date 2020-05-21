import React from 'react';
import MaterialTable from 'material-table';
import { useHistory } from "react-router-dom";


// variable to hold table filtering values by Industry 
const lookup = {
    "Health Care": "Health Care", "Industrials": "Industrials",
    "Consumer Discretionary": "Consumer Discretionary",
    "Information Technology": " Information Technology", "Consumer Staples": "Consumer Staples",
    "Utilities": "Utilities", "Financials": "Financials", "Real Estate": "Real Estate",
    "Materials": "Materials", "Energy": "Energy",
    "Telecommunication Services": "Telecommunication Services "
}
// variable to hold columns of companies data
const columns = [
    { title: "Symbol", field: "symbol" },
    { title: "Name", field: "name" },
    { title: "Industry", field: "industry", lookup: lookup },
];

// stock page component
function Stock() {

    React.useEffect(() => {
        fetchItems();
    }, []);

    const [rowData, setRowData] = React.useState([]);
    let history = useHistory();

    // fetching data from API
    const fetchItems = async () => {
        const url = 'http://131.181.190.87:3001/all'
        await fetch(url)
            .then(handleErrors)
            .then(res => res.json())
            .then(data => setRowData(data))
            .catch(function (err) {
                console.log(err)
            });
    };
    // handeling error if response != 200
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <div><h4 className="stock listedcomp">Listed Companies</h4></div>
                <div>
                    <MaterialTable
                        title=""
                        columns={columns}
                        data={rowData}
                        options={{
                            filtering: true,
                            pageSize: 10,
                        }}
                        onRowClick={(event, row, togglePanel) => { history.push('/history?symbol=' + row.symbol) }}
                    />
                </div>
            </div>
        </div>
    );
}



export default Stock;
