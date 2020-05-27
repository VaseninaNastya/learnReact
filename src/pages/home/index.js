import React from "react";
import HeaderBlock from "../../components/HeaderBlock";
import Header from "../../components/Header"

import Paragrah from "../../components/Paragraph";

import MainContentBlock from "../../components/MainContentBlock";

class HomePage extends React.Component {
    render() {

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
                <MainContentBlock user={this.props.user} />
            </>
        );
    }


}

export default HomePage;