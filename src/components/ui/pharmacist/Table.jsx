import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import 'tailwindcss/tailwind.css';
import { order } from '../../../assets/data/order';
import { Link } from 'react-router-dom';

export const OrderTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'Phone Number',
                accessor: 'phoneNumber', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Prescription Link',
                accessor: 'prescriptionLink',
                Cell: ({ value }) => (
                    <a
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Prescription
                    </a>
                ),
            },
            {
                Header: 'Created At',
                accessor: 'createdAt',
                Cell: ({ value }) => new Date(value).toLocaleString(),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex },
    } = useTable(
        { columns, data: order, initialState: { pageIndex: 0 } },
        useSortBy,
        usePagination
    );

    return (
        <div className="my-[9px]">
            <div {...getTableProps()} className="grid grid-cols-1 gap-1">
                {/* Header */}
                <div className="grid grid-cols-4 bg-primary text-white text-[14px] font-pmedium_500 py-3 px-6">
                    {headerGroups.map((headerGroup) => (
                        <React.Fragment key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <div key={column.id} {...column.getHeaderProps()} className="text-left">
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Body */}
                <div {...getTableBodyProps()} className="space-y-1">
                    {page.map((row,index) => {
                        prepareRow(row);
                        return (
                            <Link to={"/prescription/:id"}
                                key={row.id}
                                {...row.getRowProps()}
                                className={`grid grid-cols-4 border-[1px]  ${(index + 1) % 2 === 0 ? "bg-[#F2F6FF]" : "bg-white" } border-[#DFE7F2]    py-3 px-6`}
                            >
                                {row.cells.map((cell) => (
                                    <div key={cell.column.id} {...cell.getCellProps()} className=" text-[14px] font-pregular_400 text-left">
                                        {cell.render('Cell')}
                                    </div>
                                ))}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={previousPage}
                    disabled={!canPreviousPage}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <button
                    onClick={nextPage}
                    disabled={!canNextPage}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrderTable;
