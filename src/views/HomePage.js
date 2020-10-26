import React, { useEffect, useState } from 'react';
import IssuesComponent from '../components/IssuesComponent';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import PaginationComponent from '../components/PaginationComponent';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const baseURL = 'https://api.github.com/repos/facebook/react'
    useEffect(() => {
        fetch(`${baseURL}/issues?page=1&per_page=10`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result)
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const callback = (value) => {
        console.log("value", value);
        handlePageChange(value);
    }

    const handlePageChange = (value) => {
        setLoad(true);
        console.log("page", value);
        fetch(`${baseURL}/issues?page=${value}&per_page=10`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
                setLoad(false);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <Wrapper>
            <Helmet>
                <body style={`background: #fafafa`} />
            </Helmet>
            {load &&
                <CircularProgress />
            }
            <IssuesWrapper>
                <IssuesComponent data={data} />
            </IssuesWrapper>
            <PaginationComponent callback={callback} />
        </Wrapper>
    );


}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const IssuesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 50px;
    margin-left: 150px;
    justify-content: flex-start;

`;

export default HomePage;