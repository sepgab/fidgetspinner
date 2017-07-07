import React from "react";

export class Table extends React.Component {

  render() {
    if (this.props.display === true) {
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
            <tbody>
              {rowComponents}
            </tbody>
          </table>
          <a key={'previous'} href={this.props.prev}><img className="arrowleft" src={require("./leftarrow.png")} alt=""/></a>
          <a key={'next'} href={this.props.next}><img className="arrowright" src={require("./rightarrow.png")} alt=""/></a>
        </div>
      );
    } else {
      return null
    }
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
          return <td key={item[colData.key]} className="container">
            <img key={'avatar ' + item[colData.key]} className="avatarImg" src={item.avatar} alt="" />
            {item[colData.key]}
          </td>
        }
        return <td key={item[colData.key]}>{item[colData.key]}</td>;
      });
      return <tr key={item.nickName}>{cells}</tr>;
    });
  }
}

export default Table;
