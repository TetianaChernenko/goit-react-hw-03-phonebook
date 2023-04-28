import React from "react";
import css from "./Filter.module.css";
import PropTypes from 'prop-types';


export const Filter = ({value, onChange}) => {
    return (
    <label className={css.label}>
			Find contacts by name
			<input className={css.input} type="text" name="filter" value={value} onChange={onChange}/>
	</label>
)
}

Filter.prototype = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}