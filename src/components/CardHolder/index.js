import React from "react";
import Card from "../Card";
import Reset from "../Reset";
import { Input } from "antd";
import { Spin } from "antd";
import s from "./CardHolder.module.css";
import getTranslateWord from "../../servises/yandex-dictionary";
import { database } from "firebase";
import TestContext from '../../context/testContext';
import FirebaseContext from '../../context/firebaseContext';
const { Search } = Input;

export const hoc = (Component, getData) => {
    return class extends React.PureComponent {
        static contextType = FirebaseContext;
        state = {
            allCardWhite: false,
            newEng: "",
            newRus: "",
            isBusy: false,
            items: []
        }
        componentDidMount() {

            console.log("пытаюсь понять, передается ли контекст", this.context);

            getData().once('value').then(res => {
                console.log("res", res.val());
                ;
                this.setState({
                    items: res.val() || []
                })
                console.log("пытаюсь понять, передается ли итемс", this.state.items)
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
            console.log("передаются ли пропсы для маппинга", this.props.id);
            const { items } = this.state;
            console.log("ищу длинну", this.state);
            
            const { item, onDelitedItem } = this.props;
            const { allCardWhite, isBusy } = this.state;
            if (items.length === 0) {
                return <Spin />
            } else{
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

export default hoc(Card);
