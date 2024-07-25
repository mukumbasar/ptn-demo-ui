import React from 'react';
import { useTable } from 'react-table';
import styles from './DataGrid.module.css';
import { useHomeContext } from '../../contexts/HomeContext.jsx';

const DataGrid = ({ dataGridData }) => {
    const { handleDeleteBuilding } = useHomeContext();

    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Building Type', accessor: 'buildingType' },
            { Header: 'Construction Time', accessor: 'constructionTime' },
            { Header: 'Building Cost', accessor: 'buildingCost' },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <button
                        onClick={() => handleDeleteBuilding(row.original.id)}
                        className={styles.deleteButton}
                    >
                        X
                    </button>
                ),
            },
        ],
        [handleDeleteBuilding]
    );

    const data = Array.isArray(dataGridData) ? dataGridData : [];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()} className={styles.dataTable}>
            <thead>
                {headerGroups.length > 0 && headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                key={column.id}
                                className={styles.tableHeader}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.length > 0 ? (
                    rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        key={cell.column.id}
                                        className={styles.tableCell}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan={columns.length} className={styles.noData}>
                            No data available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataGrid;
