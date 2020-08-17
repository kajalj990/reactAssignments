import React, { Component } from "react";

class TableClass extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((datas, index) => (
              <tr key={index}>
                <td>{datas.name}</td>
                <td>{datas.Job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableClass;
