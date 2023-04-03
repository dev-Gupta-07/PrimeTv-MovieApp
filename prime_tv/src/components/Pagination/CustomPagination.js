import { Pagination, } from '@mui/material'
import React from 'react'

const CustomPagination = ({setPage,numOfPages=20}) => {

    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
    }
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: 10,
        justifyContent: "center",
      }}
    >
      <Pagination
        hideNextButton
        hidePrevButton
        color="primary"
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
}

export default CustomPagination
