import React from "react";
import ReactDOM from "react-dom";
import { dummy } from "./dummy";
import "./styles.css";
import jsonexport from "jsonexport";
import MovieList from "./MovieList";
const products = dummy.products;

function App() {
  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}

      <MovieList />
      {/* <button onClick={() => downloadCSVOrExcel()}>Download CSV</button>
      <button onClick={() => downloadCSVOrExcel("excel")}>
        Download Excel
      </button>
      <div>
        <h1>Order Details</h1>
        <h2>Start editing to see some magic happen!</h2>

        <table
          style={{ marginLeft: "5px" }}
          className="table-style table-width"
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Discount (%)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <>
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                    <td>{product.discountPercentage}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

const downloadCSVOrExcel = async (type = "csv") => {
  jsonexport(dummy.products, function (err, csv) {
    if (err) return console.error(err);
    let pom = document.createElement("a");
    const csvContent = csv; //here we load our csv data
    let apppType =
      type === "excel"
        ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;"
        : "text/csv;charset=utf-8;";
    let extension = type === "excel" ? "xlsx" : "csv";
    let blob = new Blob([csvContent], { type: apppType });
    let url = URL.createObjectURL(blob);
    pom.href = url;
    pom.setAttribute("download", `foo.${extension}`);
    pom.click();
    window.URL.revokeObjectURL(url);
  });
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
