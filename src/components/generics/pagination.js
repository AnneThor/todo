import React from 'react';

const Pagination = ({ totalPages, onClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1)
  return (
    <div>
      { pages.map(num => {
        return <button key={`page-#-${num}`}
                       onClick={() => onClick(num)}>{num}</button>
      })}
    </div>
  )
}

export default Pagination;
