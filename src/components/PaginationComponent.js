import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = () => {

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value)
    } 

    return(

        <div>
            <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary"/>
        </div>
    );
}


export default PaginationComponent;