import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { useTable } from 'react-table';

const HomePage = () => {
  const [data, setData] = useState([
    { id: 1, buildingType: 'Residential', constructionTime: '6 months', constructionCost: '$100,000' },
    { id: 2, buildingType: 'Commercial', constructionTime: '12 months', constructionCost: '$500,000' },
    { id: 3, buildingType: 'Industrial', constructionTime: '18 months', constructionCost: '$1,000,000' },
  ]);

  const columns = React.useMemo(
    () => [
      { Header: 'Building Type', accessor: 'buildingType' },
      { Header: 'Construction Time', accessor: 'constructionTime' },
      { Header: 'Construction Cost', accessor: 'constructionCost' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button
            onClick={() => setData(data.filter(item => item.id !== row.original.id))}
            className={styles.deleteButton}
          >
            X
          </button>
        ),
      },
    ],
    [data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  const handleAdd = () => {
    // Logic to add a new building
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <button onClick={handleAdd} className={styles.addButton}>Add</button>
        <h2 className={styles.headerTitle}>Buildings</h2>
      </div>
      <div className={styles.tableContainer}>
        <table {...getTableProps()} className={styles.dataTable}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className={styles.tableHeader}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className={styles.tableCell}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;