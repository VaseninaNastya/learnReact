import React from "react";
import Card from "../Card"
import Reset from "../Reset"
import s from "./CardHolder.module.css";


class CardHolder extends React.Component {
    state = {
        allCardWhite: false,
        value: "",
        label: ""

    }
    updateData = (value) => {

        this.setState({ allCardWhite: value })

    }
    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ value: e.target.value })
    };
    handleSubmitForm =(e) =>{
        e.preventDefault();
        this.setState(({value})=>{
            return{
                label: value,
                value: "",
            }

        }
        )
    }
    render() {
        const {item, onDelitedItem} = this.props;
        const{allCardWhite}=this.state;
        console.log("оыоыоы", item)
        return (
            <>
                                <Reset updateData={this.updateData} />
                <div>
                    {this.state.label}
                </div>
                <form
                    className={s.form}
                    onSubmit={this.handleSubmitForm}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInputChange} />
                    <button>
                        Add new word
                </button>
                </form>

                <div className={s.CardHolder}>{
                            item.map(({ eng, rus, id }) => {
                                return (
                                    <Card key={id} eng={eng} rus={rus}
                                    allCardWhite={allCardWhite}
                                        onDelitedItem={()=>onDelitedItem(id)}

                                    />

                                )
                            })
                        }</div>
            </>
        )
    }
}





export default CardHolder;


/*                                        allCardWhite={allCardWhite}*/