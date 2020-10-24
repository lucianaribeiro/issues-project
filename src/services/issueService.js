const axios = require('axios').default;

export async function getIssues() {
    const baseURL = 'https://api.github.com/repos/facebook/react'
    //`${BASE_URL}repos/facebook/react/issues`

    fetch(`${baseURL}/issues`)
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        });
}
