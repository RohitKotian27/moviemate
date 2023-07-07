
import { useState, useEffect } from "react";

export const useFetch = (path, searchRequest='') => {
    const fetchUrl = `https://api.themoviedb.org/3/${path}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchRequest}`;
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.results);
        };
        fetchData(fetchUrl);
    }, [fetchUrl]);
    return data;
};
