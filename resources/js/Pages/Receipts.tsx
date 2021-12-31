import React from 'react';
import Welcome from '@/Jetstream/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import JetButton from "@/Jetstream/Button";
import useTypedPage from "@/Hooks/useTypedPage";
import {Inertia} from "@inertiajs/inertia";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    chakra,
    As,
    OmitCommonProps,
    TableRowProps,
    TableCellProps,
    Button,
    Link,
    Box
} from '@chakra-ui/react'
// @ts-ignore
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
// @ts-ignore
import {useTable, useSortBy} from 'react-table'

export default function Receipts() {
    const page = useTypedPage();
    const data = React.useMemo<any>(
        () => page.props.receipts,
        [],
    )

    // @ts-ignore
    const columns = React.useMemo<any>(
        () => [
            {
                Header: 'Date',
                accessor: 'paid_at',
            },
            {
                Header: 'Amount Paid',
                accessor: 'amount',
                isNumeric: false,
                className: 'text-align-left',
                Cell: ({value} : {value:any}) => (<chakra.span>${value}</chakra.span>)
            },
            {
                Header: 'Download',
                accessor: 'receipt_url',
                Cell: ({value} : {value:any}) => (<Button as={Link} href={value} target={"_blank"}>Download</Button>)
            },
        ],
        [],
    )

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data}, useSortBy)

    return (
        <AppLayout
            title="Dashboard"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Receipts
                </h2>
            )}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Box className="bg-white overflow-hidden shadow-xl sm:rounded-lg" p={8}>
                        <Table {...getTableProps()}>
                            <Thead>
                                {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, keyof TableRowProps> & TableRowProps & OmitCommonProps<any, keyof TableRowProps> & { as?: As<any> | undefined; }; headers: any[]; }) => (
                                    <Tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <Th
                                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                                isNumeric={column.isNumeric}
                                            >
                                                {column.render('Header')}
                                                <chakra.span pl='4'>
                                                    {column.isSorted ? (
                                                        column.isSortedDesc ? (
                                                            <TriangleDownIcon aria-label='sorted descending'/>
                                                        ) : (
                                                            <TriangleUpIcon aria-label='sorted ascending'/>
                                                        )
                                                    ) : null}
                                                </chakra.span>
                                            </Th>
                                        ))}
                                    </Tr>
                                ))}
                            </Thead>
                            <Tbody {...getTableBodyProps()}>
                                {rows.map((row: any) => {
                                    prepareRow(row)
                                    return (
                                        <Tr {...row.getRowProps()}>
                                            {row.cells.map((cell: { getCellProps: () => JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, keyof TableCellProps> & TableCellProps & OmitCommonProps<any, keyof TableCellProps> & { as?: As<any> | undefined; }; column: { isNumeric: boolean | undefined; }; render: (arg0: string) => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                                                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                                    {cell.render('Cell')}
                                                </Td>
                                            ))}
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Box>
                </div>
            </div>
        </AppLayout>
    );
}
