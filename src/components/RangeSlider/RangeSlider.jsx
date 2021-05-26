import React, { useEffect, useState } from "react";
import "./RangeStyle.scss";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";
const Slider = require("rc-slider");
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ minP, maxP }) => {
    const [value, setValue] = useState({
        min: 0,
        max: 0,
    });

    useEffect(() => {
        setValue({ min: minP, max: maxP });
    }, [minP, maxP]);

    const onMinChange = (e) => {
        setValue({
            min: +e.target.value,
        });
    };

    const onMaxChange = (e) => {
        setValue({
            max: +e.target.value,
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
        value: [value.min, value.max],
        defaultValue: [value.min, value.max],
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
			<input name="min" type="text" value={value.min || ""} onChange={onMinChange} />
			<input name="max" type="text" value={value.max || ""} onChange={onMaxChange} />
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