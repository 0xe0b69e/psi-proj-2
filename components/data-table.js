"use client";

import { useState } from "react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  DotsVerticalIcon, TrashIcon,
  TriangleDownIcon,
  TriangleUpIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { splitArray } from "@/lib/array";
import { CircularButton } from "@/components/circular-button";

export default function DataTable ( { data } )
{
  const length = data.length;
  const keys = Object.keys( data[ 0 ] );
  
  const [ page, setPage ] = useState( 0 );
  const [ entriesPerPage, setEntriesPerPage ] = useState( 10 );
  const [ sortedBy, sortBy ] = useState( keys[ 0 ] );
  const [ sortDirection, setSortDirection ] = useState( 0 ); // 0 = asc, 1 = desc
  
  data = splitArray( data.sort( ( a, b ) =>
  {
    // Fuck you Brendan Eich
    if ( typeof a[ sortedBy ] === "string" && typeof b[ sortedBy ] === "string" ) // <-- What the fuck even is that
      // Why do I need to do all of this just to avoid TypeError
    {
      if (!a[sortedBy].startsWith("$")) {
        if ( a[ sortedBy ] < b[ sortedBy ] )
          return sortDirection === 0 ? -1 : 1;
        else if ( a[ sortedBy ] > b[ sortedBy ] )
          return sortDirection === 0 ? 1 : -1;
        else
          return 0;
      }
        // TypeError: b[sortedBy].startsWith is not a function
        // I fUcKiNg SwEaR tO gOd
      // PS. Took only 10 minutes :) (Fuck vanilla JS)
      else if (a[sortedBy].startsWith("$") && b[sortedBy].startsWith("$"))
      {
        a[sortedBy] = Number(a[sortedBy].replace("$", ""))
        b[sortedBy] = Number(b[sortedBy].replace("$", ""))
      }
    }
    
    return sortDirection === 0 ? a[ sortedBy ] - b[ sortedBy ] : b[ sortedBy ] - a[ sortedBy ];
  } ), entriesPerPage )[ page ];
  
  // Pagination garbage
  const totalPages = Math.ceil(length / entriesPerPage);
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages)
      setPage(newPage);
  };
  const getPageNumbers = () => {
    let start = Math.max(page - 1, 1);
    let end = Math.min(start + 5, totalPages);
    start = Math.max(end - 5, 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  
  return (
    <div className="w-full h-full flex flex-col space-y-4">
      <div className="w-full items-center flex flex-row space-x-4">
        <input
          defaultValue={entriesPerPage}
          className="w-20 p-3 px-4 border-gray-300/75 dark:border-slate-700/75 border-[1px] rounded-md bg-transparent"
          type="number"
          onInput={(event) => setEntriesPerPage(Number(event.currentTarget.value))}
        />
        <p>entries per page</p>
      </div>
      <table className="w-full h-full">
        <tbody>
        <tr>
          {keys.map( key => (
            <th
              key={key}
              className={cn(
                "border-[1px] border-gray-300/75 dark:border-slate-700/75 capitalize px-3 py-2 cursor-pointer justify-between",
                "select-none"
              )}
              onClick={() =>
              {
                if ( sortedBy === key )
                  setSortDirection( sortDirection ^ 1 );
                sortBy( key );
              }}
            >
              <div className="flex justify-between w-full h-full items-center">
                <p>{key}</p>
                <div className="flex flex-col h-full -space-y-1.5 p-0">
                  <TriangleUpIcon className={cn(
                    "w-4 m-0 text-gray-300 dark:text-slate-700/75",
                    sortDirection === 0 && sortedBy === key ? "text-gray-700 dark:text-slate-500" : ""
                  )} />
                  <TriangleDownIcon className={cn(
                    "w-4 m-0 text-gray-300 dark:text-slate-700/75",
                    sortDirection === 1 && sortedBy === key ? "text-gray-700 dark:text-slate-500" : ""
                  )} />
                </div>
              </div>
            </th>
          ) )}
          <th
            className="border-[1px] border-gray-300/75 dark:border-slate-700/75 capitalize px-3 py-2 text-start select-none">
            actions
          </th>
        </tr>
        {data?.map( ( row, index ) => (
          <tr key={index} className={cn(
            "border-[1px] border-gray-300/75 dark:border-slate-700/75",
            index % 2 === 0 ? "bg-gray-100 dark:bg-slate-800" : ""
          )}>
            {keys.map( key => (
              <td key={key} className="px-3 py-2 border-[1px] border-gray-300/75 dark:border-slate-700/75">
                {typeof row[ key ] === "object" ? dayjs( row[ key ] ).format( "YYYY/MM/DD" ) : row[ key ]}
              </td>
            ) )}
            <td className="px-3 py-2 border-[1px] border-gray-300/75 dark:border-slate-700/75">
              <div className="flex flex-row space-x-2 w-full h-full">
                <CircularButton className="w-7 h-7">
                  <DotsVerticalIcon />
                </CircularButton>
                
                <CircularButton className="w-7 h-7">
                  <TrashIcon />
                </CircularButton>
              </div>
            </td>
          </tr>
        ) )}
        </tbody>
      </table>
      <div className="flex w-full justify-between">
        <p>Showing {(page * entriesPerPage) + 1} to {Math.min((page + 1) * entriesPerPage, length)} of {length} entries</p>
        <div className="flex flex-row -space-x-[1px] border-gray-300/75 dark:border-slate-700/75 rounded-md">
          <button
            onClick={() => handlePageChange(page - 1)} disabled={page === 0}
            className={cn(
              "disabled:opacity-50 disabled:cursor-not-allowed border-[1px] border-gray-300/75 dark:border-slate-700/75",
              "w-8 h-8 flex justify-center items-center text-primary-lighter"
            )}
          >
            <CaretLeftIcon />
          </button>
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber - 1)}
              className={cn(
                "border-[1px] border-gray-300/75 dark:border-slate-700/75",
                "w-8 h-8 flex justify-center items-center text-primary-lighter",
                pageNumber === page + 1 ? "bg-primary-lighter text-white" : ""
              )}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}
            className={cn(
              "disabled:opacity-50 disabled:cursor-not-allowed border-[1px] border-gray-300/75 dark:border-slate-700/75",
              "w-8 h-8 flex justify-center items-center text-primary-lighter"
            )}
          >
            <CaretRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}