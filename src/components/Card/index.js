
import React from 'react';
import s from './Card.module.css'
import cl from "classnames";
import { CheckSquareOutlined, DeleteOutlined  } from "@ant-design/icons";
import {withRouter} from 'react-router-dom';
import { compose } from "redux";

import {connect} from 'react-redux';


class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    }
    componentDidMount(){
        const {match: {params}, index}=this.props;
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
console.log("пропсы в кард", this.props);
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


const mapStateToProps= (state) => {
    return {
        allCardWhite: state.reset.allCardWhite,
    };
}
/*

const composedCard= compose(
    connect(mapStateToProps,null),withRouter(Card))
export default composedCard;

*/
export default connect(mapStateToProps,null)(withRouter(Card))