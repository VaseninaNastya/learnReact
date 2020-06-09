import React from "react";
import HeaderBlock from "../../components/HeaderBlock";
import Header from "../../components/Header"
import { connect } from 'react-redux';
import Paragrah from "../../components/Paragraph";
import { Button } from 'antd';
import MainContentBlock from "../../components/MainContentBlock";

import FirebaseContext from "../../context/firebaseContext";
import *as actions from "../../actions";
import { bindActionCreators } from "redux";
class HomePage extends React.Component {
    render() {
        console.log('пропсы', this.props);
        const {
            countNumber,
            plusAction,
            minusAction
        } = this.props;
        return (
            <>
                <HeaderBlock>
                    <Header>
                        Время учить слова онлайн
                    </Header>
                    <Header>
                        {countNumber}
                    </Header>
                    <Button onClick={()=> plusAction(1)}>Plus</Button>
                    <Button onClick={()=> minusAction(1)}>Minus</Button>
                    <Paragrah>
                        Используйте карточки для запоминания и пополняйте активный слованый запас
                    </Paragrah>
                </HeaderBlock>
                <MainContentBlock history={this.props.history} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state in home', state)
    return {
        countNumber: state.counter.count
    };
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);