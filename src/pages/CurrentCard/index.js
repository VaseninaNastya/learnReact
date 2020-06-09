import React from 'react';
import Card from '../../components/Card';
import { withFirebase } from '../../context/firebaseContext';
import { Typography, Spin } from 'antd';
import s from './CurentCard.module.css';
import {withRouter} from 'react-router-dom';


const { Title } = Typography;

class CurrentCard extends React.PureComponent {
    state = {
        word: {
            id: 0,
            eng: '',
            rus: ''
        }
    }

    componentDidMount() {
        const { firebase, match: { params } } = this.props;

        if (params.id) {
            firebase.getUserCurrentCardRef(params.id).once('value').then(res => {
                this.setState({
                    word: res.val()
                })
            })
        }

    }

    render() {
        const { word: { eng, rus } } = this.state;
        if (eng === '' && rus === '') {
            return <div className={s.root}><Spin /></div>
        }
        return (
            <div className={s.root}>
                <Title>
                    This is our current card - {eng}
                </Title>
                <Card eng={eng} rus={rus} />
            </div>
        )
    }
}

export default withFirebase(CurrentCard);


