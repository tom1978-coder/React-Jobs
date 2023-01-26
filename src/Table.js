import React, { Component } from 'react'


const TableHeader = () => {
    return (
        <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}


const TableBody = () => {
    return (
      <tbody />
    )
  }


class Table extends Component {
  render() {

    // comment allowed???
    //const { characterData } = this.props              // es6
    const characterData = this.props.characterData      // es5

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}




export default Table