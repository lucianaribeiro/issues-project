import React, { useEffect, useState } from 'react';
import IssuesComponent from '../components/IssuesComponent';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import PaginationComponent from '../components/PaginationComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

const HomePage = () => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const baseURL = 'https://api.github.com/repos/facebook/react'

    useEffect(() => {
        handlePageChange(1, 'all', '', '', '');
    }, []);

    const callback = (value) => {
        console.log("value", value);
        handlePageChange(value, 'open', 'CLA Signed', 'desc', 'comments');
    }

    const handlePageChange = (value, status, label, order, comments) => {
        const OAUTH_TOKEN = 'f67c55926842b933f4e7940324c4056a4ac87ead'
        const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: `token ${OAUTH_TOKEN}`,
            })
        }
        setLoad(true);
        console.log("page", value);
        fetch(`${baseURL}/issues?state=${status}&labels=${label}&order=${order}&direction=${order}&sort=${comments}&page=${value}&per_page=10`, info)
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
            <Title>Issues Project</Title>
            <FormControl>
                <Typography>

                </Typography>
                <InputLabel></InputLabel>
            </FormControl>
            {load &&
                <CircularProgress />
            }
            {data.length !== 0 &&
                <DataWrapper>
                {console.log("data", data)}
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

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Title = styled.h1`
    font-family: 'Inconsolata', monospace;

`;

export default HomePage;