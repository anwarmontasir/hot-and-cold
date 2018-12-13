import React from 'react';
import './hot-and-cold.css';
import NumberInput from './number-input';
import RateGuess from './rate-guess';

export default class HotAndCold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberGuessed: 0,
            prevNumberGuessed: 0,
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            guessMessage: ''
        }
    }

    makeGuess(numberGuessed) {
        this.setState({numberGuessed: parseInt(numberGuessed, 10)});
        console.log('numberGuessed', this.state.numberGuessed);
        console.log('correctAnswer', this.state.correctAnswer);
    }

    render() {
        return (
            <main>
                <h1>Hot and Cold</h1>
                <form onSubmit={e => this.onSubmit(e)}>
                    <NumberInput id="number" min={1} max={100} value={this.state.numberGuessed} onChange={numberGuessed => this.setState({numberGuessed}) } onMakeGuess={numberGuessed => this.makeGuess({numberGuessed}) } />
                </form>
                <RateGuess message={this.state.guessMessage} />
            </main>
        )
    }
}