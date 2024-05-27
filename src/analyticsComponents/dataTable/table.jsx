import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import style from "./table.module.css";
import Image from "next/image";

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
      initialState: { pageIndex: 0, pageSize:8 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  const Pagination = () => {
    const pageNumbers = [];

    // Logic to display a maximum of 5 page numbers at a time
    const maxPagesToShow = 5;
    let startPage = Math.max(0, pageIndex - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pageCount, startPage + maxPagesToShow);

    // Adjust startPage if endPage is less than maxPagesToShow away from the end
    if (endPage - startPage < maxPagesToShow && endPage < pageCount) {
      startPage = Math.max(0, endPage - maxPagesToShow);
    }

  
    if (startPage > 0) {
      pageNumbers.push(
        <button
          key="ellipsis-start"
          disabled
          style={{ fontSize: "41px", color: "#000", opacity: "1" }}
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
          className={pageIndex === i ? style.active : ""}
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
          style={{ fontSize: "41px", color: "#000", opacity: "1" }}
        >
          {"..."}
        </button>
      );
    }

    return (
      <div className={style.pagination}>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"Previous"}
        </button>
        {pageNumbers}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
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
        <div className={style.db_filter_block}>
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
        </div>
      </div>
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
<div className="pagination_section">


      <span>
        Showing {startRow} to {endRow}
      </span>

      {rows.length > 0 && <Pagination />}
      </div>
    </div>
  );
};

export default DataTable;
