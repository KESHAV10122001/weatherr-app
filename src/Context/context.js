import React,{useReducer, useContext} from "react";

import { WeatherReducer } from "./reducer";

const weatherAppContext=React.createContext();

const WeatherAppProvider=({children})=>{
    const[state,dispatch]=useReducer(WeatherReducer,{
        city:{
                "city": "Delhi",
                "city_ascii": "Delhi",
                "lat": 28.6667,
                "lng": 77.2167,
                "country": "India",
                "iso2": "IN",
                "iso3": "IND",
                "admin_name": "Delhi",
                "capital": "admin",
                "population": 31870000,
                "id": 1356872604
                },
        current:'',
        daily:''
    })
    return (
        <>
            <weatherAppContext.Provider value={{state,dispatch}}>
                {children}
            </weatherAppContext.Provider>
        </>
    )
}

export default WeatherAppProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(weatherAppContext); 
}

