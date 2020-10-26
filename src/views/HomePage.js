import React, { useEffect, useState } from 'react';
import IssuesComponent from '../components/IssuesComponent';
import styled from 'styled-components'
import PaginationComponent from '../components/PaginationComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import FilterComponent from '../components/FilterComponent';

const HomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [status, setStatus] = useState('all');
    const [order, setOrder] = useState('');
    const [comment, setComment] = useState('');
    const [label, setLabel] = useState('');
    const baseURL = 'https://api.github.com/repos/facebook/react'

    useEffect(() => {
        handlePageChange(1, status, label, order, comment);
    }, [status, label, comment, order]);

    const callback = (value) => {
        handlePageChange(value, status, label, order, comment);
    }

    const callbackFilter = (value, name) => {

        if (name === 'status') {
            setStatus(value);
        } else if (name === 'order') {
            if (value === 'comments') {
                setComment(value);
                setOrder('');
            } else {
                setOrder(value);
                setComment('');
            }
        }
        else if (name === 'label') {
            setLabel(value);
        }
    }

    const handlePageChange = (value, status, label, order, comments) => {
        setLoad(true);
        fetch(`${baseURL}/issues?state=${status}&labels=${label}&order=${order}&direction=${order}&sort=${comments}&page=${value}&per_page=10`)
            .then(res => res.json())
            .then((result) => {
                setData(result);
                setLoad(false);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleFilter = () => {

        return (
            <FilterComponent callbackFilter={callbackFilter} />
        );
    }

    return (
        <Wrapper>
            <Title>React's Repository Issues Project</Title>
            <FilterTitle>
                Filter
            </FilterTitle>
            {load &&
                <CircularProgress />
            }
            {handleFilter()}
            {data.length !== 0 &&
                <DataWrapper>
                    <IssuesWrapper>
                        <IssuesComponent data={data} />
                    </IssuesWrapper>
                    <PaginationComponent callback={callback} />
                </DataWrapper>
            } {data.length === 0 && load === false &&
                <Typography>
                    Nenhuma Issue Encontrada!
                </Typography>
            }
        </Wrapper>
    );


}

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* align-content: center; */
`;

const IssuesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 40px;
    margin-top: 10px;
    margin-left: 150px;
    justify-content: flex-start;

`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Title = styled.h1`
    margin-top: 50px;
    font-family: 'Inconsolata', monospace;
`;

const FilterTitle = styled.h2`
    font-family: 'Inconsolata', monospace;
`;



export default HomePage;