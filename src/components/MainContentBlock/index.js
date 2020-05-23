import React from "react";
import Reset from '../Reset';

import CardHolder from '../CardHolder';

import s from "./MainContentBlock.module.css";


const wordsList = [
    {
        eng: 'between',
        rus: 'между',
        id: 0
    },
    {
        eng: 'high',
        rus: 'высокий',
        id: 1
    },
    {
        eng: 'really',
        rus: 'действительно',
        id: 2
    },
    {
        eng: 'something',
        rus: 'что-нибудь',
        id: 3
    },
    {
        eng: 'most',
        rus: 'большинство',
        id: 4
    },
    {
        eng: 'another',
        rus: 'другой',
        id: 5
    },
    {
        eng: 'much',
        rus: 'много',
        id: 6
    },
    {
        eng: 'family',
        rus: 'семья',
        id: 7
    },
    {
        eng: 'own',
        rus: 'личный',
        id: 8
    },
    {
        eng: 'out',
        rus: 'из/вне',
        id: 9
    },
    {
        eng: 'leave',
        rus: 'покидать',
        id: 10
    },
];

class MainContentBlock extends React.Component {
    state = { wordArr: wordsList }

    handleDelitedItem = (id) => {

        this.setState(({ wordArr }) => {
            const idx = wordArr.findIndex(item => item.id === id)

            const newWordArr = [
                ...wordArr.slice(0, idx),
                ...wordArr.slice(idx + 1)
            ]
            return {
                wordArr: newWordArr,
            }
        }
        )
    }
    handleAddItem = ({ rus, eng }) => {


        this.setState(({ wordArr }) => {
            const id = wordArr[wordArr.length - 1].id + 1
            const AddWordArr = [
                ...wordArr,
                { rus: rus, eng: eng, id: id }
            ]
            return {
                wordArr: AddWordArr
            }
        })
    }
    render() {
        console.log(this.state);
        const { allCardWhite } = this.state;
        const { children, hideBackground } = this.props;
        const styleCover = hideBackground ? { backgroundImage: "none" } : {};
        const { wordArr } = this.state;
        return (
            <div className={s.cover}>
                <div className={s.wrap}>


                    <CardHolder item={wordArr} onDelitedItem={this.handleDelitedItem} onAddItem={this.handleAddItem} />


                    {children}
                </div>
            </div>
        )
    }

}

/*

updateData = (value) => {
    this.setState({ name: value })

const MainContentBlock = ({ hideBackground = false, children }) => {
    /*
        const styleCover = hideBackground? {backgroundImage: "none"}:{};
        return (
            <div className={s.cover} style={styleCover}>
                <div className={s.wrap}>
                    {children}
                </div>
            </div>
        )
    }
    */



export default MainContentBlock;


