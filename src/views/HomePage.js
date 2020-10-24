import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';


const HomePage = () => {

    const [data, setData] = useState([]);
    const OAUTH_TOKEN = '1642ca5a68e24040b60703025fc50e3a602399b3'
    const info = {
        method: 'GET',
        headers: new Headers({
            Authorization: `token ${OAUTH_TOKEN}`,
        })
    }
    useEffect(() => {
        const baseURL = 'https://api.github.com/repos/facebook/react'
        //`${BASE_URL}repos/facebook/react/issues`

        fetch(`${baseURL}/issues?page=1&per_page=10`, info)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setData(result)
            }).catch(error => {
                console.log(error)
            });
    },[])

    return (
        <div>
            <CardComponent title="titulo" description="descrição" />
        </div>
    );


}


export default HomePage;