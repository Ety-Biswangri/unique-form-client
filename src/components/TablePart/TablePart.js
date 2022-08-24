import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './Columns';

const TablePart = () => {

    const [users, setUsers] = useState([]);
    console.log(users);

    useMemo(() => {
        fetch("http://localhost:5000/users", {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => setUsers(result))
    }, []);

    const columns = useMemo(() => COLUMNS, []);

    const tableInstance = useTable({
        columns: columns,
        data: users
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;



    return (
        <div class="overflow-x-autoc m-16">
            <table class="table w-full" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>
                                                {
                                                    cell.render('Cell')
                                                }
                                            </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablePart;