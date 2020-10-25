import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components'


const PaginationComponent = ({ callback }) => {

    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value)
        callback(value)
    }

    return(
        <Wrapper>
            <Pagination count={50} page={page} onChange={handleChange} variant="outlined" color="primary"/>
        </Wrapper>
    );
}

const Wrapper = styled.div``;


export default PaginationComponent;