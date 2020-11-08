import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const CustomTable = ({
    width,
    height,
    columns,
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
                    <TableCell key={index}>
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
    
                      return (
                        <TableCell key={index}>
                          {row[column.dataField]}
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