
import React from 'react';
import s from './Reset.module.css'
import {connect} from 'react-redux';
import { bindActionCreators} from "redux";
import { allCardWhiteAction } from '../../actions/actionReset';

class Reset extends React.Component {
    //state = {allCardWhite: true}

    handleCardClick = () => {
        console.log (this.props)
        const {turnCard} =this.props

        // this.setState({allCardWhite: !this.state.allCardWhite})
        turnCard()
    }
    render() {
        console.log('пропсы в ресете', this.props);
        
        //const { allCardWhite } = this.state;
        return (
            <div className={s.reset} onClick={ this.handleCardClick}>
                Развернуть все карточки
            </div>

        )
    }
};


const mapStateToProps = (state) => {
    return {
        ...state,
        allCardWhite: state.reset.allCardWhite,
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log('', allCardWhiteAction);
    
    return bindActionCreators({
        turnCard: allCardWhiteAction,
    }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Reset);









