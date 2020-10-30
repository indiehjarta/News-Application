import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = '8eeb53b89aca411b8bb82efa7cec97ab';

    useEffect(() => {
        axios
            .get(
                `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
                )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, [])

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}