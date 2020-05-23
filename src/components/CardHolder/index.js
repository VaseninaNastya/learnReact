import React from "react";
import Card from "../Card"
import Reset from "../Reset"
import s from "./CardHolder.module.css";

class CardHolder extends React.Component {
    state = {
        allCardWhite: false,
        newEng: "",
        newRus: "",
    }
    updateData = (value) => {
        this.setState({ allCardWhite: value })
    }
    handleInputChangeNewEng = (e) => {
        console.log(e.target.value);
        this.setState({ newEng: e.target.value })
    };
    handleInputChangeNewRus = (e) => {
        console.log(e.target.value);
        this.setState({ newRus: e.target.value })
    };
    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.onAddItem(
            {rus:this.state.newRus,
            eng:this.state.newEng,
            }
        );
        this.setState(({ value }) => {
            return {
                newRus: "",
                newEng: "",
            }
        }
        )
    }
    render() {
        const { item, onDelitedItem } = this.props;
        const { allCardWhite } = this.state;
        console.log("оыоыоы", item)
        return (
            <>
                <Reset updateData={this.updateData} />
                <form
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
                </form>
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
/*
<div>
{this.state.label}
</div>*/