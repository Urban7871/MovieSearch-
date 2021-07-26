import React, { useState } from 'react';


import './Slider.scss'

const Slider = ({ renderSlide, sliderTitle, transform, setTransform, transformValue, times, multiplier}) =>{



    const onNextClick = () => {
        if(window.innerWidth < 1000) {
            if(transform > transformValue * multiplier * times){
                setTransform(0)
            } else {
                setTransform(transform + (transformValue * multiplier));
            }
        } else {
            if(transform > transformValue * times){
                setTransform(0)
            } else {
                setTransform(transform + transformValue)
            }
        }
    }
    const onPrevClick = () => {
        if(window.innerWidth < 1000){

            if(transform < 1){
                setTransform(transformValue * multiplier *  times)
            } else{
                setTransform(transform-(transformValue * multiplier))
            }
        } else {
            if(transform < 1){
                setTransform(transformValue * times)
            } else{
                setTransform(transform-transformValue)
            }
        }
    }

    const renderSlider = () => {
        return(
            <div className={'sliderWrapper'}>
                <button
                onClick={onPrevClick}
                className='slideButton prev'>&#8592;</button>
                <div className='slideShow'style={{transform: `translateX(-${transform}vw)`}}>
                    {renderSlide()}
                </div>
                <button 
                onClick={onNextClick}
                className='slideButton next'>&#8594;</button>
            </div>
        )
    }

    return(
        <div>
            <h2>
            {sliderTitle}
            </h2>
            {renderSlider()}
        </div>
    )
}

export default Slider;