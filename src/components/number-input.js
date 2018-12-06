import React from 'react';
import './number-input.css';

export default function NumberInput(props) {
    return(
        <div className="form-group">
            <label htmlFor="number">Enter a number between 1 and 100</label>
            <input type="number" id={props.id} min={props.min} max={props.max} value={props.value} onChange={e => props.onChange(e.target.value)} />
            <button type="submit">Go</button>
        </div>
    )
}