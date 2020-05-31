import React from "react";
import CardHolder, {hoc} from '../CardHolder';
import Card from '../Card';
import database from "../../servises/firebase"
import s from "./MainContentBlock.module.css";
import { Button } from 'antd';
import FirebaseContext , {withFirebase} from '../../context/firebaseContext';
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
        const { getUserCardsRef } = this.props.firebase
        getUserCardsRef().on(`value`, res => {
            console.log(`####: res`, res.val());
            this.setState({
                wordArr: res.val() || []
            })
        })
    }

    handleAddItem = ({ rus, eng }) => {
        const { getUserCardsRef } = this.props.firebase
        const newArr = [
            ...this.state.wordArr,
            {
                eng: eng,
                rus: rus,
                id: Math.floor(Math.random() * Math.floor(1000))
            }
        ]
        this.setState({ wordArr: newArr })
        getUserCardsRef().set(newArr)

    }
    handleDelitedItem = (id) => {
        const { getUserCardsRef } = this.props.firebase
        const newArr = this.state.wordArr.filter(item => item.id !== id)
        getUserCardsRef().set(newArr)
    }
    handleLogOut = () => {
        const { auth } = this.props.firebase
        auth.signOut()
        const {history}=this.props
        history.push("/login")
    }
    render() {

        console.log('что с пропсами в мейн контент блок', this.props)
        const { wordArr } = this.state;

        return (

            <div className={s.cover}>
                <div className={s.wrap}>
                    <FirebaseContext.Consumer>
                    {
                        ({getUserCardsRef})=>{
                            const CardEngList=hoc(Card, getUserCardsRef);
                            return <CardEngList item={wordArr} onDelitedItem={this.handleDelitedItem} onAddItem={this.handleAddItem} user={this.props.firebase}/>
                        }
                    }
                    </FirebaseContext.Consumer>
                    <Button onClick={this.handleLogOut} >{this.props.firebase.userEmail}</Button>


                </div>
            </div>
        )
    }
}
MainContentBlock.contextType = FirebaseContext;
export default withFirebase(MainContentBlock);

