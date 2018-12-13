import React from 'react';
import './number-input.css';

export default class NumberInput extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.onMakeGuess(this.input.value);
        this.input.value = '';
    }
    
    render() {
        const {id, min, max, value, onChange} = this.props;
        return(
            <div className="form-group">
                <label htmlFor="number">Enter a number between 1 and 100</label>
                <input type="number" id={id} min={min} max={max} value={value} onChange={e => onChange(e.target.value)} />
                <button type="submit">Go</button>
            </div>
        );
    }
}