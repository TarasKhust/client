import React, { useEffect, useState } from "react";
import "./RangeStyle.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ minP, maxP }) => {
    const [value, setValue] = useState({
        min: minP,
        max: maxP,
    });

    useEffect(() => {}, [minP, maxP]);

    const onMinChange = (e) => {
        setValue({
            min: +e.target.value || minP,
        });
    };

    const onMaxChange = (e) => {
        setValue({
            max: +e.target.value || maxP,
        });
    };

   const onSliderChange = (value) => {
       setValue({
           min: value[0],
           max: value[1],
       });
    };

    const rangeConfig = {
        className: "range_slider",
        min: minP,
        max: maxP,
        defaultValue: [minP, maxP],
        onChange: onSliderChange,
        tipProps: {
        placement: "bottom", visible: true,
        },
        tipFormatter: value => (<span className="tooltip">
	{value}
	грн
                                </span>),
    };

    return (
	<div className="range_slider-content">
		<div className="range_input">
			<input name="min" type="text" value={value.min} onChange={onMinChange} />
			<input name="max" type="text" value={value.max} onChange={onMaxChange} />
		</div>
		<Range
			{...rangeConfig}
		/>
	</div>
    );
};

export default RangeSlider;

RangeSlider.propTypes = {
    minP: PropTypes.number,
    maxP: PropTypes.number,
};