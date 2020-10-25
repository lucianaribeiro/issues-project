import React from 'react';
import CardComponent from './CardComponent';

const IssuesComponent = (props) => {

    const data = props.data;
    console.log(data);


    return data.map(issue => {
        console.log("AAAA", issue)
        return(
            <CardComponent issue={issue}/>
        )
    })
}


export default IssuesComponent;