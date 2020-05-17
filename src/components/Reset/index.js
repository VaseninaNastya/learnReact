
import React from 'react';
import s from './Reset.module.css'





class Reset extends React.Component {
    state = {allCardWhite: true}
    handleCardClick = () => {
        console.log (this.props)
        //this.setState({ allCardWhite: true })
        this.setState({allCardWhite: !this.state.allCardWhite})
        this.props.updateData(this.state.allCardWhite)
    }
    render() {
        const { allCardWhite } = this.state;
        return (
            <div className={s.reset} onClick={ this.handleCardClick}>
                Развернуть все карточки
            </div>

        )
    }
};
export default Reset;

/*
class Reset extends React.Component {
    state = {
        done: false
    }
    handleCardClick = () => {
        this.setState({done: !this.state.done})
    }
    render() {
        const {eng, rus} = this.props;
        const { done } = this.state;
        const cardClass = [s.reset];
        if (done) {
            cardClass.push(s.done);
        };
        return (
        <div className={cardClass.join(' ')} onClick={this.handleCardClick}>
            <div className={s.cardInner}>
                <div className={s.cardFront}>
                    { eng }
                </div>
            </div>
        </div>
    )
    };
}
*/



