
import { useState, useEffect } from "react";

export const useFetch = (path, searchRequest = '') => {
    const fetchUrl = `https://api.themoviedb.org/3/${path}?query=${searchRequest}`;
    const requestOptions = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`
        },
        referrer: 'https://yourmoviemate.netlify.app',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        mode: 'cors',
        credentials: 'omit'
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(url, options) {
            const response = await fetch(url, options);
            const jsonData = await response.json();
            setData(jsonData.results);
        };
        fetchData(fetchUrl, requestOptions);
    }, [fetchUrl]);
    return data;
};

