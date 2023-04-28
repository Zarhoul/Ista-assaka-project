import React from 'react';

function Pagination({ totalItems, pageSize, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages === 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
        <div className="p-4">
            <ul className="flex flex-row justify-center items-center p-6 gap-4">
                {pages.map((page) => (
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                    <button className=" w-10 h-10 p-2 font-medium text-lg bg-primary-color rounded-md flex justify-center items-center text-tertiary-color" onClick={() => onPageChange(page)}>
                    {page}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </>
    
  );
}

export default Pagination;
