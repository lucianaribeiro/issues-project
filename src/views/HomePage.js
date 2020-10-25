import React, { useEffect, useState } from 'react';
import IssuesComponent from '../components/IssuesComponent';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import PaginationComponent from '../components/PaginationComponent';


const HomePage = () => {

    const [data, setData] = useState([]);
    const OAUTH_TOKEN = '1642ca5a68e24040b60703025fc50e3a602399b3'
    useEffect(() => {
        const baseURL = 'https://api.github.com/repos/facebook/react'
        const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: `token ${OAUTH_TOKEN}`,
            })
        }

        fetch(`${baseURL}/issues?page=1&per_page=10`, info)
            .then(res => res.json())
            .then((result) => {
                // console.log(result)
                setData(result)
            }).catch(error => {
                console.log(error)
            });
    }, [])

    return (
        <Wrapper>
            <Helmet>
                <body style={`background: #fafafa`} />
            </Helmet>
            <IssuesWrapper>
                <IssuesComponent data={data} />
            </IssuesWrapper>
            <PaginationComponent />
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