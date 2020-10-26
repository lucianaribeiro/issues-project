import React from 'react';
import CardComponent from './CardComponent';

const IssuesComponent = (props) => {

    const data = props.data;

    console.log("AAAAA", props)

    return data.map(issue => {
        return(
            <CardComponent issue={issue}/>
        )
    })
}


export default IssuesComponent;