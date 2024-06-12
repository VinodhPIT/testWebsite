import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import Image from "next/image";

import style from "./table.module.css";

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  const Pagination = () => {
    const pageNumbers = [];

    const maxPagesToShow = 5;
    let startPage = Math.max(0, pageIndex - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pageCount, startPage + maxPagesToShow);

    if (endPage - startPage < maxPagesToShow && endPage < pageCount) {
      startPage = Math.max(0, endPage - maxPagesToShow);
    }

    if (startPage > 0) {
      pageNumbers.push(
        <button
          key="ellipsis-start"
          disabled
          className="page_list"
        >
          {"..."}
        </button>
      );
    }

    for (let i = startPage; i < endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          className={pageIndex === i ? style.active : "page_list"}
        >
          {i + 1}
        </button>
      );
    }

    if (endPage < pageCount) {
      pageNumbers.push(
        <button
          key="ellipsis-end"
          disabled
          className="page_list"
        >
          {"..."}
        </button>
      );
      pageNumbers.push(
        <button
          key={pageCount - 1}
          onClick={() => gotoPage(pageCount - 1)}
          className={pageIndex === pageCount - 1 ? style.active : "page_list"}
        >
          {pageCount}
        </button>
      );
    }

    return (
      <div className={style.pagination}>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="page_list page_pre">
          {"Previous"}
        </button>
        {pageNumbers}
        <button onClick={() => nextPage()} disabled={!canNextPage} className="page_list page_nex">
          {"Next"}
        </button>
      </div>
    );
  };

  // Calculate the range of items being displayed
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min(startRow + page.length - 1, data.length);

  return (
    <div>
      <div className={style.custom_search_filter_db}>
        <div className={style.search}>
          <input
            value={globalFilter || ""}
            className={style.input_txt}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
          <button type="submit" className={style.btn_search}>
            <Image src="/magni.svg" alt="search" width={20} height={20} />
          </button>
        </div>
        {/* <div className={style.db_filter_block}>
          <button className={style.db_filter_setting}>
            <Image
              src="/setting-tuning-mob.svg"
              width={20}
              height={20}
              alt="style"
              className={style.filter_icon}
              priority
            />
          </button>
        </div> */}
      </div>
      <div className="db_datatable_page_block">
        <div className="db_datatable_block">
          <table {...getTableProps()} className={style.data_table}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.id}
                    >
                      <div className={style.wrapper}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Image
                                src="/sort_down.svg"
                                width={17}
                                height={16}
                                alt="Desc"
                              />
                            ) : (
                              <Image
                                src="/sort_up.svg"
                                width={17}
                                height={16}
                                alt="Asec"
                              />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>

                    
                  ))}
                </tr>
              ))}
            </thead>
            {rows.length > 0 ? (
              <tbody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={index}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr key="no-data">
                  <td colSpan={columns.length} className="no-data-found">
                    No data found.
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        {rows.length > 0 &&  <div className="db_pagination_block">
          <span className="show_result_page">
            Showing {startRow} to {endRow}
          </span>
           <Pagination />
        </div>}
      </div>
    </div>
  );
};

export default DataTable;
