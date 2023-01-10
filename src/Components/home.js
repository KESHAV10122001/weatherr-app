import React from 'react';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './Humidity';
import LeftComponents from './Left';
import WeekInfoCardComponents from './WeekInfoCard';

const HomeComponents = ()=>{
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <LeftComponents />
                        <div className='rightSide'>
                            <ChooseStateComponents />
                            <WeekInfoCardComponents />
                            <HumidityComponents />                            
                        </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;