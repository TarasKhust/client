import React, {useState} from "react";
import './RangeStyle.scss'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);


const RangeSlider = () => {
    const [value, setValue] = useState('')
    const rangeConfig = {
        className: 'range_slider',
        min: 0,
        max: 4000,
        defaultValue: [200, 1000],
        onChange: value=>setValue(value),
        tipProps: {
        placement: "bottom", visible: true
        },
        tipFormatter: value => <span className="tooltip">{value}грн</span>
    }
    return(
        <div className='range_slider-content'>
            <div className='range_input'>
                <input type="text" value={value[0]} />
                <input type="text" value={value[1]} />
            </div>
            <Range
                {...rangeConfig}
            />
        </div>
    )
}

export default RangeSlider