import { TableCellProps, TableProps } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { ReactNode } from 'react';

interface Props {
  column: Array<{
    id: string;
    label: ReactNode | string;
    format?: Function;
    props?: TableCellProps;
  }>;
  rows: Array<any>;
  tableProps?: TableProps;
}

function DataTable({ column, rows, tableProps }: Props) {
  return (
    <Table {...tableProps}>
      <TableHead>
        <TableRow>
          {column.map((item) => (
            <TableCell key={item.id} {...item.props}>
              {item.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => {
          return (
            <TableRow key={String(idx)}>
              {column.map((item, colIdx) => {
                const data = row[item.id];
                return (
                  <TableCell key={String(colIdx)} {...item.props}>
                    {item.format ? item.format(data) : data}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DataTable;
