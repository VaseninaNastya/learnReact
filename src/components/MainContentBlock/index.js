import React from "react";
import CardHolder from '../CardHolder';
import database from "../../servises/firebase"
import s from "./MainContentBlock.module.css";
import { Button } from 'antd';
import { fire} from "../../servises/firebase"

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
    state = { wordArr: [] }

    componentDidMount() {
        database.ref(this.urlRequest).on(`value`, res => {
            console.log(`####: res`, res.val());
            this.setState({
                wordArr: res.val() || []
            })
        })
    }
    urlRequest = `/cards/${this.props.user.uid}`;

    handleAddItem = ({ rus, eng }) => {
        const newArr=[
            ...this.state.wordArr,
            {
                eng: eng,
                rus: rus,
                id: Math.floor(Math.random()*Math.floor(1000))
            }
        ]
        this.setState({wordArr:newArr})
        console.log(
            "какой массив вышел?", newArr
        )
        database.ref(this.urlRequest).set(newArr)
        
    }
    handleDelitedItem = (id) => {

        const newArr=this.state.wordArr.filter(item => item.id !== id)
database.ref(this.urlRequest).set(newArr)
        
        /*
        database.ref("/cards/" + id)
            .remove()
            .then(this.getAllData())*/
    }
    handleLogOut=()=>{
        fire.auth().signOut()
    }
    render() {

        const { allCardWhite } = this.state;
        const {  hideBackground } = this.props;
        const styleCover = hideBackground ? { backgroundImage: "none" } : {};
        const { wordArr } = this.state;
        return (
            <div className={s.cover}>
                <div className={s.wrap}>
                    <CardHolder item={wordArr} onDelitedItem={this.handleDelitedItem} onAddItem={this.handleAddItem} />
                    <Button onClick={this.handleLogOut}>{this.props.user.email}</Button>
                </div>
            </div>
        )
    }

}
/*


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
    state = { wordArr: [] }

    componentDidMount() {
        this.getAllData()
    }


    getAllData=()=> {database.ref("/cards/").once(`value`).then(res => {

        console.log(`####: res`, res.val());
        this.setState({
            wordArr: res.val()
        })
    })}
    handleAddItem =({ rus, eng })=>{
        database.ref("/cards/"+this.state.wordArr.length).set({
            eng: eng,
            rus: rus,
            id: this.state.wordArr.length+1
        }).then(this.getAllData())
    }
    handleDelitedItem = (id) => {
        database.ref("/cards/"+id)
            .remove()
            .then(this.getAllData())
        }

    render() {
        console.log("fllhlhelske", this.props.user.uid)
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
*/
export default MainContentBlock;


