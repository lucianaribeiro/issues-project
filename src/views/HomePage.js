import React, { useEffect, useState } from 'react';
import IssuesComponent from '../components/IssuesComponent';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import PaginationComponent from '../components/PaginationComponent';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const OAUTH_TOKEN = '155b8beba9c626bbcb948803d629a651953812be'
    const baseURL = 'https://api.github.com/repos/facebook/react'
    useEffect(() => {
        const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: `token ${OAUTH_TOKEN}`,
            })
        }

        fetch(`${baseURL}/issues?page=1&per_page=10`, info)
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
        const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: `token ${OAUTH_TOKEN}`,
            })
        }
        setLoad(true);
        console.log("page", value);
        fetch(`${baseURL}/issues?page=${value}&per_page=10`, info)
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
`;

const IssuesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 50px;
    align-content: center;
`;

export default HomePage;