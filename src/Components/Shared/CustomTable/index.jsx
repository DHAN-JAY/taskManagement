import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const CustomTable = ({
    width,
    height,
    columns,
    columnComponents,
    data,
    ...rest
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
                            <Component />
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