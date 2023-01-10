import React, { useEffect } from "react";
import axios from "axios";
import worldcities from '../../Data/worldcities.json';
import { UseWeatherAppContext } from "../../Context/context";
const ChooseStateComponents = ()=>{
    const {state:{city}, dispatch}= UseWeatherAppContext();
// console.log('UseWeatherAppContext',UseWeatherAppContext(),city);

const handleChange=(e)=>{
    const selectedCity = worldcities.filter((city)=>{
        return city.city===e.target.value
    })[0]
    // console.log(selectedCity);
    dispatch({
        type:'SET_CITY',
        payload:selectedCity
    })
}   
// api call
    const APIKEY = '8608e9142726029e4dde977e9e6c0a1a';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
    
    const fetchData = ()=>{
        axios(URL).then((data)=>{
            let _daily = data.data.daily;
            dispatch({
                type:'SET_DAILY',
                payload:_daily
            })
            
            // console.log('data',data.data);
        })
    }
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },[city])


    return (
        <>
            <div className="stateWrap">
                        {/* <div class="search">
            <form action="/" method="post">
                <label for="cityInput">City Name: </label>
                <input id="cityInput" type="text" name="cityName" placeholder="Search">


                <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                        height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                        </path>
                    </svg></button>
            </form> */}
                <select className="stateSearch" defaultValue={city} onChange={handleChange}>
                    {
                        worldcities && worldcities.length > 0 && worldcities.map((city)=>{
                            return(
                            <option  key={`${city.population}${city.lat}`} value={city.city}>
                                {city.city}-{city.admin_name}
                            </option>
                        )
                    })
                    }
                </select>
            </div>
        </>
    )
}

export default ChooseStateComponents;