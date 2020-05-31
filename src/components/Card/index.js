
import React from 'react';
import s from './Card.module.css'
import cl from "classnames";
import { CheckSquareOutlined, DeleteOutlined  } from "@ant-design/icons";
import {withRouter} from 'react-router-dom';
class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    }
    componentDidMount(){
        console.log('eeeeee', this.props);
        const {match: {params}, index}=this.props;
        console.log("че такое индекс", this.props.index)
        if(index===+params.id){
            this.setState({
                done: params.isDone
            })
        }
        
    }
    
    handleCardClick = () => {
        this.setState(({done, isRemembered}) => {
            if (!isRemembered) {
                return {
                    done: !done
                }
            }
        })
    }
    handleIsRememberClick = () => {
        this.setState(({isRemembered}) => {
            return {
                isRemembered: !isRemembered
            }
        }
        )
    }

    render() {
        const { eng, rus, allCardWhite, onDelitedItem } = this.props;
        const { done, isRemembered } = this.state;
        const cardClass = cl(s.card, { [s.done]: done }, { [s.done]: allCardWhite }, { [s.isRemembered]: isRemembered });
        console.log("Пропсы внутри картхолдера, id", this.props)
        return (
            <div className={s.root}>
                <div className={cardClass}>
                    <div 
                    className={s.cardInner}
                    onClick={this.handleCardClick}
                    >
                        <div className={s.cardFront}>
                            {eng}
                        </div>
                        <div className={s.cardBack}>
                            {rus}
                        </div>
                    </div>
                </div>

                <div className={s.icons}>
                    <CheckSquareOutlined onClick={this.handleIsRememberClick} />

                </div>
                <div className={s.icons}>

                    
                    <DeleteOutlined onClick={onDelitedItem}/>
                </div>
            </div>

        )
    };
}

export default withRouter(Card);


/*        const { eng, rus, allCardWhite, onDelitedItem } = this.props;*/