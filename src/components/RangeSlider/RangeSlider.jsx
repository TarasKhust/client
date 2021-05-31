import React, { useEffect, useState } from "react";
import "./RangeStyle.scss";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";
const Slider = require("rc-slider");
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ minP, maxP, productsAll }) => {
    const [priceValue, setPriceValue] = useState({
        min: 0,
        max: 0,
    });

    const [staticValue, setStaticValue] = useState([]);

    const [key, setKey] = useState(Date.now());

    useEffect(() => {
        if (productsAll){
            const newArr = productsAll.map(({ price }) => price);
            setPriceValue({ min: Math.min.apply(Math, newArr), max: Math.max.apply(Math, newArr) });
            setStaticValue({ sMin: Math.min.apply(Math, newArr), sMax: Math.max.apply(Math, newArr) });
        }
    }, [minP, maxP, productsAll]);

        const onSliderChange = value => {
            setPriceValue({ min: value[0], max: value[1] });
    };

   const onInputChange = (value, index) => {
       setKey(Date.now());
        setPriceValue({ min: value.min, max: value.max });

          if (value >= priceValue.min && value <= priceValue.max) {
              console.log("xm");
          }
    };

    const rangeConfig = {
        key: key,
        className: "range_slider",
        min: staticValue.sMin,
        max: staticValue.sMax,
        value: [priceValue.min, priceValue.max],
        onChange: onSliderChange,
        tipProps: {
        placement: "bottom", visible: true,
        },
        tipFormatter: value => (<span className="tooltip">
	{value}
	грн
                                </span>),
    };

    // console.log("Value in State on render:", value);
    return (
	<div className="range_slider-content">
		<div className="range_input">
			<input
				name="min"
				type="number"
				min={priceValue.min}
				value={priceValue.min}
				onChange={e => onInputChange({ min: e.target.value, max: priceValue.max }, 0)}
			/>
			<input
				name="max"
				type="number"
				max={priceValue.max}
				value={priceValue.max}
				onChange={e => onInputChange({ max: e.target.value, min: priceValue.min }, 1)}
			/>
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
    productsAll: PropTypes.array,
};