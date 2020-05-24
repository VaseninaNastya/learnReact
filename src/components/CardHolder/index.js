import React from "react";
import Card from "../Card";
import Reset from "../Reset";
import { Input } from "antd";
import s from "./CardHolder.module.css";
import getTranslateWord from "../../servises/yandex-dictionary";
import { database } from "firebase";

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

    /*
    handleSubmitForm = ()=>{

        const {wordArr} = this.state;
        const newArr=[
            ...wordArr,
            {
                eng,rus,
                id: Math.floor(Math.random()*Math.floor(1000))
            }
        ]
        database.ref(this.urlRequest).set(newArr);
    }   */

    handleSubmitForm = async () => {
        const { wordArr } = this.state;
        this.setState({
            isBusy: true,
        }, this.getWord
        )
    }
    render() {
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

export default CardHolder;

/*                <div className={s.CardHolder}>{
                    item.map(({ eng, rus, id }) => {
                        return (
                            <Card key={id} eng={eng} rus={rus}
                                allCardWhite={allCardWhite}
                                onDelitedItem={() => onDelitedItem(id)}
                            />
                        )
                    })
                }</div>*/






/*
<div>
{this.state.label}
</div>*/
/*                <form
                    className={s.form}
                    onSubmit={this.handleSubmitForm}>

                    <input
                        type="text"
                        value={this.state.newRus}
                        onChange={this.handleInputChangeNewRus} />
                    <input
                        type="text"
                        value={this.state.newEng}
                        onChange={this.handleInputChangeNewEng} />

                    <button>
                        Add new word
                </button>
                </form>*/