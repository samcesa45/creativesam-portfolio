import React, { useState } from 'react';
type PaginatedListProps<T> = {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T, index: number) => React.ReactNode;
};

export default function PaginatedList<T>({
  items,
  itemsPerPage,
  renderItem,
}: PaginatedListProps<T>) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? items : items.slice(0, itemsPerPage);

  const toggleExpanded = () => setExpanded(!expanded);
  // const [currentPage, setCurrentPage] = useState(1)
  // const totalPages = Math.ceil(items.length / itemsPerPage)

  // const paginatedItems = items.slice(
  //     (currentPage -1) * itemsPerPage,
  //     currentPage * itemsPerPage
  // )

  // const handlePrev = () => {
  //     setCurrentPage((prev) => Math.max(prev - 1, 1))
  // }

  // const handleNext = () => {
  //     setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  // }
  return (
    <>
      {/* <div className='flex flex-wrap mt-20 gap-7'>
        {paginatedItems.map((item,index) => renderItem(item,index))}
    </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap mt-20 gap-7">
        {visibleItems.map((item, index) => renderItem(item, index))}
      </div>

      {/* <div className="flex justify-center gap-4 mt-10">
        <button 
        onClick={handlePrev}
        disabled={currentPage === 1}
        className='px-4 py-2 text-black bg-gray-200 rounded disabled:opacity-50'
        >
            prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='px-4 py-2 text-black bg-gray-200 rounded disabled:opacity-50'
        >Next
        </button>
    </div> */}
      {items.length > itemsPerPage && (
        <div className="flex justify-center mt-10">
          <button
            onClick={toggleExpanded}
            className="px-6 py-3 text-white transition-all rounded bg-tertiary hover:bg-tertiary/20"
          >
            {expanded ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </>
  );
}
