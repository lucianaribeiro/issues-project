import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';


const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const baseURL = 'https://api.github.com/repos/facebook/react'
        //`${BASE_URL}repos/facebook/react/issues`

        fetch(`${baseURL}/issues?page=1&per_page=10`)
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