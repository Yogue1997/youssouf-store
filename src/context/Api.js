import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

export const ApiProvider = createContext("")


function Api({ children }) {

    const url = "https://fakestoreapi.com/products";

    const [api, setApi] = useState([]);

    const [theme, setTheme] = useState(true)

    console.log(api);

    const fetch = () => {
        axios.get(url).then((res) => {
            setApi(res.data);
        });
    };

    useEffect(() => {
        fetch();
    }, []);





    const [cart, setCart] = useState([])

    const itemInCartContext = (id) =>{
        const result = cart.filter((item) => item.id === Number(id));
        return result.length > 0 ?  true : false
    }



    return (
        <ApiProvider.Provider value={{ api, setApi, cart, setCart, theme, setTheme, itemInCartContext }}>
            {children}
        </ApiProvider.Provider>
    )
}

export default Api