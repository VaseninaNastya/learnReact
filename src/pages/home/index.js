import React from "react";
import HeaderBlock from "../../components/HeaderBlock";
import Header from "../../components/Header"

import Paragrah from "../../components/Paragraph";

import MainContentBlock from "../../components/MainContentBlock";
import FirebaseContext, { withFirebase } from "../../context/firebaseContext";

class HomePage extends React.Component {
    render() {
        console.log('пропсы в хоме', this.props)
        return (
            <>
                <HeaderBlock>
                    <Header>
                        Время учить слова онлайн
                    </Header>
                    <Paragrah>
                        Используйте карточки для запоминания и пополняйте активный слованый запас
                    </Paragrah>
                </HeaderBlock>
                <MainContentBlock history={this.props.history} />
            </>
        );
    }


}

export default withFirebase(HomePage);