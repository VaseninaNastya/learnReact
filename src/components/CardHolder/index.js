import React from "react";
import {connect} from 'react-redux';
import Card from "../Card";
import Reset from "../Reset";
import { Input } from "antd";
import { Spin } from "antd";
import s from "./CardHolder.module.css";
import getTranslateWord from "../../servises/yandex-dictionary";
import { database } from "firebase";
import TestContext from '../../context/testContext';
import FirebaseContext from '../../context/firebaseContext';
import { bindActionCreators, compose } from "redux";
import { cardListAction, cardListResolveAction, cardListRejectAction } from "../../actions/cardListActions";
const { Search } = Input;

export const hoc = (Component, getData) => {
    return class extends React.PureComponent {
        static contextType = FirebaseContext;
        state = {
            allCardWhite: false,
            // newEng: "",
            // newRus: "",
            isBusy: false,
            items: []
        }
        componentDidMount() {
            const {
                fetchCardList,
                fetchCardListReject,
                fetchCardListResolve
            } = this.props;
console.log('пропсы после подключения экшнов', this.props)
            fetchCardList();
            getData().once('value').then(res => {
                console.log("res", res.val());
                fetchCardListResolve(res.val());

            }).catch(err =>{
                fetchCardListReject(err)
            })
        }
        updateData = (value) => {
            this.setState({ allCardWhite: value })
        }
        handleInputChangeNewEng = (e) => {
            this.setState({ newEng: e.target.value })
        };
        getWord = async () => {
            const getWord = await getTranslateWord(this.state.newEng);
            if (getWord.length > 0) {
                this.props.onAddItem(
                    {
                        rus: getWord[0].tr[0].text,
                        eng: this.state.newEng,
                    }
                );
            }
            this.setState({
                isBusy: false,
                newEng: ""
            })
        }
        handleSubmitForm = async () => {
            const { wordArr } = this.state;
            this.setState({
                isBusy: true,
            }, this.getWord
            )
        }
        render() {
            console.log("пропсы в кардхолдере", this.props);
            
            // const { items } = this.state;
            const { item, onDelitedItem, items, allCardWhite, isBusy} = this.props;
            // const { allCardWhite, isBusy } = this.state;
            if (this.props.isBusy) {
                return <Spin />
            } else {
                return (
                    <>
                        <Reset updateData={this.updateData} />
                        <div className={s.form}>
                            <Search
                                placeholder="input search text"
                                enterButton="Search"
                                size="large"
                                loading={isBusy}
                                onSearch={this.handleSubmitForm}
                                value={this.state.newEng}
                                onChange={this.handleInputChangeNewEng} />
                        </div>
                        <div className={s.CardHolder}>{

                            item.map(({ eng, rus, id }, index) => {
                                return (
                                    <Component
                                        index={index}
                                        key={id}
                                        eng={eng}
                                        rus={rus}
                                        allCardWhite={allCardWhite}
                                        onDelitedItem={() => onDelitedItem(id)}
                                    />
                                )
                            })
                        }</div>
                    </>
                )
            }

        }
    }
}
const mapStateToProps = (state) => {
    return {
        allCardWhite: state.cardList.allCardWhite,
        isBusy: state.cardList.isBusy,
        item: state.cardList.payload || [],
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log( ' cardListAction', cardListAction);
    
    return bindActionCreators({
fetchCardList: cardListAction,
fetchCardListResolve: cardListResolveAction,
fetchCardListReject: cardListRejectAction
    }, dispatch)
}

const composedHoc = compose(
    connect(mapStateToProps,mapDispatchToProps),hoc)
export default composedHoc;





/*const composedHoc = compose(connect(mapStateToProps,mapDispatchToProps),hoc)*/



/*connect(mapStateToProps, mapDispatchToProps)(App);
const composedHoc = compose(
    connect(mapStateToProps,mapDispatchToProps),
);
/*const mapStateToProps = (state) =>{
    return{
      userUid: state.user.userUid,
      userEmail: state.user.userEmail
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addUser: addUserAction,
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);



  fetchCardList: cardListAction,
fetchCardListResolve: cardListResolveAction,
fetchCardListReject: cardListRejectAction*/
/*

const composedHoc = compose(
    connect(mapStateToProps,mapDispatchToProps),
    hoc
);
export default composedHoc;

*/