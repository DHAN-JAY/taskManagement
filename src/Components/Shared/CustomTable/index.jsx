import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

/**
 * Used to show a table with desired columns and data.
 * It also accept the column react component to show a component instead of data.
 @returns {*}
 @typedef Component(object) This is used to show a React component in different columns
 @typedef ColumnArray(array) This is the array of objects to show a column and its label
 @typedef Data(array) Data is a collection of object to show different datas in the columns
 @param {{
  columnComponents Component
  columns ColumnArray,
  data Data
}} props
*/

const CustomTable = ({
    columns,
    columnComponents,
    data
}) => {

    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns && columns.length &&
                columns.map((column, index) => {

                  return (
                    <TableCell key={index} size={column.size}>
                      {column.label}
                    </TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, ind) => {
              return (
                <TableRow key={ind}>
                  {columns && columns.length &&
                    columns.map((column, index) => {
                      const Component = columnComponents && columnComponents[column.dataField]
                      return (
                        <TableCell key={index} size={column.size}>
                          {Component ?
                            <Component column={column} data={row} />
                            :
                            row[column.dataField]
                          }
                        </TableCell>
                      )
                    })
                  }
                  </TableRow>
                )
              }
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CustomTable