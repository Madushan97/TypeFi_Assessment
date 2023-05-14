import React from 'react';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div>
      <ul className="pagination">
        {totalItems > itemsPerPage && (
          <>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                style={{ marginRight: '10px' }}
              >
                Previous
              </button>
            </li>
            <li className="page-item active">
              <button className="page-link" disabled>
                Page {currentPage} of {totalPages}
              </button>
            </li>
            <li
              className={`page-item ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                style={{ marginLeft: '10px' }}
              >
                Next
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
