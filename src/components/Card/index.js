/*

class Card extends React.Component{
    state = {done:true}
    handlerCardClick=()=>{
        console.log("###:it`s mean", this.props.rus)
    }
    render(){
        const{ eng, rus} = this.props;
        const{done}=this.state;
        const cardClass =[s.card];
        if(done){
            cardClass.push(s.done);
        }
        return (
            <div className={cardClass.join(" ")}
            onClick={this.handlerCardClick}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        {eng}
                    </div>
                    <div className={s.cardBack}>
                        {eng}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
*/
import React from 'react';
import s from './Card.module.css'

class Card extends React.Component {
    state = {
        done: false
    }
    handleCardClick = () => {
        this.setState({done: !this.state.done})
    }
    render() {
        const {eng, rus, allCardWhite} = this.props;
        console.log ("####", allCardWhite);
        const { done } = this.state;
        const cardClass = [s.card];
        if (done ) {
            cardClass.push(s.done);
        } else if (allCardWhite){
            cardClass.push(s.done);
        } 
        return (
        <div className={cardClass.join(' ')} onClick={this.handleCardClick}>
            <div className={s.cardInner}>
                <div className={s.cardFront}>
                    { eng }
                </div>
                <div className={s.cardBack}>
                    { rus }
                </div>
            </div>
        </div>
    )
    };
}

export default Card;


