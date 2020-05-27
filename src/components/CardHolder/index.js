import React from "react";
import Card from "../Card";
import Reset from "../Reset";
import { Input } from "antd";
import s from "./CardHolder.module.css";
import getTranslateWord from "../../servises/yandex-dictionary";
import { database } from "firebase";
import TestContext from '../../context/testContext';
const { Search } = Input;
class CardHolder extends React.Component {
    state = {
        allCardWhite: false,
        newEng: "",
        newRus: "",
        isBusy: false,
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
        console.log("context", this.context);
        
        const { item, onDelitedItem } = this.props;
        const { allCardWhite, isBusy } = this.state;
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
                    item.map(({ eng, rus, id }) => {
                        return (
                            <Card key={id} eng={eng} rus={rus}
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

CardHolder.contextType = TestContext;
export default CardHolder;
