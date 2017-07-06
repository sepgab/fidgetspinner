import React from "react";

export class Table extends React.Component {

  render() {
    let headerComponents = this.generateHeaders(),
    rowComponents = this.generateRows();

    return (
      <div>
        <table className="tables">
          <thead>
            <tr>
            {headerComponents}
            </tr>
          </thead>
          <tbody>{rowComponents}</tbody>
        </table>
      </div>
    );
  }

  generateHeaders() {
    let cols = this.props.cols;  // [{key, label}]

    // generate our header (th) cell components
    return cols.map(function(colData) {
      return <th key={colData.key}>{colData.label}</th>;
    });
  }

  generateRows() {
    let cols = this.props.cols,  // [{key, label}]
      data = this.props.data;
    return data.map(function(item) {
      // handle the column data within each row
      let cells = cols.map(function(colData) {
        if (colData.key === 'nickName') {
          return <div className="container">
            <td key={item[colData.key]}>{item[colData.key]}</td>
            <img key={'avatar ' + item[colData.key]} className="avatarImg" src={item.avatar} alt="" />
          </div>
        }
        return <td key={item[colData.key]}>{item[colData.key]}</td>;
      });
      return <tr key={item.nickName}>{cells}</tr>;
    });
  }
}

export default Table;
